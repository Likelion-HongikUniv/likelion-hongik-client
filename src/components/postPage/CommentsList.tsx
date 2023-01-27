import styled from "styled-components";
import { Comments } from "./Comments";
import { Column } from "../elements/Wrapper";
import { BLACK_2, WHITE_1 } from "../../styles/theme";
import { IComment } from "../../interfaces/comments";
import { useRecoilState } from "recoil";
import { commentsListState } from "../../states/atoms";
import moment from "moment";
import useInput from "../../hooks/useInput";

export function CommentsList(commentList: IComment[]) {
  const [commentsList, setCommentsList] = useRecoilState(commentsListState);
  const comments = Object.values(commentList).map((comments: IComment) => comments);
  let curUsername = localStorage.getItem("username");
  const commentInput = useInput("");

  const onClickSubmit = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    let curTime = new Date().toString();
    let formatTime = moment(curTime).format("YYYY-MM-DD HH:mm:ss");
    const tempObj = {
      commentId: 27,
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

    let newList = [...comments, tempObj];
    setCommentsList(newList);
    commentInput.value = "";
  };

  return (
    <>
      <InputForm onSubmit={onClickSubmit}>
        <InputContainer type="commentInput" placeholder="답변을 남겨보세요!" {...commentInput} />
        <InputButton type="submit">작성</InputButton>
      </InputForm>
      <Column>
        <Column gap="32px">
          {comments.map((value, id) => {
            return <Comments key={id} {...value} />;
          })}
        </Column>
      </Column>
    </>
  );
}

const InputForm = styled.form`
  display: flex;
  gap: 16px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const InputContainer = styled.input`
  width: 100%;
  height: 52px;
  border: 0;
  border-radius: 8px;
  background-color: ${BLACK_2};
  margin: 20px 0 20px 0;
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
