import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import ThemeToggle from "./ThemeToggle"

const StyledHeading1 = styled.h1`
  font-size: 2.57rem;
`

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Header = (props) => {
  const { siteTitle } = props

  return (
    <StyledHeader>
      <StyledHeading1>
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
