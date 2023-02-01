import styled from "styled-components";
import { BLACK_2, WHITE_1 } from "../../styles/theme";
import useInput from "../../hooks/useInput";
import { IReply, IComment } from "../../interfaces/comments";
import { useRecoilState, useRecoilValue } from "recoil";
import { commentsListState } from "../../states/atoms";
import { userInfoState } from "../../states/user";
import moment from "moment";
import axios from "axios";
import { useEffect } from "react";

export function Input({ cid, username }: any) {
  const [commentsList, setCommentsList] = useRecoilState(commentsListState);
  const userInfo = useRecoilValue(userInfoState);
  const accessToken = localStorage.getItem("token");
  const commentInput = useInput("");
  let isAuthor = true && userInfo.username === username;

  const onClickSubmit = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    const parentComment: IComment[] = commentsList.filter((comment) => comment.commentId === cid);
    let parentReplies: any = parentComment[0].replies;
    let curTime = new Date().toString();
    let formatTime = moment(curTime).format("YYYY-MM-DD HH:mm:ss");
    let curTarget = parentComment[0];
    let targetIdx = commentsList.indexOf(curTarget);

    let body = {
      body: commentInput.value,
    };

    axios
      .post(
        `http://13.124.126.164:8080/community/comment/${curTarget.commentId}`,
        JSON.stringify(body),
        // { withCredentials: true },
        {
          headers: {
            "Content-Type": `application/json`,
            JWT: `${accessToken}`,
          },
        },
      )
      .catch((err) => {
        throw err;
      })
      .then((response) => {
        console.log(response);

        const tempObj = {
          replyId: curTarget.commentId + 1,
          author: {
            authorId: userInfo.userId,
            nickname: userInfo.username,
            profileImage: userInfo.profileImageSrc,
            isAuthor: false,
          },
          body: commentInput.value,
          createdTime: formatTime,
          likeCount: 0,
        };
        parentReplies = [...parentReplies, tempObj];

        let newComment = { ...curTarget, replies: parentReplies };
        let newList = [...commentsList.slice(0, targetIdx), newComment, ...commentsList.slice(targetIdx + 1)];

        setCommentsList(() => {
          return newList;
        });
      });
    commentInput.setValue("");
  };

  return (
    <InputForm onSubmit={onClickSubmit}>
      <InputContainer type="commentInput" placeholder={"@" + username + " 대댓글을 입력하세요."} {...commentInput} />
      <InputButton type="submit">작성</InputButton>
    </InputForm>
  );
}

const InputForm = styled.form`
  display: flex;
  gap: 16px;
  flex-direction: row;
`;

const InputContainer = styled.input`
  width: 100%;
  height: 52px;
  border: 0;
  border-radius: 8px;
  background-color: ${BLACK_2};
  padding: 16px;
  color: ${WHITE_1};
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
