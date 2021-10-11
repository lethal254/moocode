import Router from "next/router"
import { useContext, useEffect } from "react"
import LandingPageContainer from "../components/LandingPageContainer"
import AppContext from "../contexts/appcontext"

const Posts = ({ authToken }) => {
  useEffect(() => {
    if (!authToken) {
      Router.push("/")
    }
  })
  if (authToken) {
    return <LandingPageContainer>I am the posts page</LandingPageContainer>
  } else {
    return ""
  }
}

export default Posts

export async function getServerSideProps({ req }) {
  const token = req.headers.cookie?.split("=")[1]

  return {
    props: {
      authToken: token || "",
    },
  }
}
