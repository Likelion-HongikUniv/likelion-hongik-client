import React from "react";
import * as S from "../../../styles/mainPage/curriculumStyle";

const Part2 = () => {
  return (
    <S.Box>
      <S.PartName>디자인 타임라인</S.PartName>
      <S.BarContainer>
        <S.Dot1>
          <S.Date>1차 세션</S.Date>
          <S.Text>GitHub</S.Text>
        </S.Dot1>
        <S.Dot2>
          <S.Date>2차 세션</S.Date>
          <S.Text>html/css</S.Text>
        </S.Dot2>
        <S.Dot3>
          <S.Date>3차 세션</S.Date>
          <S.Text>Javascript 기초</S.Text>
        </S.Dot3>
        <S.Dot4>
          <S.Date>4차 세션</S.Date>
          <S.Text>Javascript 심화</S.Text>
        </S.Dot4>
        <S.Dot5>
          <S.Date>5차 세션</S.Date>
          <S.Text>React 기초</S.Text>
        </S.Dot5>
        <S.Dot6>
          <S.Date>6차 세션</S.Date>
          <S.Text>styled-components & React Hooks</S.Text>
        </S.Dot6>
      </S.BarContainer>
    </S.Box>
  );
};

export default Part2;
