import styled from "styled-components";

const Footer = ({ style }: any) => {
  return <Wrapper style={style}>© 2022 Mutsa. All rights reserved.</Wrapper>;
};

export default Footer;

const Wrapper = styled.div`
  width: 100%;
  height: "50px";
  font-size: "15px";
  position: absolute;
  bottom: 1;
  font-weight: "300";
  text-align: center;
`;
