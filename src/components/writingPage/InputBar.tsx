import styled, { CSSProperties } from "styled-components";

interface InputBarProps {
  style?: CSSProperties;
}

export function InputBar({ style }: InputBarProps) {
  return <Wrapper placeholder="제목을 입력하시오." style={style} />;
}

const Wrapper = styled.input`
  width: 100%;
  height: 34px;
  background-color: black;
  border: none;
  font-weight: 700;
  font-size: 24px;
  line-height: 34px;
  color: rgba(255, 255, 255, 1);
`;
