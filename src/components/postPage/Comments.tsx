import React, { useState } from "react";
import styled from "styled-components";
import moment from "moment";
import { IComment, IReply } from "../../interfaces/comments";
import { Input } from "./InputForm";
import { Row, Column } from "../elements/Wrapper";
import { Profile } from "../icons/Profile";
import { Replies } from "./Replies";
import { LikeButton } from "./LikeButton";
import { WHITE_1, WHITE_2 } from "../../styles/theme";
import useMediaQuery from "../../hooks/useMediaQuery";
import { MoreButton } from "../icons/MoreButton";
import { IAuthor } from "../../interfaces/post";

export function Comments(props: IComment) {
  const isPC = useMediaQuery("(min-width: 1024px)");
  const [isShowReplyInput, setShowReplyInput] = useState(false);
  const onClickReplyButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShowReplyInput(!isShowReplyInput);
  };
  const curDate = props.createdTime;
  const date = moment(curDate, "YYYYMMDDHHmmss").format("YYYY-MM-DD HH:mm");
  return (
    <>
      {isPC && props.replies && (
        <Column gap="32px">
          <Row gap="16px" alignItems="flex-start">
            {props.author?.profileImage && <Profile profile={props.author.profileImage} />}
            <Column gap="20px">
              <Column gap="2px">
                <UserId fontSize={16}>{props.author?.nickname}</UserId>
                <Date fontSize={12}>{date}</Date>
              </Column>
              {props.isDeleted ? <p style={{ color: "#333333" }}>삭제된 댓글입니다.</p> : <p>{props?.body}</p>}
              {props.isDeleted ? null : (
                <Row gap="12px">
                  <LikeButton
                    cid={props.commentId}
                    isLiked={props.isLiked}
                    isAuthor={props.author?.isAuthor}
                    isComment={true}
                    likes={props.likeCount}
                  />
                  <ReplyButton className="replyOption" onClick={onClickReplyButton}>
                    댓글 달기
                  </ReplyButton>
                </Row>
              )}
            </Column>
            {props.author?.isAuthor && props.isDeleted === false && (
              <MoreButton id={props.commentId} isBoard={false} isComment={true} />
            )}
          </Row>
          {props.replies
            ? props.replies.map((reply: IReply, idx: number) => {
                return <Replies key={idx} cid={props.commentId} reply={reply} />;
              })
            : null}
          {isShowReplyInput && <Input cid={props.commentId} username={props.author?.nickname}></Input>}
          <Hairline />
        </Column>
      )}
      {isPC === false && props.replies && (
        <Column gap="20px">
          <Row gap="12px">
            {props.author?.profileImage && <Profile profile={props.author.profileImage} />}
            <Column>
              <UserId fontSize={14}>{props.author?.nickname}</UserId>
              <Date fontSize={12}>{date}</Date>
            </Column>
            {props.author?.isAuthor && props.isDeleted === false && (
              <MoreButton id={props.commentId} isBoard={false} isComment={true} />
            )}
          </Row>
          <Column gap="20px">
            {props.isDeleted ? <p style={{ color: "#333333" }}>삭제된 댓글입니다.</p> : <p>{props?.body}</p>}
            {props.isDeleted ? null : (
              <Row gap="12px">
                <LikeButton
                  cid={props.commentId}
                  isAuthor={props.author?.isAuthor}
                  isComment={true}
                  isLiked={props.isLiked}
                  likes={props.likeCount}
                />
                <ReplyButton className="replyOption" onClick={onClickReplyButton}>
                  댓글 달기
                </ReplyButton>
              </Row>
            )}
          </Column>
          {props.replies
            ? props.replies.map((reply: IReply, idx: number) => {
                return <Replies key={idx} cid={props.commentId} reply={reply} />;
              })
            : null}
          {isShowReplyInput && <Input cid={props.commentId} username={props.author?.nickname}></Input>}
          <Hairline />
        </Column>
      )}
    </>
  );
}

const UserId = styled.div<{ fontSize: number }>`
  font-weight: 600;
  font-size: ${(props) => (props.fontSize ? props.fontSize + "px" : "14px")};
  line-height: 19px;
  letter-spacing: -0.32px;
`;

const Date = styled.div<{ fontSize: number }>`
  color: ${WHITE_2};
  font-weight: 400;
  font-size: ${(props) => (props.fontSize ? props.fontSize + "px" : "14px")};
  line-height: 17px;
  letter-spacing: -0.32px;
`;

const ReplyButton = styled.button`
  height: 10px;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: ${WHITE_1};
`;

const Hairline = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.3);
`;
