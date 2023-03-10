import styled from "styled-components";
import { useRef } from "react";
import { useParams } from "react-router-dom";
import { BLACK_1, BLACK_2, WHITE_1 } from "../../styles/theme";
import { Comments } from "./Comments";
import { Column } from "../elements/Wrapper";
import { IComment } from "../../interfaces/comments";
import useInput from "../../hooks/useInput";
import useMediaQuery from "../../hooks/useMediaQuery";
import { usePostComment } from "../../api/postComment";

export function CommentsList(commentList: IComment[]) {
  const { mutate, status } = usePostComment();
  const commentInput = useInput("");
  const isPC = useMediaQuery("(min-width: 1200px)");
  const { id } = useParams<{ id: string }>();
  const ref = useRef<HTMLDivElement>(null);

  const onClickSubmit = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    const props = {
      postId: Number(id),
      body: commentInput.value,
    };
    commentInput.setValue("");

    if (status !== "loading") {
      mutate(props);
      ref.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {isPC ? (
        <Column>
          <InputForm onSubmit={onClickSubmit} isPC={isPC}>
            <InputContainer type="commentInput" placeholder="답변을 남겨보세요!" {...commentInput} />
            <InputButton type="submit">작성</InputButton>
          </InputForm>
          <Column gap="32px">
            {Object.values(commentList).map((value, id) => {
              return <Comments key={id} {...value} />;
            })}
            <div ref={ref}></div>
          </Column>
        </Column>
      ) : (
        <Column>
          <Column gap="20px">
            {Object.values(commentList).map((value, id) => {
              return <Comments key={id} {...value} />;
            })}
          </Column>
          {isPC ? null : <div style={{ height: "80px" }}></div>}
          <InputForm onSubmit={onClickSubmit} isPC={isPC}>
            <InputContainer type="commentInput" placeholder="답변을 남겨보세요!" {...commentInput} />
            <InputButton type="submit">작성</InputButton>
          </InputForm>
        </Column>
      )}
    </>
  );
}

const InputForm = styled.form<{ isPC: boolean }>`
  display: flex;
  width: 100%;
  gap: 16px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: ${(props) => (props.isPC ? "relative" : "fixed")};
  padding: ${(props) => (props.isPC ? "none" : "0 20px")};
  bottom: ${(props) => (props.isPC ? "none" : "0px")};
  left: ${(props) => (props.isPC ? "none" : "0px")};
  z-index: 10;
  background-color: ${(props) => (props.isPC ? "none" : BLACK_1)};
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
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
