import styled, { CSSProperties } from "styled-components";

interface InputBarProps {
  style?: CSSProperties;
  value?: string;
  setValue?: Function;
}

export function InputBar(props: InputBarProps) {
  return <Wrapper placeholder="제목을 입력하시오." style={props.style} {...props} />;
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
