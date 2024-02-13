import React from "react";
import * as S from "../../../styles/mainPage/curriculumStyle";

const Part3 = () => {
  return (
    <S.Box>
      <S.PartName>백엔드 타임라인</S.PartName>
      <S.BarContainer>
        <S.Dot1>
          <S.Date>1차 세션</S.Date>
          <S.Text>
            Python
            <br />
            Djando 프로젝트 공유
          </S.Text>
        </S.Dot1>
        <S.Dot2>
          <S.Date>2차 세션</S.Date>
          <S.Text>Django 기초</S.Text>
        </S.Dot2>
        <S.Dot3>
          <S.Date>3차 세션</S.Date>
          <S.Text>Django ORM</S.Text>
        </S.Dot3>
        <S.Dot4>
          <S.Date>4차 세션</S.Date>
          <S.Text>Django REST framework</S.Text>
        </S.Dot4>
        <S.Dot5>
          <S.Date>5차 세션</S.Date>
          <S.Text>배포</S.Text>
        </S.Dot5>
        {/* <S.Dot6>
          <S.Date>6차 세션</S.Date>
          <S.Text>Django rest API / MySQL 연동</S.Text>
        </S.Dot6> */}
      </S.BarContainer>
    </S.Box>
  );
};

export default Part3;
