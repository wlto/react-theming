import { lightTheme, darkTheme } from "./constants"

const ThemeReducer = (state, action) => {
  switch (action.type) {
    case `TOGGLE_THEME`: {
      const updatedDarkStatus = !state.dark
      if (typeof window !== `undefined`) {
        if (updatedDarkStatus) {
          localStorage.setItem(`react-theming-is-dark`, `true`)
        } else {
          localStorage.setItem(`react-theming-is-dark`, `false`)
        }
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