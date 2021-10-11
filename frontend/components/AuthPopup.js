import { useContext, useState } from "react"
import styled from "styled-components"
import AppContext from "../contexts/appcontext"
import CloseIcon from "@material-ui/icons/Close"
import Button from "../components/Button"
import axios from "axios"
import { NEXT_URL } from "../config"

// Styled components styles

const Container = styled.div`
  background-color: #121212b2;
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  transition: all 1s ease;
  display: flex;
  align-items: center;
  justify-content: center;
`

const AuthContainer = styled.div`
  width: 40%;
  height: 90%;
  background: #2a2a2a;
  border-radius: 15px;
  padding: 50px 80px;
`

const TitleContainer = styled.div`
  width: 100%;
  height: 8vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Title = styled.h2`
  font-size: ${(props) => props.theme.fontSize.normalText};
  color: ${(props) => props.theme.colors.text};
`

const Form = styled.form`
  width: 100%;
  display: grid;
  gap: 1.5rem;
  grid-template-columns: 1fr;
  margin-top: 3rem;
`

const Input = styled.input`
  width: 100%;
  border: none;
  outline: none;
  background-color: ${(props) => props.theme.colors.darkBackground};
  padding: 1.7rem;
  border-radius: 8px;
  font-size: ${(props) => props.theme.fontSize.normalText};
  color: ${(props) => props.theme.colors.text};
`

const AuthPopup = () => {
  const [showPopup, setShowPopup] = useContext(AppContext)

  // Login states
  const [loginEmail, setLoginEmail] = useState("")
  const [loginPassword, setLoginPassword] = useState("")
  const handleLoginFormSubmit = async (e) => {
    e.preventDefault()
    const response = await axios.post(`${NEXT_URL}/api/login`, {
      email: loginEmail,
      password: loginPassword,
    })
  }
  // Signup states

  return (
    <Container>
      {showPopup.authType === "login" ? (
        <AuthContainer>
          <TitleContainer>
            <Title>Login</Title>
            <CloseIcon
              style={{ color: "white", cursor: "pointer" }}
              onClick={() => {
                setShowPopup(!showPopup)
              }}
            />
          </TitleContainer>
          <Form onSubmit={handleLoginFormSubmit}>
            <Input
              placeholder='Email'
              type='text'
              onChange={(e) => {
                setLoginEmail(e.target.value)
              }}
            />
            <Input
              placeholder='Password'
              type='password'
              onChange={(e) => {
                setLoginPassword(e.target.value)
              }}
            />
            <Button>Login</Button>
          </Form>
        </AuthContainer>
      ) : (
        <AuthContainer>
          <TitleContainer>
            <Title>Signup</Title>
            <CloseIcon
              style={{ color: "white", cursor: "pointer" }}
              onClick={() => {
                setShowPopup(!showPopup)
              }}
            />
          </TitleContainer>
          <Form>
            <Input placeholder='Email' type='text' />
            <Input placeholder='Full Name' type='text' />
            <Input placeholder='Username' type='text' />
            <Input placeholder='Password' type='password' />
            <Button>Login</Button>
          </Form>
        </AuthContainer>
      )}
    </Container>
  )
}

export default AuthPopup
