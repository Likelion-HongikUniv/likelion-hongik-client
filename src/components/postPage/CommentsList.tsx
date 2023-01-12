// import axios from "axios";
import styled from "styled-components";
import { Comments } from "./Comments";
import { Row, Column } from "../elements/Wrapper";
import { IComment } from "./Comments";
import { BLACK_2 } from "../../styles/theme";
import { atom, useRecoilState } from "recoil";
import { isEditable } from "@testing-library/user-event/dist/utils";
import { useQuery } from "@tanstack/react-query";

interface CommentList {
  commentList?: IComment[];
}

const commentState = atom<IComment[]>({
  key: "comment",
  default: [
    {
      key: 0,
      id: 1,
      body: "comment test1",
      username: "감자",
      created: 20230111,
      replyId: [],
    },

    {
      key: 2,
      id: 2,
      username: "빼로로",
      body: "comment test2",
      created: 20230111,
      replyId: [],
    },

    {
      key: 3,
      id: 3,
      username: "건빵스",
      body: "comment test3",
      created: 20230111,
      replyId: [],
    },
  ],
});

// const getComments = async () => {
//   const { data } = await axios.get<IComment[]>("http://localhost:3000/post/${postId}");
//   return data;
// };

export function CommentsList({ commentList }: CommentList) {
  // const { data: comments, isLoading, isError, error } = useQuery<IComment[], Error>("comments", getComments);
  const [comments, setComments] = useRecoilState(commentState);
  const onClickComment = (e: React.MouseEvent<HTMLButtonElement>) => {
    // setInputText();
    console.log(e.currentTarget.name);
  };

  return (
    <>
      <Row gap="1rem" justifyContent="center" alignItems="center">
        <InputContainer type="text" placeholder="답변을 남겨보세요!" />
        <InputButton onClick={onClickComment}>작성</InputButton>
      </Row>
      <Column>
        <div>
          {comments.map((comment: IComment) => (
            <Comments key={comment.key} id={comment.id} username={comment.username} created={comment.created} />
          ))}
        </div>
      </Column>
    </>
  );
}

const InputContainer = styled.input`
  width: 100%;
  height: 52px;
  border: 0;
  border-radius: 8px;
  background-color: ${BLACK_2};
  margin: 20px 0 20px 0;
  padding: 16px;
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
