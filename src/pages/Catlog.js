import React from "react";
import styled from "styled-components";
import Main from "../components/Main";
import RightSidbar from "../components/RightSidbar";
import Sidebar from "../components/Sidebar";
const Catlog = () => {
  const CatlogStyles = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  `;
  return (
    <CatlogStyles>
      <Sidebar />
      <Main />
      <RightSidbar />
    </CatlogStyles>
  );
};

export default Catlog;
