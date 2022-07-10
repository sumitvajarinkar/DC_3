import React from "react";
import { ThemeProvider } from "styled-components";
// import GlobalStyles from "./components/styles/Global";
import {BrowserRouter as Router,Route, Routes } from 'react-router-dom'
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import "./global.css"

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
    <Router>
      <Navbar/>
    <ThemeProvider theme={theme}>
      <>
      {/* <GlobalStyles/> */}
      <Routes>
          <Route path='/' element={<Home/>}/>
      </Routes>
      </>
    </ThemeProvider>
    </Router>
  );
}

export default App;
