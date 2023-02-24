import styled from "styled-components";
import { HeartUnfilled } from "../icons/HeartUnfilled";
import { HeartFilled } from "../icons/HeartFilled";
import { usePostLikeControl } from "../../api/postLikes";
interface LikeButtonProps {
  id: number;
  isAuthor: boolean;
  isLiked: boolean;
  isComment: boolean;
  likes: number;
}

export function LikeButton({ id, isLiked, isAuthor, likes, isComment }: LikeButtonProps) {
  const { mutate } = usePostLikeControl();
  const onClickLikeReply = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!isAuthor) {
      mutate({ id, isComment });
    } else {
      alert("본인의 답글은 좋아요할 수 없습니다.");
    }
  };

  return (
    <ButtonWrapper onClick={onClickLikeReply}>
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
