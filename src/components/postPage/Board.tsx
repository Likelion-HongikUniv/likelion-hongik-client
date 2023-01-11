import styled from "styled-components";
import { Row, Column } from "../elements/Wrapper";

import { HeartButton } from "./HeartButton";
// interface 관리

export interface IPost {
  key?: string;
  id?: number;
  title?: string;
  body?: string;
  category?: string;
  created?: number;
}

/** 포스트 좋아요 기능
 * Like 테이블 안에, Post에 좋아요를 누른 user_id가 추가된다.
 * 배열로 받아와 해당 배열의 원소 갯수를 세면 그게 좋아요 개수
 */

export interface PostLike extends IPost {
  likes: number;
}

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
