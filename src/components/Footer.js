import SocialIcons from "./SocialIcons";
import { Container } from "./styles/Container.styled";
import { Flex } from "./styles/Flex.styled";
import { StyledFooter } from "./styles/Footer.styled";

export default function Footer() {
  return (
    <StyledFooter>
      <Container>
        <img src="./images/logo.png" alt="" />
        <Flex>
          <ul>
            <li>
              Website soley used for education purpose. Anyone can use it for educational purpose only.
            </li>
            <li>+91-7823958515,<br/> +91-7823958515</li>
            <li>1910033@ritindia.edu, 1910033@ritindia.edu</li>
          </ul>

          <ul>
            <li>About Us</li>
            <li>What We Do</li>
          </ul>

          <ul>
            <li>FAQ</li>
            <li>Contact Us</li>
          </ul>
          <SocialIcons/>
        </Flex>
        <p>&copy; 2022 Q-Papers. All rights reserved</p>
      </Container>
    </StyledFooter>
  );
}
