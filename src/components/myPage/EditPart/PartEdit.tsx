import styled from "styled-components";
import arrowPng from "../../images/Polygon 7.svg";

export function PartEdit(props: any) {
  return (
    <div style={{ display: "flex" }}>
      <PartTitle>파트 변경</PartTitle>
      <div style={{ display: "flex" }}>
        <PartSelect {...props}>
          <PartOptions value="기획/디자인">기획/디자인</PartOptions>
          <PartOptions value="프론트엔드">프론트엔드</PartOptions>
          <PartOptions value="백엔드">백엔드</PartOptions>
        </PartSelect>
        <ArrowImg src={arrowPng} alt="arrowPng" />
      </div>
    </div>
  );
}

const PartTitle = styled.div`
  font-weight: 500;
  font-size: 18px;
  line-height: 21.78px;
  display: flex;
  margin-top: 15px;
`;

const PartSelect = styled.select`
  width: 387px;
  height: 52px;
  background-color: #33333399;
  border: none;
  border-radius: 8px;
  margin-left: 50px;
  color: #d7d7d7;
  padding: 15px 16px;
  font-weight: 500;
  font-size: 18px;
  line-height: 22.46px;
  letter-spacing: -0.32px;
  margin-bottom: 24px;
  -webkit-appearance: none; /* for chrome */
  -moz-appearance: none; /*for firefox*/
  appearance: none;
`;

const PartOptions = styled.option`
  font-weight: 500;
  font-size: 18px;
  line-height: 21.78px;
  letter-spacing: -0.32px;
  color: #d7d7d7;
  background-color: #222222;
`;

const ArrowImg = styled.img`
  position: absolute;
  margin-left: 401px;
  margin-top: 20px;
  pointer-events: none;
  width: 20px;
  height: 12px;
`;
