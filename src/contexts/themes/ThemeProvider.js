import React, { useReducer } from "react"

import ThemeContext from "./ThemeContext"
import ThemeReducer from "./ThemeReducer"
import { lightTheme, darkTheme } from "./constants"

const ThemeProvider = (props) => {
  // For SSR
  const globalWindow = typeof window !== `undefined` && window
  const savedThemeIsDark = globalWindow.localStorage.getItem(`react-theming-is-dark`) === `true`
  const preferedThemeIsDark = globalWindow.matchMedia(`(prefers-color-scheme: dark)`).matches

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