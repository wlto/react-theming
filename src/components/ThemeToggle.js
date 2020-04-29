import React, { useContext } from "react"
import styled from "styled-components"

import ThemeContext from "../contexts/themes/ThemeContext"

const ToggleWrapper = styled.div`
  position: relative;
  width: 3.2rem;
  height: calc(1.4rem + 0.14rem + 0.14rem);
  padding: 0.14rem;
  border-radius: 1.4rem;
  background-color: ${props => props.theme.colourTheme.accent};
  cursor: pointer;
  transition: all 350ms ease-in-out;
`

const ToggleThumb = styled.div`
  position: absolute;
  top: 0.14rem;
  left: ${props => !props.theme.dark ? "0.14rem" : "calc(100% - 1.4rem - 0.14rem)"};
  display: inline-block;
  width: 1.4rem;
  height: 1.4rem;
  border-radius: 50%;
  background-color: ${props => props.theme.colourTheme.primary};
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
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <>
      <ToggleWrapper onClick={toggleTheme} theme={theme} >
        <ToggleThumb theme={theme} />
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