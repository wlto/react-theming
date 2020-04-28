/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useContext } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled, { createGlobalStyle } from "styled-components"

import Header from "./Header"
import ThemeContext from "../contexts/themes/ThemeContext"

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', Helvetica, 'Segoe UI', Arial, sans-serif;
    background-color: ${props => props.theme.colourTheme.primary};
    transition: all 300ms ease-in-out;
  }

  :root {
    font-size: 14px;
  }

  @media only screen and (min-width: 960px) {
    :root {
      font-size: 16px;
    }
  }

  @media only screen and (min-width: 1028px) {
    :root {
      font-size: 18px;
    }
  }
`

const StyledLayout = styled.div`
  padding-top: 4.285rem;
  padding-left: 2.285rem;
  padding-right: 2.285rem;

  @media only screen and (min-width: 720px) {
    max-width: 720px;
    margin: 0 auto;
  }

  @media only screen and (min-width: 960px) {
    max-width: 960px;
  }

  @media only screen and (min-width: 1028px) {
    max-width: 1028px;
  }
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const { theme } = useContext(ThemeContext)

  return (
    <StyledLayout>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div>
        <main>{children}</main>
      </div>
      <GlobalStyle theme={theme} />
    </StyledLayout>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
