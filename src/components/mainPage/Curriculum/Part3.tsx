import React from "react";
import * as S from "../../../styles/mainPage/curriculumStyle";

const Part3 = () => {
  return (
    <S.Box>
      <S.PartName>프론트엔드 타임라인</S.PartName>
      <S.BarContainer>
        <S.Dot1>
          <S.Date>1차 세션</S.Date>
          <S.Text>html/css</S.Text>
        </S.Dot1>
        <S.Dot2>
          <S.Date>2차 세션</S.Date>
          <S.Text>JavaScript</S.Text>
        </S.Dot2>
        <S.Dot3>
          <S.Date>3차 세션</S.Date>
          <S.Text>React 기초</S.Text>
        </S.Dot3>
        <S.Dot4>
          <S.Date>4차 세션</S.Date>
          <S.Text>
            React Hooks
            <br />
            styled-components
          </S.Text>
        </S.Dot4>
        <S.Dot5>
          <S.Date>5차 세션</S.Date>
          <S.Text>axios / async</S.Text>
        </S.Dot5>
      </S.BarContainer>
    </S.Box>
  );
};

export default Part3;
