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
  cid: number;
  rid?: number;
  isAuthor: boolean;
  isLiked: boolean;
  isComment: boolean;
  likes: number;
}

export function LikeButton({ cid, rid, isLiked, isAuthor, isComment, likes }: LikeButtonProps) {
  const accessToken = localStorage.getItem("token");
  const [isLikeActive, setIsLikeActive] = useState(isLiked);
  const [likeCount, setLikeCount] = useState(likes);

  useEffect(() => {
    // reply는 괜찮은데 comment는 api로 받아온 값과 state가 차이나서 새로 세팅
    if (isLikeActive !== isLiked) {
      setIsLikeActive((prev) => !prev);
    }
    if (likes !== likeCount) {
      setLikeCount(likes);
    }
  }, [isLiked, likes]);

  const onClickLikeComment = (e: React.MouseEvent<HTMLButtonElement>) => {
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
          if (err.response.status === 401 || err.response.status === 500) {
            alert("오류코드 401, 접근 권한이 없습니다. 로그인이 필요합니다.");
          }
          if (err.response.status === 404) {
            alert("좋아요 대상을 찾을 수 없습니다.");
          }
          // window.location.reload();
          throw err;
        })
        .then((response) => {
          if (response.status === 200) {
            {
              isLikeActive ? setLikeCount((prev) => prev - 1) : setLikeCount((prev) => prev + 1);
            }
            setIsLikeActive((isLikeActive) => !isLikeActive);
          }
        });
    } else {
      alert("본인의 댓글은 좋아요할 수 없습니다.");
    }
  };

  const onClickLikeReply = (e: React.MouseEvent<HTMLButtonElement>) => {
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
          if (err.response.status === 401 || err.response.status === 500) {
            alert("오류코드 401, 접근 권한이 없습니다. 로그인이 필요합니다.");
          }
          if (err.response.status === 404) {
            alert("좋아요 대상을 찾을 수 없습니다.");
          }
          window.location.reload();
          throw err;
        })
        .then((response) => {
          if (response.status === 200) {
            {
              isLikeActive ? setLikeCount((prev) => prev - 1) : setLikeCount((prev) => prev + 1);
            }
            setIsLikeActive((isLikeActive) => !isLikeActive);
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
