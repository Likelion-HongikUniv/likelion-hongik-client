import { useState } from "react";
import styled from "styled-components";
import { WHITE_1 } from "../../../styles/theme";

interface MyFormProps {
  onSubmit: (form: { nickname: string }) => void;
}

export function NickEdit({ onSubmit }: MyFormProps) {
  const [form, setForm] = useState({
    nickname: "건뺑이",
  });

  const { nickname } = form;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <NicknamePart>
      <NickTitle>닉네임 변경</NickTitle>
      <form onSubmit={handleSubmit}>
        <NickInput name="nickname" value={nickname} onChange={onChange} placeholder={nickname} />
        <NickSaveBtn type="submit">저장</NickSaveBtn>
      </form>
    </NicknamePart>
  );
}

const NicknamePart = styled.div`
  display: flex;
  margin-top: 47px;
  align-items: center;
`;

const NickTitle = styled.div`
  font-weight: 500;
  font-size: 20px;
  line-height: 24.2px;
`;

const NickInput = styled.input`
  height: 60px;
  width: 315px;
  background-color: #33333399;
  border: none;
  border-radius: 8px;
  margin-left: 20px;
  margin-right: 20px;
  color: ${WHITE_1};
  font-size: 18px;
  font-weight: 500;
  line-height: 21.78px;
  letter-spacing: -0.32px;
  padding: 19px 16px;
  opacity: 0.9;
`;

const NickSaveBtn = styled.button`
  background-color: ${WHITE_1};
  width: 73px;
  height: 60px;
  border-radius: 8px;
  padding: 19px 20px;
  font-weight: 600;
  font-size: 18px;
  line-height: 21.78px;
  letter-spacing: -0.32px;
`;
