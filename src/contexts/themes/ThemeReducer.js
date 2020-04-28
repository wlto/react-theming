import { lightTheme, darkTheme } from "./constants"

const ThemeReducer = (state, action) => {
  switch (action.type) {
    case `TOGGLE_THEME`: {
      const updatedDarkStatus = !state.dark

      if (updatedDarkStatus) {
        localStorage.setItem(`react-theming-is-dark`, `false`)
      } else {
        localStorage.setItem(`react-theming-is-dark`, `true`)
      }

      return {
        ...state,
        dark: updatedDarkStatus,
        colourTheme: updatedDarkStatus ? darkTheme : lightTheme
      }
    }
    default: {
      return {
        ...state
      }
    }
  }
}

export default ThemeReducer