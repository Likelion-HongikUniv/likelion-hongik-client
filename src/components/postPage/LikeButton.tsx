import styled from "styled-components";
import { Row } from "../elements/Wrapper";
import { HeartUnfilled } from "../icons/HeartUnfilled";
import { HeartFilled } from "../icons/HeartFilled";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { IComment } from "../../interfaces/comments";
import { commentsListState } from "../../states/atoms";
import axios from "axios";
// import { isLoggedInState } from "../../states";

interface LikeButtonProps {
  cid: number;
  isComment: boolean;
  likes: number;
}

export function LikeButton({ cid, isComment, likes }: LikeButtonProps) {
  const [comments, setCommentsData] = useRecoilState<IComment[]>(commentsListState);
  const [isLike, setLike] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);
  const { id } = useParams<{ id?: string }>();
  const accessToken = localStorage.getItem("token");
  const curComment = comments.find((comment) => comment.commentId === cid);

  const newListList = {};

  const onClickLikeComment = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log("댓글 좋아요 clicked");

    axios
      .post(
        `http://13.125.72.138:8080//community/comment/${cid}/like`,
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
          setLike(!isLike);
          console.log("accessed 200");
          console.log(isLike);
          if (!isLike) {
            var count = likeCount + 1;
            setLikeCount(count);
            // setCommentData({ ...comment, isLiked: !isLike, likeCount: count });
          } else {
            var count = likeCount - 1;
            setLikeCount(count);
            // setCommentData({ ...comment, isLiked: !isLike, likeCount: count });
          }
        }
      });
  };

  const onClickLikeReply = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log("ㄴ대댓글 좋아요 clicked");
    axios
      .post(
        `http://13.125.72.138:8080//community/reply/${cid}/like`,
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
          setLike(!isLike);
          console.log("accessed 200");
          console.log(isLike);
          if (!isLike) {
            var count = likeCount + 1;
            setLikeCount(count);
            // setCommentData({ ...comment, isLiked: !isLike, likeCount: count });
          } else {
            var count = likeCount - 1;
            setLikeCount(count);
            // setCommentData({ ...comment, isLiked: !isLike, likeCount: count });
          }
        }
      });
  };

  return (
    <>
      {isComment ? (
        <ButtonWrapper onClick={onClickLikeComment}>
          {isLike ? <HeartFilled /> : <HeartUnfilled />}
          <div>좋아요</div>
          {likeCount}
        </ButtonWrapper>
      ) : (
        <ButtonWrapper onClick={onClickLikeReply}>
          {isLike ? <HeartFilled /> : <HeartUnfilled />}
          <div>좋아요</div>
          {likeCount}
        </ButtonWrapper>
      )}
    </>
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
