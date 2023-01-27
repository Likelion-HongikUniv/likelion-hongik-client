import styled from "styled-components";
import arrowPng from "../../images/Polygon 7.svg";

export function TeamEdit(props: any) {
  return (
    <div style={{ display: "flex" }}>
      <TeamTitle>팀 변경</TeamTitle>
      <div style={{ display: "flex" }}>
        <TeamSelect {...props}>
          <TeamOptions value="건빵이최고">건빵이최고</TeamOptions>
          <TeamOptions value="같공">같공</TeamOptions>
          <TeamOptions value="페스티발람">페스티발람</TeamOptions>
        </TeamSelect>
        <ArrowImg src={arrowPng} alt="arrow" />
      </div>
    </div>
  );
}
const TeamTitle = styled.div`
  font-weight: 500;
  font-size: 18px;
  line-height: 21.78px;
  display: flex;
  align-items: center;
`;

const TeamSelect = styled.select`
  width: 387px;
  height: 52px;
  background-color: #33333399;
  border: none;
  border-radius: 8px;
  margin-left: 66px;
  color: #d7d7d7;
  padding: 15px 16px;
  font-weight: 500;
  font-size: 18px;
  line-height: 21.78px;
  letter-spacing: -0.32px;
  margin-bottom: 24px;
  -webkit-appearance: none; /* for chrome */
  -moz-appearance: none; /*for firefox*/
  appearance: none;
`;

const TeamOptions = styled.option`
  font-weight: 500;
  font-size: 18px;
  line-height: 21.78px;
  letter-spacing: -0.32px;
  color: #d7d7d7;
  background-color: #222222;
`;

const ArrowImg = styled.img`
  position: absolute;
  margin-left: 417px;
  margin-top: 20px;
  pointer-events: none;
  width: 20px;
  height: 12px;
`;
