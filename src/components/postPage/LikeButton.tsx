import styled from "styled-components";
import { Row } from "../elements/Wrapper";
import { HeartUnfilled } from "../icons/HeartUnfilled";
import { HeartFilled } from "../icons/HeartFilled";
import { useEffect, useState } from "react";
// import { isLoggedInState } from "../../states";

export function LikeButton() {
  const [isLike, setLike] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const onClickLike = (e: React.MouseEvent<HTMLButtonElement>) => {
    // if (isLoggedInState);
    setLike(!isLike);
    console.log(likeCount);
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
      <div>좋아요</div>
      {likeCount}
    </ButtonWrapper>
  );
}

const ButtonWrapper = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  color: white;
`;
