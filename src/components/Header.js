import React from "react";
import { Container } from "./styles/Container.styled";
import { Logo, Nav,Image, StyledHeader } from "./styles/Header.styled";
import { Button } from "./styles/Button.styled";
import { Flex } from "./styles/Flex.styled";

export default function Header() {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src="./images/logoheader.svg" alt="" />
          <Button>Contribute +</Button>
        </Nav>
        <Flex>
          <div>
            <h1>Hello folks, welcome in <br/> Q-Papers ! </h1>
            <p>
            In this website you'll get all previous year question papers of our college according to branches, years, semesters.
            </p>
            <Button>
            Course categories
            </Button>
          </div>
          <Image src='./images/illustration-mockups.svg' alt=''/>
        </Flex>
      </Container>
    </StyledHeader>
  );
}
