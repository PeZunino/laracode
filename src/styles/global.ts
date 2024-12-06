import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing: border-box;
}

body, input, textarea, button {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 1rem;
}


#root{
  min-height: 100vh;
  display: grid;
  grid-template-rows: 8rem 30.5rem 29rem 20rem;
  grid-template-areas: 
  "navbar"
  "main"
  "section"
  "footer"
}
nav{
  grid-area: navbar;
  align-items: center;
  
  display:grid;
  grid-template-columns: 1fr 3fr 1fr;
 
  font-family: 'Inconsolata',  sans-serif;
  font-weight: 400;
  font-size: 1.5rem;

  span{
    font-size: 2rem;
    font-weight: bold;
    text-align: end;
  }
  ul{
    display: flex;
    justify-content: center;
    gap: 5rem;
    > :nth-child(1){
      color: ${(props) => props.theme["green-300"]};
    }
    > *{
      text-decoration: none;
      color: ${(props) => props.theme["black-200"]};
    }
  }
  
}
main{
  grid-area: main;
}

section{
  grid-area: section;
  background-color: ${(props) => props.theme["green-100"]};
}
footer{
  grid-area: footer;
  background-color: ${(props) => props.theme["black-100"]};
}


`;
