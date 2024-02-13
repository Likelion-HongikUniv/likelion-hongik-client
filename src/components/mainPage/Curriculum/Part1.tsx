import React from "react";
import * as S from "../../../styles/mainPage/curriculumStyle";

const Part1 = () => {
  return (
    <S.Box>
      <S.PartName>기획 타임라인</S.PartName>
      <S.BarContainer>
        <S.Dot1>
          <S.Date>1차 세션</S.Date>
          <S.Text>
            기획이란?
            <br />
            회의/협업 방법
          </S.Text>
        </S.Dot1>
        <S.Dot2>
          <S.Date>2차 세션</S.Date>
          <S.Text>
            Ideation
            <br />
            페르소나 선정
          </S.Text>
        </S.Dot2>
        <S.Dot3>
          <S.Date>3차 세션</S.Date>
          <S.Text>기능 명세서</S.Text>
        </S.Dot3>
        <S.Dot4>
          <S.Date>4차 세션</S.Date>
          <S.Text>화면 정의서</S.Text>
        </S.Dot4>
        <S.Dot5>
          <S.Date>5차 세션</S.Date>
          <S.Text>
            기획/디자인
            <br />
            발표 및 매칭
          </S.Text>
        </S.Dot5>
      </S.BarContainer>
    </S.Box>
  );
};

export default Part1;
