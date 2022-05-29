import React from "react";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import Card from "./components/Card";
import { Container } from "./components/styles/Container.styled";
import GlobalStyles from "./components/styles/Global";
import Content from './Content';
import Footer from "./components/Footer";

const theme = {
  colors: {
    header: "#ebfbff",
    body: "#fff",
    footer: "#003333",
  },
  mobile:'768px',
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
      <GlobalStyles/>
        <Header />
        <Container>
        {Content.map((item,index)=>(
          <Card key={index} item={item}/>
        ))}
        </Container>
        <Footer/>
      </>
    </ThemeProvider>
  );
}

export default App;
