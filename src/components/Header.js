import React, { useContext } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import ThemeToggle from "./ThemeToggle"
import ThemeContext from "../contexts/themes/ThemeContext"

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const StyledHeading1 = styled.h1`
  font-size: 2.57rem;
  color: ${props => props.theme.colourTheme.accent};
`

const Header = (props) => {
  const { siteTitle } = props
  const { theme } = useContext(ThemeContext)

  return (
    <StyledHeader>
      <StyledHeading1 theme={theme}>
        {siteTitle}
      </StyledHeading1>
      <ThemeToggle />
    </StyledHeader>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
