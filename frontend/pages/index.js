import styled from "styled-components"
import LandingPageContainer from "../components/LandingPageContainer"
import Image from "next/image"
import Button from "../components/Button"
import AuthPopup from "../components/AuthPopup"
import { useContext, useState } from "react"
import AppContext from "../appcontext"

const Hero = styled.section`
  width: 100%;
  display: flex;
`

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const Title = styled.h1`
  color: ${(props) => props.theme.colors.text};
  font-size: ${(props) => props.theme.fontSize.heroText};
  margin-bottom: 3rem;
  width: 70%;
`

const Description = styled.p`
  color: ${(props) => props.theme.colors.text};
  font-size: ${(props) => props.theme.fontSize.normalText};
  margin-bottom: 3rem;
`
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`

const index = () => {
  const [showPopup] = useContext(AppContext)
  return (
    <LandingPageContainer showPopup={showPopup}>
      {showPopup.popup ? <AuthPopup /> : ""}
      <Hero>
        <Left>
          <Title>Motivate yourself to code everyday</Title>
          <Description>
            A community of developers motivating each other to do more everyday.
          </Description>
          <Button>Learn How</Button>
        </Left>
        <Right>
          <Image src='/heroimg.png' alt='Hero image' width='700' height='700' />
        </Right>
      </Hero>
    </LandingPageContainer>
  )
}

export default index
