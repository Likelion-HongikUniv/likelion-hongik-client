import styled from "styled-components";
import { Row, Column } from "../elements/Wrapper";
import { Profile } from "../icons/Profile";
import { BLACK_2 } from "../../styles/theme";
import { Replies } from "./Replies";
import { LikeButton } from "./LikeButton";
import { useEffect, useState } from "react";

// interface 관리
/** 댓글 좋아요 기능
 * Like 테이블 안에, Comment에 좋아요를 누른 user_id가 추가된다.
 * 배열로 받아와 해당 배열의 원소 갯수를 세면 그게 좋아요 개수
 */
export interface IComment {
  key?: number;
  id?: number;
  username?: string;
  body?: string;
  created?: number;
  replyId?: [];
}

export interface CommentLike extends IComment {
  key?: number;
  id?: number;
}

export function Comments(props: IComment) {
  const { key, id, username, body, created, replyId } = props;
  const [inputText, setInputText] = useState("");
  const onClickReplyButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(e.currentTarget);
  };
  console.log(props);
  return (
    <>
      <Column>
        <Row gap="16px">
          <Profile />
          <Column gap="16px">
            <UserId>{username || `AhhyunKim`}</UserId>
            <Date>{created || `2022.11.30`}</Date>
            {body ||
              `헤엑 ~!! 고거 참 어려운 질문이군용! 다른 분들 의견 있나요? 헤엑 ~!! 고거 참 어려운 질문이군용! 다른 분들 의견있나요? 헤엑 ~!! 고거 참 어려운 질문이군용! 다른 분들 의견 있나요?`}
            <Row gap="24px">
              <LikeButton />
              <ReplyButton onClick={onClickReplyButton}>댓글 달기</ReplyButton>
            </Row>
            <Replies />
            <Row alignItems="center" gap="16px">
              <InputContainer type="text" placeholder={"@" + username + " 대댓글을 입력하세요."} />
              <InputButton>작성</InputButton>
            </Row>
          </Column>
        </Row>
        <Hairline />
      </Column>
    </>
  );
}

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

const ReplyButton = styled.button`
  height: 10px;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: white;
`;

const Hairline = styled.div`
  margin-top: 32px;
  margin-bottom: 32px;
  border: 1px solid rgba(255, 255, 255, 0.3);
`;
const InputContainer = styled.input`
  width: 100%;
  height: 52px;
  border: 0;
  border-radius: 8px;
  background-color: ${BLACK_2};
  padding: 16px;
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
