import styled from "styled-components"
import LandingPageContainer from "../components/LandingPageContainer"
import Image from "next/image"
import Button from "../components/Button"
import AuthPopup from "../components/AuthPopup"
import { useContext, useEffect, useState } from "react"
import AppContext from "../contexts/appcontext"

import Router from "next/router"

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

const index = ({ authToken }) => {
  const [appData, setAppData] = useContext(AppContext)

  useEffect(() => {
    if (authToken) {
      Router.push("/posts")
      setAppData({ ...appData, authToken })
    }
  }, [authToken])

  return (
    <LandingPageContainer appData={appData}>
      {appData.popup ? <AuthPopup /> : ""}
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

export async function getServerSideProps({ req }) {
  const token = req.headers.cookie?.split("=")[1]

  return {
    props: {
      authToken: token || "",
    },
  }
}
