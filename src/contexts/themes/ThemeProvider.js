import React, { useState, useEffect } from "react"

import ThemeContext from "./ThemeContext"
import { lightTheme, darkTheme } from "./constants"

const ThemeProvider = (props) => {
  const [theme, setTheme] = useState({
    dark: false,
    colourTheme: { ...lightTheme }
  })

  useEffect(() => {
    const savedThemeIsDark = JSON.parse(localStorage.getItem(`react-theming-is-dark`)) || matchMedia(`(prefers-color-scheme: dark)`).matches
    if (savedThemeIsDark) {
      setTheme({
        dark: true,
        colourTheme: { ...darkTheme }
      })
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(`react-theming-is-dark`, JSON.stringify(theme.dark))
  }, [theme]);

  const toggleTheme = () => {
    const updatedDarkStatus = !theme.dark
    setTheme({
      dark: updatedDarkStatus,
      colourTheme: updatedDarkStatus ? { ...darkTheme } : { ...lightTheme }
    })
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider