//공통 컴포넌트 작성

import styled from "styled-components";
import { IWrapper } from "../../interfaces";

export const Section = styled.section`
  width: 100%;
  margin-top: 100px;
`;

// export const Row = styled.div.attrs<IWrapper>((props) => ({
//   marginBottom: props.marginBottom || "0",
//   marginTop: props.marginTop || "0",
//   justifyContent: props.justifyContent || "",
//   alignItems: props.alignItems || "",
//   gap: props.gap || "0",
// }))<IWrapper>`
//   display: flex;
//   width: 100%;
//   justify-content: ${(props) => props.justifyContent};
//   /* justify-content: space-between; */
//   align-items: ${(props) => props.alignItems};
//   margin-bottom: ${(props) => props.marginBottom};
//   margin-top: ${(props) => props.marginTop};
//   gap: ${(props) => props.gap};
// `;

export const Row = styled.div<IWrapper>`
  display: flex;
  height: 100%;
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  margin-bottom: ${(props) => props.marginBottom};
  margin-top: ${(props) => props.marginTop};
  gap: ${(props) => props.gap};
`;

export const Column = styled.div.attrs<IWrapper>((props) => ({
  marginBottom: props.marginBottom || "0",
  marginTop: props.marginTop || "0",
  justifyContent: props.justifyContent || "",
  alignItems: props.alignItems || "",
  gap: props.gap || "0",
}))<IWrapper>`
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  margin-bottom: ${(props) => props.marginBottom};
  margin-top: ${(props) => props.marginTop};
  gap: ${(props) => props.gap};
`;
