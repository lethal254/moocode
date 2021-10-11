import axios from "axios"
import Router from "next/router"
import { useContext, useEffect } from "react"
import styled from "styled-components"
import { NEXT_URL } from "../config"
import AppContext from "../contexts/appcontext"
import Button from "./Button"

const Container = styled.div`
  height: 8vh;
  margin-bottom: 4vh;
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 768px) {
    padding: 0 20px;
  }
`
const Left = styled.div`
  flex: 1;
`
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`
const Link = styled.a`
  color: ${(props) => props.theme.colors.text};
  font-size: ${(props) => props.theme.fontSize.normalText};
  font-weight: bold;
  text-decoration: none;
  margin-right: 2rem;
  cursor: pointer;
  @media (max-width: 768px) {
    font-size: ${(props) => props.theme.fontSize.normalTextPhone};
    margin-right: 1rem;
  }
`

const Header = () => {
  const [appData, setAppData] = useContext(AppContext)

  const handleLogout = async () => {
    await axios.post(`${NEXT_URL}/api/logout`)
    setAppData({ ...appData, authToken: "" })
    Router.push("/")
  }

  useEffect(() => {
    if (!appData.authToken) {
      Router.push("/")
    }
  }, [])

  return (
    <Container>
      <Left>
        <Link href='/'>Moocode.</Link>
      </Left>
      <Right>
        {appData.authToken ? (
          <Button onClick={handleLogout}>Logout</Button>
        ) : (
          <>
            <Link
              nav
              onClick={() => {
                setAppData({ popup: !appData.popup, authType: "login" })
              }}>
              Login
            </Link>
            <Button
              onClick={() => {
                setAppData({ popup: !appData.popup, authType: "signup" })
              }}>
              Signup
            </Button>
          </>
        )}
      </Right>
    </Container>
  )
}

export default Header
