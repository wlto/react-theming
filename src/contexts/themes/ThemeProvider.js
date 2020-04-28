import React, { useReducer } from "react"

import ThemeContext from "./ThemeContext"
import ThemeReducer from "./ThemeReducer"
import { lightTheme, darkTheme } from "./constants"

const ThemeProvider = (props) => {
  let savedThemeIsDark = false
  let preferedThemeIsDark = false
  // For SSR
  if (typeof window !== `undefined`) {
    savedThemeIsDark = localStorage.getItem(`react-theming-is-dark`) === `true`
    preferedThemeIsDark = matchMedia(`(prefers-color-scheme: dark)`).matches
  }

  const initialTheme = {
    dark: savedThemeIsDark || preferedThemeIsDark || false,
    colourTheme: (savedThemeIsDark || preferedThemeIsDark) ? darkTheme : lightTheme,
  }

  const [theme, dispatchTheme] = useReducer(ThemeReducer, initialTheme)

  return (
    <ThemeContext.Provider value={{ theme, dispatchTheme }}>
      {props.children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider