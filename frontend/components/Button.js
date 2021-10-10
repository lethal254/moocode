import styled from "styled-components"

const Btn = styled.button`
  background-color: ${(props) => props.theme.colors.tealBackground};
  border-radius: 8px;
  border: none;
  outline: none;
  padding: 10px 15px;
  color: ${(props) => props.theme.colors.text};
  font-size: ${(props) => props.theme.fontSize.normalText};
  font-weight: bold;
  min-width: 100px;
  max-width: 200px;
  height: 100%;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.25s ease-in-out;
  max-height: 50px;
  white-space: nowrap;

  &:hover {
    filter: brightness(110%);
  }
  @media (max-width: 768px) {
    font-size: ${(props) => props.theme.fontSize.normalTextPhone};
    padding: 7px;
  }
`

const Button = ({ children, onClick }) => {
  return <Btn onClick={onClick}>{children}</Btn>
}

export default Button
