import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        <script dangerouslySetInnerHTML={{
          __html: `
            (function() {
              var preferredTheme;
              window.__onThemeChange = function() {}

              function setTheme(newTheme) {
                window.__theme = newTheme;
                preferredTheme = newTheme;
                document.body.className = newTheme;
                window.__onThemeChange(newTheme);
              }

              try {
                preferredTheme = localStorage.getItem('theme');
              } catch (err) { console.error(err); }

              window.__setPreferredTheme = function(newTheme) {
                setTheme(newTheme);
                try {
                  localStorage.setItem('theme', newTheme);
                } catch (err) { console.error(err); }
              }

              var systemDarkQuery = matchMedia('(prefers-color-scheme: dark)')
              systemDarkQuery.addListener(function(e) {
                window.__setPreferredTheme(e.matches ? 'dark' : 'light');
              });
              setTheme(preferredTheme || (systemDarkQuery.matches ? 'dark' : 'light'));
            })()
          `
        }}></script>

        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
