import styled from "styled-components";

export type ButtonVariant = "primary" | "secondary";
interface ButtonContainerProps {
  variant: ButtonVariant;
  w: number;
  h: number;
  fontSize: number;
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: ${(props) => props.w}rem;
  height: ${(props) => props.h}rem;
  border: 3px solid black;
  border-radius: 10px;
  box-shadow: 3px 5px 5px black;
  font-weight: bold;
  font-size: ${(props) => props.fontSize}rem;
  background-color: ${(props) =>
    props.variant == "primary"
      ? props.theme["green-100"]
      : props.theme["white-100"]};

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme["green-200"]};
  }
`;
