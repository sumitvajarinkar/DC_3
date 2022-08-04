import React from "react";
import { StyledCard } from "./styles/Card.styled";
import { Button } from "./styles/Button.styled";
import { Link } from "react-router-dom";

export default function Card({ item: { id, title, body, image, url } }) {
  return (
    <StyledCard layout={id % 2 === 0 && "row-reverse"}>
      <div>
        <Link to={`/catlog/${url}`}>
          <Button bg="#017bff" color="#fff">
            {title}
          </Button>
        </Link>
        {/* <p>{body}</p> */}
      </div>
      <div>
        <img src={`./images/${image}`} alt="" />
      </div>
    </StyledCard>
  );
}
