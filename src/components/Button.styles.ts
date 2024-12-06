import styled from "styled-components";

export const ButtonContainer = styled.button`
  width: 11rem;
  height: 3.5rem;
  background-color: ${(props) => props.theme["green-100"]};
  border: 1px solid black;
  border-radius: 10px;
  box-shadow: 3px 5px 5px black;
  font-weight: bold;

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme["green-200"]};
  }
`;
