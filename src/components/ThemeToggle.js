import React, { useState, useEffect } from "react"
import styled from "styled-components"

const ToggleWrapper = styled.div`
  position: relative;
  width: 3.2rem;
  height: calc(1.4rem + 0.14rem + 0.14rem);
  padding: 0.14rem;
  border-radius: 1.4rem;
  background-color: var(--colour-accent);
  cursor: pointer;
  transition: all 350ms ease-in-out;
`

const ToggleThumb = styled.div`
  position: absolute;
  top: 0.14rem;
  display: inline-block;
  width: 1.4rem;
  height: 1.4rem;
  border-radius: 50%;
  background-color: var(--colour-primary);
  transition: all 350ms ease-in-out;
`

const ToggleEmojiWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-left: 0.14rem;
  padding-right: 0.14rem;
`

const ToggleEmoji = styled.div`
  display: inline-block;
  padding-top: 0.04rem;
  font-size: 1rem;
  line-height: 1.4rem;
`

const ThemeToggle = (props) => {
  const [theme, setTheme] = useState(null)

  useEffect(() => {
    setTheme(window.__theme)
    window.__onThemeChange = () => setTheme(window.__theme)
  }, [])

  return (
    <>
      <ToggleWrapper onClick={(e) => {
        window.__setPreferredTheme(window.__theme === `dark` ? `light` : `dark`)
      }}>
        <ToggleThumb className="ToggleThumb" theme={theme} />
        <ToggleEmojiWrapper>
          <ToggleEmoji><span role="img" aria-label="moon">🌙</span></ToggleEmoji>
          <ToggleEmoji><span role="img" aria-label="sun">☀️</span></ToggleEmoji>
        </ToggleEmojiWrapper>
      </ToggleWrapper>
    </>
  )
}

ThemeToggle.propTypes = {

}

ThemeToggle.defaultProps = {

}

export default ThemeToggle