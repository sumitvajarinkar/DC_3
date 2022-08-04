import React from "react";
import { BreadcrumContainer, LinkContainer } from "./styles/Breadcrum.styled";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
const BreadCrum = () => {
  const location = useLocation();
  const str = location.pathname;
  console.log(str);
  let str1 = str.split("/")[1];
  const str2 = str.split("/")[2];
  console.log(str1, str2);
  if (str1 === "course") {
    str1 = "catlog";
  }
  return (
    <BreadcrumContainer>
      <LinkContainer>
        <p>
          <Link to={`/${str1}`}>/{str1}/</Link>
          <Link to={`/${str1}/${str2}`}>{str2 ? str2 : ""}</Link>
        </p>
      </LinkContainer>
    </BreadcrumContainer>
  );
};

export default BreadCrum;
