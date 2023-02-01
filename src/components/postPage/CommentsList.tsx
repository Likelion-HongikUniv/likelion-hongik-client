import styled from "styled-components";
import { Comments } from "./Comments";
import { Column } from "../elements/Wrapper";
import { BLACK_1, BLACK_2, WHITE_1 } from "../../styles/theme";
import { IComment } from "../../interfaces/comments";
import { useRecoilState } from "recoil";
import { userInfoState } from "../../states/user";
import { commentsListState } from "../../states/atoms";
import moment from "moment";
import useInput from "../../hooks/useInput";
import useMediaQuery from "../../hooks/useMediaQuery";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";

export function CommentsList(commentList: IComment[]) {
  const [scrollY, setScrollY] = useState(0);
  const [isScrollActive, setScrollActive] = useState(false);

  const [commentsList, setCommentsList] = useRecoilState(commentsListState);
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);

  const comments = Object.values(commentList).map((comments: IComment) => comments);
  const accessToken = localStorage.getItem("token");
  const commentInput = useInput("");
  const isPC = useMediaQuery("(min-width: 992px)");
  const { id } = useParams<{ id?: string }>();

  const onClickSubmit = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    let curTime = new Date().toString();
    let formatTime = moment(curTime).format("YYYY-MM-DD HH:mm:ss");

    let body = {
      body: commentInput.value,
    };

    axios
      .post(
        `http://13.124.126.164:8080/community/post/${id}`,
        JSON.stringify(body),
        // { withCredentials: true },
        {
          headers: {
            "Content-Type": `application/json`,
            JWT: `${accessToken}`,
          },
        },
      )
      .then((response) => {
        console.log(response);

        const tempObj = {
          commentId: comments.length + 1,
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

        let newList = [...comments, tempObj];
        setCommentsList(newList);
        commentInput.setValue("");
      });
  };

  return (
    <>
      {isPC ? (
        <Column>
          <InputForm onSubmit={onClickSubmit} isPC={isPC}>
            <InputContainer type="commentInput" placeholder="답변을 남겨보세요!" {...commentInput} />
            <InputButton type="submit">작성</InputButton>
          </InputForm>
          <Column gap="32px">
            {comments.map((value, id) => {
              return <Comments key={id} {...value} />;
            })}
          </Column>
        </Column>
      ) : (
        <Column>
          <Column style={{ overflowY: "scroll" }} gap="20px">
            {comments.map((value, id) => {
              return <Comments key={id} {...value} />;
            })}
          </Column>
          <InputForm onSubmit={onClickSubmit} isPC={isPC}>
            <InputContainer type="commentInput" placeholder="답변을 남겨보세요!" {...commentInput} />
            <InputButton type="submit">작성</InputButton>
          </InputForm>
        </Column>
      )}
    </>
  );
}

const InputForm = styled.form<{ isPC: boolean }>`
  display: flex;
  width: 100%;
  gap: 16px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: ${(props) => (props.isPC ? "none" : "0px")};
  /* position: ${(props) => (props.isPC ? "relative" : "fixed")}; */
  /* bottom: ${(props) => (props.isPC ? "none" : "0px")}; */
  background-color: ${(props) => (props.isPC ? "none" : BLACK_1)};
`;

const InputContainer = styled.input`
  width: 100%;
  height: 52px;
  border: 0;
  border-radius: 8px;
  background-color: ${BLACK_2};
  margin: 20px 0 20px 0;
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
