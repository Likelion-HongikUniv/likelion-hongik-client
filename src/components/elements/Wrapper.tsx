//공통 컴포넌트 작성

import styled from "styled-components";
import { IWrapper } from "../../interfaces";
import { BLACK_1 } from "../../styles/theme";
import { WHITE_1 } from "../../styles/theme";

export const Section = styled.section`
  width: 100%;
  padding-top: 90px;
  background-color: ${BLACK_1};
  color: ${WHITE_1};
`;

export const Row = styled.div<IWrapper>`
  display: flex;
  width: ${(props) => props.width};
  height: 100%;
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  margin-bottom: ${(props) => props.marginBottom};
  margin-top: ${(props) => props.marginTop};
  gap: ${(props) => props.gap};
  line-height: ${(props) => props.lineHeight};
`;

export const Column = styled.div<IWrapper>`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  margin-bottom: ${(props) => props.marginBottom};
  margin-top: ${(props) => props.marginTop};
  gap: ${(props) => props.gap};
`;
