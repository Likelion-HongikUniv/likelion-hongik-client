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
  isLiked: boolean;
  likes: number;
}

export function HeartButton({ isLiked, likes }: HeartButtonProps) {
  const [board, setBoardData] = useRecoilState<IBoard>(boardState);
  const { id } = useParams<{ id?: string }>();
  const accessToken = localStorage.getItem("token");

  const onClickLike = (e: React.MouseEvent<HTMLButtonElement>) => {
    axios
      .post(
        `http://13.125.72.138:8080/community/post/${id}/like`,
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
          console.log(response.data);
          setBoardData({ ...board });
          // if (!isLiked) {
          //   setLikeCount(likeCount + 1);
          // } else {
          //   setLikeCount(likeCount - 1);
          // }
        }
      });
  };

  return (
    <ButtonWrapper onClick={onClickLike}>
      {board.isLiked ? <HeartFilled /> : <HeartUnfilled />}
      {board.likeCount}
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
