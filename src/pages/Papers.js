import React, { useState } from "react";
import styled from "styled-components";
import Sidebar from "../components/Sidebar";
import { MainComponent } from "../components/styles/Main.styled";
import BreadCrum from "../components/BreadCrum";
import RightSidbar from "../components/RightSidbar";
import FileComponent from "../components/FileComponent";
import { useParams } from "react-router-dom";
import ResponsiveMenu from "../components/ResponsiveMenu";

const Papers = () => {
  const [showMenu, setShowMenu] = useState(false);

  console.log(showMenu);
  const CatlogStyles = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  `;

  const { id } = useParams();
  return (
    <CatlogStyles>
      <Sidebar showMenu={showMenu} setShowMenu={setShowMenu} />
      <MainComponent>
        <div style={{ width: "100%" }}>
          <h2>{id}</h2>
        </div>
        <BreadCrum />
        <FileComponent />
      </MainComponent>
      <RightSidbar />
      <ResponsiveMenu setShowMenu={setShowMenu} />
    </CatlogStyles>
  );
};

export default Papers;
