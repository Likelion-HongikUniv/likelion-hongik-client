import React from "react";
import * as S from "../../../styles/mainPage/curriculumStyle";

const Part2 = () => {
  return (
    <S.Box>
      <S.PartName>디자인 타임라인</S.PartName>
      <S.BarContainer>
        <S.Dot1>
          <S.Date>1차 세션</S.Date>
          <S.Text>
            웹 디자인
            <br />& 개발 용어 소개
          </S.Text>
        </S.Dot1>
        <S.Dot2>
          <S.Date>2차 세션</S.Date>
          <S.Text>
            개발자가 좋아하는
            <br />
            디자인하는 법
          </S.Text>
        </S.Dot2>
        <S.Dot3>
          <S.Date>3차 세션</S.Date>
          <S.Text>케이스 스터디</S.Text>
        </S.Dot3>
        <S.Dot4>
          <S.Date>4차 세션</S.Date>
          <S.Text>웹/앱 리디자인</S.Text>
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

export default Part2;
