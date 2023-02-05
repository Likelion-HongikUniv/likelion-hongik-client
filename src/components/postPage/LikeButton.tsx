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
  isAuthor?: boolean;
  isLiked?: boolean;
  isComment: boolean;
  likes: number;
}

export function LikeButton({ cid, rid, isLiked, isAuthor, isComment, likes }: LikeButtonProps) {
  const [comments, setCommentsData] = useRecoilState<IComment[]>(commentsListState);
  const [likeCount, setLikeCount] = useState(likes);
  const [isLikeActive, setIsLikeActive] = useState(isLiked);
  const accessToken = localStorage.getItem("token");
  const parent: IComment[] = comments.filter((comment) => comment.commentId === cid);
  const curTarget = parent[0];
  const targetIdx = comments.indexOf(curTarget);

  const onClickLikeComment = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log("댓글 좋아요 clicked");
    // if (isAuthor === false) {
    //   axios
    //     .post(
    //       `http://13.125.72.138:8080/community/comment/${cid}/like`,
    //       { body: null }, // body null이라도 있어야 이 문법에서 돌아감
    //       {
    //         headers: {
    //           "Content-Type": `application/json`,
    //           JWT: `${accessToken}`,
    //         },
    //       },
    //     )
    //     .catch((err) => {
    //       throw err;
    //     })
    //     .then((response) => {
    //       console.log(response);
    //       if (response.status === 200) {
    //         isLiked = !isLiked;
    //         if (!isLiked) {
    //           var count = likeCount + 1;
    //           setLikeCount(count);
    //           // setCommentsData({ ...comments, {...curComment, isLiked: !isLike, likeCount: count} });
    //         } else {
    //           var count = likeCount - 1;
    //           setLikeCount(count);
    //           // setCommentData({ ...comment, isLiked: !isLike, likeCount: count });
    //         }
    //       }
    //     });
    // } else {
    //   alert("본인의 댓글은 좋아요할 수 없습니다.");
    // }
  };

  const onClickLikeReply = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log("ㄴ대댓글 좋아요 clicked");
    console.log(parent[0]);
    let target = parent[0];
    // console.log("before set Click: ", target);
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
          console.log(response);
          if (response.status === 200) {
            if (!isLiked) {
              console.log("before:", likes, isLiked);
              likes = likeCount + 1;
              isLiked = !isLiked;
              console.log("after:", likes, isLiked);
            } else {
              console.log("before:", likes, isLiked);
              likes = likeCount - 1;
              isLiked = !isLiked;
              console.log("after:", likes, isLiked);
            }
            let newComment = { ...curTarget, isLiked: isLiked, likeCount: likes };
            let newList = [...comments.slice(0, targetIdx), newComment, ...comments.slice(targetIdx + 1)];
            setCommentsData(newList);
          }
        });
    } else {
      alert("본인의 답글은 좋아요할 수 없습니다.");
    }
  };

  return (
    <ButtonWrapper onClick={isComment ? onClickLikeComment : onClickLikeReply}>
      {isLiked ? <HeartFilled /> : <HeartUnfilled />}
      <div>좋아요</div>
      {likes}
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
