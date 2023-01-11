import { useState } from "react";
import styled from "styled-components";
import { WHITE_1 } from "../../../styles/theme";

interface MyFormProps {
  onSubmit: (form: { major: string }) => void;
}

export function MajorEdit({ onSubmit }: MyFormProps) {
  const [form, setForm] = useState({
    major: "컴퓨터공학과",
  });

  const { major } = form;

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
    <MajorPart>
      <MajorTitle>학과 변경</MajorTitle>
      <form onSubmit={handleSubmit}>
        <MajorInput name="major" value={major} onChange={onChange} />
        <MajorSaveBtn type="submit">저장</MajorSaveBtn>
        {/* 학과추가뭐지..? */}
      </form>
    </MajorPart>
  );
}

const MajorPart = styled.div`
  display: flex;
  margin-top: 24px;
  align-items: center;
`;

const MajorTitle = styled.div`
  font-weight: 500;
  font-size: 20px;
  line-height: 24.2px;
`;

const MajorInput = styled.input`
  height: 60px;
  width: 315px;
  background-color: #33333399;
  border: none;
  border-radius: 8px;
  margin-left: 39px;
  margin-right: 20px;
  color: ${WHITE_1};
  font-size: 18px;
  font-weight: 500;
  line-height: 21.78px;
  letter-spacing: -0.32px;
  padding: 19px 16px;
  opacity: 0.9;
`;

const MajorSaveBtn = styled.button`
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
