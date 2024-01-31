import React from "react";
import * as S from "../../../styles/mainPage/curriculumStyle";

const Part4 = () => {
  return (
    <S.Box>
      <S.PartName>백엔드 타임라인</S.PartName>
      <S.BarContainer>
        <S.Dot1>
          <S.Date>1차 세션</S.Date>
          <S.Text>GitHub</S.Text>
        </S.Dot1>
        <S.Dot2>
          <S.Date>2차 세션</S.Date>
          <S.Text>기획자란?</S.Text>
        </S.Dot2>
        <S.Dot3>
          <S.Date>3차 세션</S.Date>
          <S.Text>프로덕트 기획법</S.Text>
        </S.Dot3>
        <S.Dot4>
          <S.Date>4차 세션</S.Date>
          <S.Text>PM이란?</S.Text>
        </S.Dot4>
        <S.Dot5>
          <S.Date>5차 세션</S.Date>
          <S.Text>프로젝트 진행법</S.Text>
        </S.Dot5>
      </S.BarContainer>
    </S.Box>
  );
};

export default Part4;
