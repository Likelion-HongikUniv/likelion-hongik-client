import styled from "styled-components";
import { Row, Column } from "../elements/Wrapper";
import { HeartButton } from "./HeartButton";
import { isLoggedInState } from "../../states";
import { ViewerUi } from "./ViewerUi";

/** 포스트 좋아요 기능
 * Like 테이블 안에, Post에 좋아요를 누른 user_id가 추가된다.
 * 배열로 받아와 해당 배열의 원소 갯수를 세면 그게 좋아요 개수
 */

export interface IPost {
  key?: number;
  id?: number;
  title?: string;
  username?: string;
  body?: string;
  category?: string;
  date?: string;
}

export function Board(props: IPost) {
  const { title, username, body, category, date } = props;
  console.log(props);
  return (
    <Column gap="24px">
      {/* <Title>{title || "게시글 제목"}</Title> */}
      <Title>{title || "게시글 제목"}</Title>
      <Row gap="1rem" alignItems="center">
        {username || "AhhyunKim"}
        <Date>{date || "2022.11.30"}</Date>
        {isLoggedInState ? "로그아웃 상태" : "수정하기"}
      </Row>
      <Hairline />
      <Column lineHeight="1.25rem">
        <ViewerUi
          body={` 안녕하세요! 멋사 분들이 듣는 개발 강의가 있나용? 추천 부탁드립니다! 백준코딩만 하다가 대가리 깨질것같아서욧!!
  개발짱짱맨 김아현이 되고싶습니닷 ㅇㅅㅇ 언능알려조잉~~ </br>
  참고로 건빵이는 무지 귀엽구요 빼로는 카와이해요`}
        ></ViewerUi>
      </Column>
      <HeartButton />
      <Hairline />
    </Column>
  );
}

const Title = styled.h1`
  font-family: "SUIT";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 34px;
  /* or 142% */

  letter-spacing: -0.32px;
`;

const Date = styled.p`
  color: #d7d7d7;
  font-weight: 400;
`;

const Hairline = styled.div`
  border: 1px solid rgb(255, 255, 255, 0.3);
`;
