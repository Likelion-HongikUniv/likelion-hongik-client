import styled from "styled-components";
import { Row } from "../elements/Wrapper";
import { HeartUnfilled } from "../icons/HeartUnfilled";
import { HeartFilled } from "../icons/HeartFilled";
import { useEffect, useState } from "react";
// import { isLoggedInState } from "../../states";

interface LikeButtonProps {
  likes: number;
}

export function LikeButton({ likes }: LikeButtonProps) {
  const [isLike, setLike] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);
  const onClickLike = (e: React.MouseEvent<HTMLButtonElement>) => {
    setLike(!isLike);
    if (!isLike) {
      var count = likeCount + 1;
      setLikeCount(count);
    } else {
      var count = likeCount - 1;
      setLikeCount(count);
    }
  };

  return (
    <ButtonWrapper onClick={onClickLike}>
      {isLike ? <HeartFilled /> : <HeartUnfilled />}
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
