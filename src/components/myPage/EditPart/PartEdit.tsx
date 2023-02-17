import styled from "styled-components";
import arrowPng from "../../images/Polygon 7.svg";

export function PartEdit(props: any) {
  return (
    <Div>
      <PartTitle>파트 변경</PartTitle>
      <PartSelect {...props}>
        <PartOptions value="기획/디자인">기획/디자인</PartOptions>
        <PartOptions value="프론트엔드">프론트엔드</PartOptions>
        <PartOptions value="백엔드">백엔드</PartOptions>
      </PartSelect>

      {/* <ArrowImg src={arrowPng} alt="arrowPng" /> */}
    </Div>
  );
}

const Div = styled.div`
  display: flex;

  @media (max-width: 768px) {
    //모바일
    display: inline-block;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    display: flex;
  }
`;

const PartTitle = styled.div`
  font-weight: 500;
  font-size: 18px;
  line-height: 21.78px;
  display: flex;
  margin-top: 15px;

  @media (max-width: 767px) {
    //모바일
    font-size: 16px;
    line-height: 19.2px;
    margin-top: 0;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: 20px;
  }
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
  /* -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none; */

  @media (max-width: 767px) {
    //모바일
    width: 88vw;
    height: 48px;
    margin-left: 0;
    margin-top: 12px;
    padding: 12px 14px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    width: 56vw;
    margin-left: 50px;
  }
`;

const PartOptions = styled.option`
  font-weight: 500;
  font-size: 18px;
  line-height: 21.78px;
  letter-spacing: -0.32px;
  color: #d7d7d7;
  background-color: #222222;

  @media (max-width: 768px) {
    //모바일
    font-size: 14px;
    line-height: 16px;
  }

  @media (min-width: 768px) and (max-width: 992px) {
    // 테블릿 세로
  }

  @media (min-width: 992px) and (max-width: 1200px) {
    // 테블릿 가로
  }
`;

// const ArrowImg = styled.img`
//   position: absolute;
//   margin-left: 401px;
//   margin-top: 20px;
//   pointer-events: none;
//   width: 20px;
//   height: 12px;

// `;
