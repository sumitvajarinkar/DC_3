import React from "react";
import "./style.css";
import { Provider } from "./FilterContext";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/styles/GlobalStyles";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Course from "./pages/Course";
import Catlog from "./pages/Catlog";
import Papers from "./pages/Papers";

const theme = {
  colors: {
    header: "#ebfbff",
    body: "#fff",
    footer: "#003333",
  },
  mobile: "768px",
};

function App() {
  return (
    <Provider>
      <Router>
        <ThemeProvider theme={theme}>
          <>
            <GlobalStyles />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/catlog" element={<Catlog />} />
              <Route path="/catlog/:id" element={<Course />} />
              <Route path="/course/:id" element={<Papers />} />
            </Routes>
          </>
        </ThemeProvider>
      </Router>
    </Provider>
  );
}

export default App;
