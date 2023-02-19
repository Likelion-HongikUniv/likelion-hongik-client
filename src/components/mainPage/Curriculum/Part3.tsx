import React from "react";
import * as S from "../../../styles/mainPage/curriculumStyle";

const Part3 = () => {
  return (
    <S.Box>
      <S.PartName>백엔드 타임라인</S.PartName>
      <S.BarContainer>
        <S.Dot1>
          <S.Date>1차 세션</S.Date>
          <S.Text>Github 교육</S.Text>
        </S.Dot1>
        <S.Dot2>
          <S.Date>2차 세션</S.Date>
          <S.Text>HTML/CSS 교육</S.Text>
        </S.Dot2>
        <S.Dot3>
          <S.Date>3차 세션</S.Date>
          <S.Text>Python 교육</S.Text>
        </S.Dot3>
        <S.Dot4>
          <S.Date>4차 세션</S.Date>
          <S.Text>DJango 교육(1)</S.Text>
        </S.Dot4>
        <S.Dot5>
          <S.Date>5차 세션</S.Date>
          <S.Text>DJango 교육(2)</S.Text>
        </S.Dot5>
        <S.Dot6>
          <S.Date>2022.02.21 - 03.02</S.Date>
          <S.Text>세션</S.Text>
        </S.Dot6>
      </S.BarContainer>
    </S.Box>
  );
};

export default Part3;
