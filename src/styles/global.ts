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
  background-color: ${(props) => props.theme["white-200"]};
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
    padding-left: 16rem;

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
  background-color: ${(props) => props.theme["white-200"]};

  :nth-child(1){
    font-size: 5rem;
    font-weight: bold;
  }
  :nth-child(2){
    font-size: 1.8rem;
    padding-bottom: 0.8rem;
  }
}

section{
  grid-area: section;
  background-color: ${(props) => props.theme["green-100"]};

  display: grid;
  grid-template-columns: auto auto 1.5fr;

  overflow: hidden;

  padding-left: 16rem;

  font-family: 'Inconsolata',  sans-serif;
  font-size: 4.1rem;
  font-weight: bold;
  ul{
    display: flex;
    flex-direction: column;
    span {
      opacity: 30%;
    }
    span:nth-child(3){
      opacity: 100%;
    }
    span:not(:last-child){
      margin-bottom: 2rem;
    }
  }
  p{
    padding-left: 4rem;
    align-self: center; 
    span{
      opacity: 30%;
    }
  }
  div{
    align-self: center; 
    padding-left: 10rem;
    img{
      position: absolute;
      bottom: -7rem;
    }
  }
  >*{
    position: relative;
    top: -1.5rem;
  }
}
footer{
  grid-area: footer;
  padding: 0rem 16rem;
  background-color: ${(props) => props.theme["black-100"]};
  align-content: center;
  ul{

    display: flex;
    justify-content: space-between;
  }
}


`;
