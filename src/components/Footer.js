/* eslint-disable jsx-a11y/anchor-is-valid */
import SocialIcons from "./SocialIcons";
import { Container } from "./styles/Container.styled";
import { Flex } from "./styles/Flex.styled";
import { StyledFooter } from "./styles/Footer.styled";

export default function Footer() {
  return (
    <StyledFooter>
      <Container>
        <img src="./images/logofooter.svg" alt="" />
        <Flex>
          <ul>
            <li>
              A website solely used for education purposes. Anyone can use it
              for educational purposes only.
            </li>
            <li>
              +91-9175732873,
              <br /> +91-7823958515
            </li>
            <li>
              1909040@ritindia.edu,
              <br />
              1910033@ritindia.edu
            </li>
          </ul>

          <ul>
            <li>About Us</li>
            <li>What We Do</li>
          </ul>

          <ul>
            <li>FAQ</li>
            <li>Contact Us</li>
          </ul>
          <SocialIcons />
        </Flex>
        <p>
          Made by{" "}
          <a href="https://www.linkedin.com/in/jaydeep-shelake-a348771b2/" target="to_blank">
            Jaydeep
          </a>{" "}
          and <a href="https://www.linkedin.com/in/sumitvajarinkar/" target="to_blank">Sumit</a>
        </p>
        <p>&copy; 2022 Q-Papers. All rights reserved</p>
      </Container>
    </StyledFooter>
  );
}
