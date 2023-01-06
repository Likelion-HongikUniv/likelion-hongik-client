import { Logo } from "../icons/Logo";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { WHITE_1 } from "../../styles/theme";
import { BLACK_1 } from "./../../styles/theme";

export function Footer() {
  return (
    <Wrapper>
      <Logo />
      <div>
        <Circle>
          <FontAwesomeIcon icon={faInstagram} size="3x" />
        </Circle>
        <Circle>
          <FontAwesomeIcon icon={faFacebookF} size="3x" />
        </Circle>
        <Circle>
          <FontAwesomeIcon icon={faYoutube} size="3x" />
        </Circle>
      </div>
      <CopyRight>© 2022 Mutsa. All rights reserved.</CopyRight>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 165px;
  text-align: center;
  background-color: ${BLACK_1};
`;

const Circle = styled.button`
  display: inline-block;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: #33333399;
  color: ${WHITE_1};
  margin: 60px 20px 170px 20px;
`;

export const CopyRight = styled.div`
  font-weight: 300;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  color: ${WHITE_1};
  padding: 16px;
`;
