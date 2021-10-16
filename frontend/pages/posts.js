import Router from "next/router"
import { useEffect, useState } from "react"
import styled from "styled-components"
import LandingPageContainer from "../components/LandingPageContainer"
import { Avatar } from "@material-ui/core"
import Button from "../components/Button"
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera"
import PostCard from "../components/PostCard"
import firebase, { storage } from "../firebase/firebase"
import axios from "axios"
import { API_URL } from "../config"
import Pusher from "pusher-js"

const Container = styled.div`
  width: 100%;
  min-height: 90vh;
  display: flex;
`
const Left = styled.div`
  flex: 1;
`

const ProfileName = styled.h2`
  font-size: ${(props) => props.theme.fontSize.normaText};
  color: White;
  font-weight: bold;
  margin-top: 1rem;
`
const UserName = styled.p`
  font-size: ${(props) => props.theme.fontSize.normaText};
  color: grey;
  font-weight: bold;
  margin-top: 1rem;
`
const Center = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  max-width: 700px;
  border: 1px solid #c4c4c4;
  padding: 1rem;
  overflow-y: scroll;
  border-bottom: none;
  max-height: 90vh;

  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`
const PostForm = styled.form`
  width: 100%;
  display: flex;
`
const PostFormLeft = styled.div`
  color: white;
  margin-right: 0.5rem;
`
const PostFormRight = styled.div`
  width: 100%;
  height: 100%;
  flex: 1;
`
const PostFormRightBottom = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 0.5rem;
`

const TextArea = styled.textarea`
  width: 100%;
  min-height: 150px;
  border-radius: 8px;
  outline: none;
  border: none;
  background-color: #a2a2a2;
  padding: 1rem;
  color: #fff;
`
const Label = styled.label`
  height: 100%;
  cursor: pointer;
`

const Input = styled.input`
  color: white;
  display: none;
  height: 100%;
`

const Right = styled.div`
  flex: 1;
`

const Posts = ({ authToken }) => {
  const [body, setBody] = useState("")
  const [image, setImage] = useState("")
  const [posts, setPosts] = useState([])

  useEffect(() => {
    if (!authToken) {
      Router.push("/")
    }
  }, [authToken])

  const handleImageUpload = (e) => {
    setImage(e.target.files[0])
  }

  const fetchPosts = async () => {
    if (authToken) {
      const config = {
        headers: {
          "Content-Type": "application/json",
          token: `Bearer ${authToken}`,
        },
      }

      const { data } = await axios.get(`${API_URL}/api/post`, config)
      setPosts(data)
    }
  }

  useEffect(() => {
    fetchPosts()
    const pusher = new Pusher("b6b0b80f1b41c16c1981", {
      cluster: "mt1",
    })
    const channel = pusher.subscribe("posts")
    channel.bind("inserted", function (data) {
      fetchPosts()
    })
  }, [])

  const handleFormSubmit = (e) => {
    e.preventDefault()
    if (!image) {
      console.error(`not an image, the image file is a ${typeof image}`)
      return
    }
    const uploadTask = storage.ref(`images/${image.name}`).put(image)
    uploadTask.on(
      "state_changed",
      (snapshot) => {},
      (error) => {
        console.log(error)
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            if (authToken) {
              const config = {
                headers: {
                  "Content-Type": "application/json",
                  token: `Bearer ${authToken}`,
                },
              }
              console.log(authToken)
              axios.post(
                `${API_URL}/api/post/new`,
                {
                  body,
                  image: url,
                },
                config
              )
            }
          })
      }
    )
  }

  if (authToken) {
    return (
      <LandingPageContainer>
        <Container>
          <Left>
            <Avatar
              style={{ width: "200px", height: "200px" }}
              src='https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375_960_720.png'
            />
            <ProfileName>Benard Ogutu</ProfileName>
            <UserName>@bennycodes</UserName>
          </Left>
          <Center>
            <PostForm onSubmit={handleFormSubmit}>
              <PostFormLeft>
                <Avatar
                  style={{ width: "70px", height: "70px" }}
                  src='https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375_960_720.png'
                />
              </PostFormLeft>
              <PostFormRight>
                <TextArea onChange={(e) => setBody(e.target.value)}></TextArea>
                <PostFormRightBottom>
                  <Label>
                    <PhotoCameraIcon
                      style={{ color: "white", fontSize: "2rem" }}
                    />
                    <Input type='file' onChange={handleImageUpload} />
                  </Label>
                  <Button>Post</Button>
                </PostFormRightBottom>
              </PostFormRight>
            </PostForm>
            {posts.map((post) => (
              <PostCard
                image={post.image ? true : false}
                imageUrl={post.image}
                body={post.body}
                creator={post.creator.fullName}
              />
            ))}
          </Center>
          <Right>
            <h1>Right</h1>
          </Right>
        </Container>
      </LandingPageContainer>
    )
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
