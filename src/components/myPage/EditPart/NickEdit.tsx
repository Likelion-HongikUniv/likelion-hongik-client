import styled from "styled-components";
import { WHITE_1 } from "../../../styles/theme";
import { useRecoilValue } from "recoil";
import { editState } from "../../../states";

export function NickEdit(props: any) {
  const info = useRecoilValue(editState);

  return (
    <NicknamePart>
      <NickTitle>닉네임 변경</NickTitle>
      <NickInput name="nickname" placeholder={info.nickname} {...props} autoComplete="off" spellCheck="false" />
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
  line-height: 24.96px;
`;

const NickInput = styled.input`
  height: 52px;
  width: 315px;
  background-color: #33333399;
  border: none;
  border-radius: 8px;
  margin-left: 25px;
  margin-right: 20px;
  color: ${WHITE_1};
  font-size: 18px;
  font-weight: 500;
  line-height: 22.46px;
  letter-spacing: -0.32px;
  padding: 15px 16px;
  opacity: 0.9;
`;
