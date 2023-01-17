import styled from "styled-components";
import { Row, Column } from "../elements/Wrapper";
import { Profile } from "../icons/Profile";
import { Replies } from "./Replies";
import { LikeButton } from "./LikeButton";
import React, { useState } from "react";
import { Input } from "./InputFrom";

// interface 관리
/** 댓글 좋아요 기능
 * Like 테이블 안에, Comment에 좋아요를 누른 user_id가 추가된다.
 * 배열로 받아와 해당 배열의 원소 갯수를 세면 그게 좋아요 개수
 */

export interface IProfile {
  profileId: number;
  name: string;
  profilePhoto: string;
}
export interface IComment {
  id?: number;
  body?: string;
  profile?: any; //IPost
  post_id?: number;
  comment_id?: number;
  commentCount?: number;
  date?: string;
  isDeleted?: boolean;
  reply?: any; //IComment[]
}

export function Comments(props: IComment) {
  const { id, profile, body, post_id, comment_id, commentCount, date, isDeleted, reply } = props;
  const [isShowReplyInput, setShowReplyInput] = useState(false);

  const onClickReplyButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShowReplyInput(!isShowReplyInput);
  };

  console.log(reply[0][0].profile);

  return (
    <>
      <Column>
        <Row gap="16px">
          <Profile />
          <Column gap="16px">
            <UserId>{profile[0].name || `AhhyunKim`}</UserId>
            <Date>{date || `2022.11.30`}</Date>
            {body ||
              `헤엑 ~!! 고거 참 어려운 질문이군용! 다른 분들 의견 있나요? 헤엑 ~!! 고거 참 어려운 질문이군용! 다른 분들 의견있나요? 헤엑 ~!! 고거 참 어려운 질문이군용! 다른 분들 의견 있나요?`}
            <Row gap="24px">
              <LikeButton />
              <ReplyButton className="replyOption" onClick={onClickReplyButton}>
                댓글 달기
              </ReplyButton>
            </Row>
            {props.reply
              ? props.reply.map((key: number) => {
                  return <Replies key={id} username={reply[0][0].profile.name} body={reply[0][0].body} />;
                })
              : null}
            {isShowReplyInput && <Input username={profile[0].name}></Input>}
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
