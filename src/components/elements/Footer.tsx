import styled, { CSSProperties } from "styled-components";

const Footer = ({ style }: { style?: CSSProperties }) => {
  return <Wrapper style={style}>© 2022 Mutsa. All rights reserved.</Wrapper>;
};

export default Footer;

const Wrapper = styled.div`
  width: 100%;
  height: 50px;
  font-size: 15px;
  position: static !important;
  bottom: 0;
  font-weight: 300;
  text-align: center;
`;
