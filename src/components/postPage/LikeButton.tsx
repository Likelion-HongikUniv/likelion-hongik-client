import styled from "styled-components";
import { Row } from "../elements/Wrapper";
import { HeartUnfilled } from "../icons/HeartUnfilled";
import { HeartFilled } from "../icons/HeartFilled";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { IComment, IReply } from "../../interfaces/comments";
import { commentsListState } from "../../states/atoms";
import axios from "axios";
// import { isLoggedInState } from "../../states";

interface LikeButtonProps {
  cid?: number;
  rid?: number;
  isAuthor: boolean;
  isLiked: boolean;
  isComment: boolean;
  likes: number;
}

export function LikeButton({ cid, rid, isLiked, isAuthor, isComment, likes }: LikeButtonProps) {
  const [isLikeActive, setIsLikeActive] = useState(isLiked);
  const [likeCount, setLikeCount] = useState(likes);
  const accessToken = localStorage.getItem("token");

  const onClickLikeComment = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log("댓글 좋아요 clicked");
    console.log(" before axios : ", isLikeActive, likeCount);

    if (isAuthor === false) {
      axios
        .post(
          `http://13.125.72.138:8080/community/comment/${cid}/like`,
          { body: null }, // body null이라도 있어야 이 문법에서 돌아감
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
          if (response.status === 200) {
            if (!isLikeActive) {
              setLikeCount(likeCount + 1);
              setIsLikeActive(!isLiked);
            } else {
              setLikeCount(likeCount - 1);
              setIsLikeActive(!isLiked);
            }
            console.log(" after axios : ", isLikeActive, likeCount);
          }
        });
    } else {
      alert("본인의 댓글은 좋아요할 수 없습니다.");
    }
  };

  const onClickLikeReply = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log("ㄴ대댓글 좋아요 clicked");
    if (isAuthor === false) {
      axios
        .post(
          `http://13.125.72.138:8080/community/reply/${rid}/like`,
          { body: null }, // body null이라도 있어야 이 문법에서 돌아감
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
          if (response.status === 200) {
            if (!isLiked) {
              setLikeCount(likeCount + 1);
              setIsLikeActive(!isLiked);
            } else {
              setLikeCount(likeCount - 1);
              setIsLikeActive(!isLiked);
            }
          }
        });
    } else {
      alert("본인의 답글은 좋아요할 수 없습니다.");
    }
  };

  return (
    <ButtonWrapper onClick={isComment ? onClickLikeComment : onClickLikeReply}>
      {isLikeActive ? <HeartFilled /> : <HeartUnfilled />}
      <div>좋아요</div>
      {likeCount}
    </ButtonWrapper>
  );
}

const ButtonWrapper = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  min-width: 80px;
  gap: 8px;
  color: white;
`;
