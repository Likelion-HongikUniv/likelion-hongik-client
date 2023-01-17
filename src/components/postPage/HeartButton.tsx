import styled from "styled-components";
import { HeartUnfilled } from "../icons/HeartUnfilled";
import { HeartFilled } from "../icons/HeartFilled";
import { useEffect, useState } from "react";

interface HeartButtonProps {
  likes: number;
}

export function HeartButton({ likes }: HeartButtonProps) {
  const [isLike, setLike] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);
  const onClickLike = (e: React.MouseEvent<HTMLButtonElement>) => {
    // if (isLoggedInState);
    setLike(!isLike);
    if (!isLike) {
      var count = likeCount + 1;
      setLikeCount(count);
    } else {
      var count = likeCount - 1;
      setLikeCount(count);
    }
  };

  useEffect(() => {
    console.log("like 눌림");
  }, [likeCount]);

  return (
    <ButtonWrapper onClick={onClickLike}>
      {isLike ? <HeartFilled /> : <HeartUnfilled />}
      {likeCount || 312}
    </ButtonWrapper>
  );
}

const ButtonWrapper = styled.button`
  box-sizing: border-box;
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
