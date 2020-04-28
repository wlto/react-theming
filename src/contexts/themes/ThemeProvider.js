import React, {useReducer} from "react"

import ThemeContext from "./ThemeContext"
import ThemeReducer from "./ThemeReducer"
import { lightTheme, darkTheme } from "./constants"

const ThemeProvider = (props) => {
  const savedThemeIsDark = localStorage.getItem(`react-theming-is-dark`) === `true`

  const initialTheme = {
    dark: savedThemeIsDark || false,
    colourTheme: savedThemeIsDark ? darkTheme : lightTheme,
  }

  const [theme, dispatchTheme] = useReducer(ThemeReducer, initialTheme)

  return (
    <ThemeContext.Provider value={{theme, dispatchTheme}}>
      {props.children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider