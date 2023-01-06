import styled from "styled-components";
import { Row, Column } from "../elements/Wrapper";
import { BLACK_2 } from "../../styles/theme";
import { HeartButton } from "./HeartButton";

export function Board() {
  return (
    <Column gap="24px">
      <Title>게시글 제목</Title>
      <Row gap="1rem" alignItems="center">
        AhhyunKim
        <Date>2022.11.30</Date>
      </Row>
      <Hairline />
      <Column lineHeight="1.25rem">
        안녕하세요! 멋사 분들이 듣는 개발 강의가 있나용? 추천 부탁드립니다! 백준코딩만 하다가 대가리 깨질것같아서욧!!
        개발짱짱맨 김아현이 되고싶습니닷 ㅇㅅㅇ 언능알려조잉~~ <br />
        참고로 건빵이는 무지 귀엽구요 빼로는 카와이해요
      </Column>
      <HeartButton />
      <Row gap="1rem" justifyContent="center" alignItems="center">
        <InputContainer />
        <InputButton>작성</InputButton>
      </Row>
      <Hairline />
    </Column>
  );
}

const Title = styled.h1``;

const Date = styled.p`
  color: #d7d7d7;
  font-weight: 400;
`;

const Hairline = styled.div`
  border: 1px solid rgb(255, 255, 255, 0.3);
`;

const InputContainer = styled.div`
  width: 100%;
  height: 52px;
  border-radius: 8px;
  background-color: ${BLACK_2};
  margin: 20px 0 20px 0;
`;

const InputButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  width: 108px;
  height: 52px;

  background: #e9e9e9;
  border-radius: 8px;

  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.32px;
`;
