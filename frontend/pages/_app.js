import "../styles/globals.css"
import theme from "../theme"
import { ThemeProvider } from "styled-components"
import AppContext from "../contexts/appcontext"
import { useState } from "react"
import axios from "axios"

function MyApp({ Component, pageProps }) {
  const [appData, setAppData] = useState({
    popup: false,
    authType: "",
    authToken: "",
  })

  return (
    <AppContext.Provider value={[appData, setAppData]}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </AppContext.Provider>
  )
}

export default MyApp
