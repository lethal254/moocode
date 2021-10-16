import { Avatar } from "@material-ui/core"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  padding: 1rem;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.25s ease;
  margin-top: 1rem;
  &:hover {
    background-color: #a2a2a2;
  }
`

const CardLeft = styled.div`
  color: white;
  margin-right: 0.5rem;
`
const CardRight = styled.div`
  width: 100%;
  height: 100%;
  flex: 1;
`
const UserTitle = styled.h2`
  font-size: ${(props) => props.theme.fontSize.normaText};
  color: White;
  font-weight: bold;
  margin-bottom: 1rem;
`

const PostText = styled.p`
  font-size: ${(props) => props.theme.fontSize.normaText};
  color: white;
  margin-top: 1rem;
  line-height: 25px;
`
const PostImage = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const ImageImg = styled.img`
  max-height: 100%;
  max-width: 100%;
  object-fit: cover;
`

const PostCard = ({ image, imageUrl, body, creator }) => {
  return (
    <Container>
      <CardLeft>
        <Avatar
          style={{ width: "70px", height: "70px" }}
          src='https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375_960_720.png'
        />
      </CardLeft>
      <CardRight>
        <UserTitle>{creator}</UserTitle>
        <PostText>{body}</PostText>
        {image ? (
          <PostImage>
            <ImageImg src={imageUrl} alt='Hero image' />
          </PostImage>
        ) : (
          ""
        )}
      </CardRight>
    </Container>
  )
}

export default PostCard
