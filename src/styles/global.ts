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
 
  >*{

    font-family: 'Inconsolata',  sans-serif;
    font-weight: 400;
    font-size: 1.5rem;
  }

  p{
    font-size: 2rem;
    font-weight: bold;
    text-align: end;
    color: ${(props) => props.theme["green-400"]};
    
    span{
     color: ${(props) => props.theme["black-200"]};
    
    }
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
  
  display:flex;
  gap: 10rem;
  align-items: end;
  padding: 0rem 0rem 8rem 16rem;

  :nth-child(1){
    font-size: 5rem;
    font-weight: bold;
  }
  :nth-child(2){
    font-size: 1.8fr;
    padding-bottom: 0.8rem;
  }
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
