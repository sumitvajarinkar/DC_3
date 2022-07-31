import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Exo+2&family=Montserrat:wght@600&family=Open+Sans&family=Poppins:wght@300;400&display=swap');
  * {
    box-sizing: border-box;
  }
  body {
    background: ${({ theme }) => theme.colors.body};
    color: hsl(192, 100%, 9%);
font-family: 'Exo 2', sans-serif;
font-family: 'Montserrat', sans-serif;
font-family: 'Open Sans', sans-serif;
font-family: 'Poppins', sans-serif;
    font-size: 1.15em;
    margin: 0;
  }
  p {
    opacity: 1;
    line-height: 1.5;
  }
  img {
    max-width: 100%;
}
a{
  text-decoration: none;
}
`;

export const Button= styled.button`
background-color: #017bff;
padding: 5px 10px;
border-radius: 3px;
border: none;
outline: none;
color: #fff;
font-size: 17px;
`

export default GlobalStyles;
