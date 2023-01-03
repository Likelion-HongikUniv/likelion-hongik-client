import styled from "styled-components";
import { BLACK_1 } from "../../styles/theme";
import { BLACK_2 } from "../../styles/theme";
import { WHITE_1 } from "../../styles/theme";
import { HeartButton } from "./HeartButton";
import { Replies } from "./Replies";
import { Comments } from "./Comments";

export function Board() {
  return (
    <Wrapper>
      <Title>게시글 제목</Title>
      <UserWrapper>
        <UserId>AhhyunKim</UserId>
        <Date>2022.11.30</Date>
      </UserWrapper>
      <Hairline />
      <TextContainer>
        안녕하세요! 멋사 분들이 듣는 개발 강의가 있나용? 추천 부탁드립니다! 백준코딩만 하다가 대가리 깨질것같아서욧!!
        개발짱짱맨 김아현이 되고싶습니닷 ㅇㅅㅇ 언능알려조잉~~ <br />
        참고로 건빵이는 무지 귀엽구요 빼로는 카와이해요
      </TextContainer>
      <HeartButton />
      <InputContainer>
        <InputButton />
      </InputContainer>
      <Comments />
      <Hairline />
      <Replies />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  background-color: ${BLACK_1};
  color: ${WHITE_1};
  display: flex;
  flex-direction: column;
  justify-content: start;
  /* align-items: center; */
  padding: 0px 22vw;
  z-index: 1;
`;

const Title = styled.h1``;

const UserWrapper = styled.div`
  display: flex;
  justify-content: start;
  gap: 0.6rem;
`;

const UserId = styled.p``;

const Date = styled.p`
  color: #d7d7d7;
  font-weight: 400;
`;

const Hairline = styled.div`
  border: 1px solid rgb(255, 255, 255, 0.3);
`;

const TextContainer = styled.div`
  margin-top: 40px;
  margin-bottom: 60px;
  justify-content: center;
  font-size: 18px;
  line-height: 32px;
`;

const InputContainer = styled.div`
  width: 100%;
  height: 52px;
  border-radius: 8px;
  background-color: ${BLACK_2};
  margin: 20px 0 20px 0;
`;

const InputButton = styled.button``;
