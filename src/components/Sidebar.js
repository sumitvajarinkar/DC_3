import React from "react";
import { SidebarComponent, Icon, CloseIcon } from "./styles/Sidebar.styled";
import { MdOutlineDashboardCustomize, MdLogout } from "react-icons/md";
import { AiFillHome, AiFillFolderAdd } from "react-icons/ai";
import { BsFillInfoSquareFill } from "react-icons/bs";
import { CgCloseR } from "react-icons/cg";
import { Link } from "react-router-dom";
const Sidebar = ({ showMenu, setShowMenu }) => {
  return (
    <SidebarComponent showMenu={showMenu}>
      <div>
        <CloseIcon onClick={() => setShowMenu(false)}>
          <CgCloseR />
        </CloseIcon>
        <h1>Q-Papers</h1>
        <Link to="/catlog">
          <Icon active={true}>
            <MdOutlineDashboardCustomize />
            <p>Dashboard</p>
          </Icon>
        </Link>
        <Link to="/">
          <Icon>
            <AiFillHome />
            <p>Home</p>
          </Icon>
        </Link>
        <Icon>
          <BsFillInfoSquareFill />
          <p>About</p>
        </Icon>
        <Icon>
          <AiFillFolderAdd />
          <p>Contribute</p>
        </Icon>
      </div>
      <div>
        <Icon>
          <MdLogout />
          <p>Logout</p>
        </Icon>
      </div>
    </SidebarComponent>
  );
};

export default Sidebar;
