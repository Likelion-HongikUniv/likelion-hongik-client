import styled from "styled-components";
import { BLACK_2, WHITE_1 } from "../../styles/theme";
import useInput from "../../hooks/useInput";
import { usePostReply } from "../../api/postReply";

interface InputProps {
  cid: number;
  username: string | null | undefined;
}

export function Input({ cid, username }: InputProps) {
  const commentInput = useInput("");
  const { mutate, status } = usePostReply();
  const onClickSubmit = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status !== "loading") {
      mutate({
        id: cid,
        body: commentInput.value,
      });
    }
    commentInput.setValue("");
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
