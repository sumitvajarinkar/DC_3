import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { StyledSocialIcons } from "./styles/SocialIcons.styled";

export default function SocialIcons() {
  return (
    <StyledSocialIcons>
      <li>
        <a href="https://github.com/sumitvajarinkar/QPWebsite" target="to_blank">
          <FaGithub />
        </a>
      </li>
      <li>
        <a href="https://linkedin.com" target="to_blank">
          <FaLinkedin />
        </a>
      </li>
      <li>
        <a href="https://instagram.com" target="to_blank">
          <FaInstagram />
        </a>
      </li>
    </StyledSocialIcons>
  );
}
