import styled from "styled-components";
import { BLACK_2, WHITE_1 } from "../../styles/theme";
import useInput from "../../hooks/useInput";
import { useRecoilState } from "recoil";
import { commentsListState } from "../../states/atoms";
import moment from "moment";

export function Input({ pid, username }: any) {
  const [commentsList, setCommentsList] = useRecoilState(commentsListState);
  const commentInput = useInput("");

  const onClickSubmit = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    const parentComment: any = commentsList.filter((comment) => comment.commentId === pid);
    let parentReplies: any = parentComment[0].replies;
    let curTime = new Date().toString();
    let formatTime = moment(curTime).format("YYYY-MM-DD HH:mm:ss");

    const tempObj = {
      id: 27,
      author: {
        authorId: 2,
        nickname: "dsadsad",
        profileImage: "dadsa",
        isAuthor: false,
      },
      body: commentInput.value,
      createdTime: formatTime,
      likeCount: 0,
    };
    parentReplies = [...parentReplies, tempObj];

    let curTarget = parentComment[0];
    let targetIdx = commentsList.indexOf(curTarget);
    let newComment = { ...curTarget, replies: parentReplies };
    let newList = [...commentsList.slice(0, targetIdx), newComment, ...commentsList.slice(targetIdx + 1)];

    // setCommentsList([...commentsList, { ...curTarget, replies: parentReplies }]);
    console.log(newList);
    setCommentsList(() => {
      return newList;
    });

    commentInput.value = "";
  };

  return (
    <InputForm onSubmit={onClickSubmit}>
      <InputContainer type="commentInput" placeholder={"@" + username + " 대댓글을 입력하세요."} {...commentInput} />
      <InputButton type="submit">작성</InputButton>
    </InputForm>
  );
}

const InputForm = styled.form`
  display: flex;
  gap: 16px;
  flex-direction: row;
`;

const InputContainer = styled.input`
  width: 100%;
  height: 52px;
  border: 0;
  border-radius: 8px;
  background-color: ${BLACK_2};
  padding: 16px;
  color: ${WHITE_1};
`;

const InputButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  width: 108px;
  height: 52px;

  background: #e9e9e9;
  border-radius: 8px;

  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.32px;
`;
