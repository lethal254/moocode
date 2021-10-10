import styled from "styled-components"
import Header from "./Header"

const Container = styled.div`
  background-color: ${(props) => props.theme.colors.darkBackground};
  min-height: 100vh;
  padding: 0 55px;
  position: relative;
`

const LandingPageContainer = ({ children }) => {
  return (
    <Container>
      <Header />
      {children}
    </Container>
  )
}

export default LandingPageContainer
