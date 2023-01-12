import styled from "styled-components";
import { Row, Column } from "../elements/Wrapper";
import { BLACK_2 } from "../../styles/theme";
import { Profile } from "../icons/Profile";
import { LikeButton } from "./LikeButton";
// interface 관리

export interface IReply {
  key?: number;
  id?: number;
  username?: string;
  body?: string;
  created?: number;
  likedId?: string[];
}

export function Replies({ key, id, body, username, created, likedId }: IReply) {
  // var likes = likedId.length();

  return (
    <>
      <Wrapper>
        <Profile />
        <TextContainer>
          <>
            <UserId>{username || `AhhyunKim`}</UserId>
            <Date>{created || `2022.11.30`}</Date>
          </>
          헤엑 ~!! 고거 참 어려운 질문이군용! 다른 분들 의견 있나요? 헤엑 ~!! 고거 참 어려운 질문이군용! 다른 분들 의견
          있나요? 헤엑 ~!! 고거 참 어려운 질문이군용! 다른 분들 의견 있나요?
          <br />
          <LikeButton />
        </TextContainer>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  width: 100%;
  background-color: ${BLACK_2};
  border-radius: 12px;
  display: flex;
  align-items: flex-start;
  padding: 20px;
  gap: 10px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-weight: 400;
  font-size: 16px;
  line-height: 23px;
  /* or 144% */

  letter-spacing: -0.32px;

  color: #ffffffb8;
`;

const UserId = styled.div`
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: -0.32px;
`;

const Date = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: -0.32px;
`;
