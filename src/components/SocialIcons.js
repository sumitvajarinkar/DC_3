import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { StyledSocialIcons } from "./styles/SocialIcons.styled";

export default function SocialIcons() {
  return (
    <StyledSocialIcons>
      <li>
        <a href="https://github.com/sumitvajarinkar/QPWebsite">
          <FaGithub />
        </a>
      </li>
      <li>
        <a href="https://linkedin.com">
          <FaLinkedin />
        </a>
      </li>
      <li>
        <a href="https://instagram.com">
          <FaInstagram />
        </a>
      </li>
    </StyledSocialIcons>
  );
}
