import styled from "styled-components";
import { HeartUnfilled } from "../icons/HeartUnfilled";
import { HeartFilled } from "../icons/HeartFilled";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { IBoard } from "../../interfaces/comments";
import { commentsListState, boardState } from "../../states/atoms";
import axios from "axios";

interface HeartButtonProps {
  likes: number;
}

export function HeartButton({ likes }: HeartButtonProps) {
  const [board, setBoardData] = useRecoilState<IBoard>(boardState);
  const [isLike, setLike] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);
  const { id } = useParams<{ id?: string }>();
  const accessToken = localStorage.getItem("token");

  // const onClickLike = (e: React.MouseEvent<HTMLButtonElement>) => {
  //   setLike(!isLike);
  //   if (!isLike) {
  //     var count = likeCount + 1;
  //     setLikeCount(count);
  //     setBoardData({ ...board, isLiked: !isLike, likeCount: count });
  //   } else {
  //     var count = likeCount - 1;
  //     setLikeCount(count);
  //     setBoardData({ ...board, isLiked: !isLike, likeCount: count });
  //   }
  // };

  const onClickLike = (e: React.MouseEvent<HTMLButtonElement>) => {
    axios
      .post(
        `http://13.125.72.138:8080//community/post/${id}/like`,
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
            setBoardData({ ...board, isLiked: !isLike, likeCount: count });
          } else {
            var count = likeCount - 1;
            setLikeCount(count);
            setBoardData({ ...board, isLiked: !isLike, likeCount: count });
          }
        }
      });
  };

  return (
    <ButtonWrapper onClick={onClickLike}>
      {isLike ? <HeartFilled /> : <HeartUnfilled />}
      {likeCount}
    </ButtonWrapper>
  );
}

const ButtonWrapper = styled.button`
  box-sizing: border-box;
  min-width: 80px;
  font-size: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px 20px;
  gap: 4px;

  width: max-content;
  height: 48px;

  color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.8);
  border-radius: 50px;
`;
