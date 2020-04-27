import React, { useState } from "react"
import styled from "styled-components"

const ToggleWrapper = styled.div`
  position: relative;
  width: 3.2rem;
  height: calc(1.4rem + 0.14rem + 0.14rem);
  padding: 0.14rem;
  border-radius: 1.4rem;
  background-color: ${props => props.theme == "light" ? "#000" : "#fff"};
  cursor: pointer;
  transition: all 350ms ease-in-out;
`

const ToggleThumb = styled.div`
  position: absolute;
  top: 0.14rem;
  left: ${props => props.theme == "light" ? "0.14rem" : "calc(100% - 1.4rem - 0.14rem)"};
  display: inline-block;
  width: 1.4rem;
  height: 1.4rem;
  border-radius: 50%;
  background-color: ${props => props.theme == "light" ? "#fff" : "#000"};
  transition: all 350ms ease-in-out;
`

const ToggleEmojiWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-left: 0.14rem;
  padding-right: 0.14rem;
`

const ToggleEmoji = styled.span`
  display: inline-block;
  padding-top: 0.04rem;
  font-size: 1rem;
  line-height: 1.4rem;
`

const ThemeToggle = (props) => {
  const [ theme, setTheme ]= useState(`light`);

  const toggleTheme = () => {
    if (theme == `light`) {
      setTheme(`dark`);
    } else {
      setTheme(`light`);
    }
  }
  
  return (
    <>
      <ToggleWrapper onClick={toggleTheme} theme={theme} >
        <ToggleThumb theme={theme} />
        <ToggleEmojiWrapper>
          <ToggleEmoji role="img" aria-label="dark">🌙</ToggleEmoji>
          <ToggleEmoji role="img" aria-label="light">☀️</ToggleEmoji>
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