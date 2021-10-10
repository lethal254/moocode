import { useContext } from "react"
import styled from "styled-components"
import AppContext from "../appcontext"
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
  const [showPopup, setShowPopup] = useContext(AppContext)

  return (
    <Container>
      <Left>
        <Link href='/'>Moocode.</Link>
      </Left>
      <Right>
        <Link
          nav
          onClick={() => {
            setShowPopup({ popup: !showPopup.popup, authType: "login" })
          }}>
          Login
        </Link>
        <Button
          onClick={() => {
            setShowPopup({ popup: !showPopup.popup, authType: "signup" })
          }}>
          Signup
        </Button>
      </Right>
    </Container>
  )
}

export default Header
