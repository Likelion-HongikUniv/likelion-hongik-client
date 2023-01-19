import styled from "styled-components";
import { Comments } from "./Comments";
import { Row, Column } from "../elements/Wrapper";
import { BLACK_2 } from "../../styles/theme";
import { IProfile } from "./Board";
import { IReply } from "./Replies";

export interface IComment {
  id?: number;
  author?: IProfile;
  body?: string;
  isDeleted?: boolean;
  createdTime?: string;
  // likeCount: number;
  likeCount?: any;
  comment_id?: number;
  replies?: IReply[];
}

export function CommentsList(commentList: IComment[]) {
  const comments = Object.values(commentList).map((comments: IComment) => comments);
  const onClickComment = (e: React.MouseEvent<HTMLButtonElement>) => {
    // setInputText();
    // setCommentLists({...commentList, newComments });
  };
  return (
    <>
      <Row gap="1rem" justifyContent="center" alignItems="center">
        <InputContainer type="text" placeholder="답변을 남겨보세요!" />
        <InputButton onClick={onClickComment}>작성</InputButton>
      </Row>
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
