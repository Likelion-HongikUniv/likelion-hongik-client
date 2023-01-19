import styled from "styled-components";
import { Row } from "../elements/Wrapper";
import { BLACK_2, WHITE_1 } from "../../styles/theme";
// import { isLoggedInState } from "../../states";
import useInput from "../../hooks/useInput";
import { useRecoilState, useRecoilValue } from "recoil";
import { commentsListState } from "../../states/atoms";
import PostDetail from "../../data/postDetail.json";

export function Input({ pid, username }: any) {
  const commentInput = useInput("");
  const [commentsList, setCommentsList] = useRecoilState(commentsListState);
  // const commentsList = useRecoilValue(commentsListState);

  const onClickSubmit = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    const parentComment: any = commentsList.filter((comment) => comment.id === pid);
    let parentReplies: any = parentComment[0].replies;
    const tempObj = {
      author: {
        authorId: 2,
        nickname: "dsadsad",
        profileImage: "dadsa",
        isAuthor: false,
      },
      body: commentInput.value,
      createdTime: "2023-01-17T17:41:04.001386",
      id: 27,
      likeCount: 0,
    };
    parentReplies = [...parentReplies, tempObj];
    console.log("이번거", commentsList);
    // setCommentsList(() => {
    //   return [...commentsList, parentComment[0]: parentReplies ];
    // });
    console.log("야", commentsList);

    // console.log("누른 후", { [parentComment[0].replies]: parentReplies });

    // console.log("코메늩 : ", parentComment);

    // console.log("대댓글 : ", parentReplies);

    // setCommentsList([...commentsList, `${parentRelpies}`: parentRelpies ])
    // console.log("now", parentRelpies);

    // console.log(parentComment[0].replies);
    // console.log(parentComment.replies);
    // parentComment.replies.push()

    console.log(pid, commentInput.value);
    // POST API
    // 댓글 리스트에 업로드
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
