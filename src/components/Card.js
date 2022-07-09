import React from "react";
import { StyledCard } from "./styles/Card.styled";
import {Button} from "./styles/Button.styled"

export default function Card({ item: { id, title, body, image } }) {
  return (
    <StyledCard layout={id%2===0 && 'row-reverse'}>
      <div>
        <Button bg='#ff0099' color='#fff'>{title}</Button>
        {/* <p>{body}</p> */}
      </div>
      <div>
        <img src={`./images/${image}`} alt="" />
      </div>
    </StyledCard>
  );
}
