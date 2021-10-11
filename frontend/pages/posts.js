import { useContext, useEffect } from "react"
import LandingPageContainer from "../components/LandingPageContainer"
import AppContext from "../contexts/appcontext"

const Posts = ({ authToken }) => {
  const [showPopup, setShowPopup] = useContext(AppContext)
  useEffect(() => {
    if (authToken) {
      setShowPopup({ ...showPopup, authToken })
    }
  }, [authToken])
  return <LandingPageContainer>I am the posts page</LandingPageContainer>
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
