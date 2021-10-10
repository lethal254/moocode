import "../styles/globals.css"
import theme from "../theme"
import { ThemeProvider } from "styled-components"
import AppContext from "../appcontext"
import { useState } from "react"

function MyApp({ Component, pageProps }) {
  const [showPopup, setShowPopup] = useState({ popup: false, authType: "" })

  return (
    <AppContext.Provider value={[showPopup, setShowPopup]}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </AppContext.Provider>
  )
}

export default MyApp
