import styled from "styled-components";
import { WHITE_1 } from "../../../styles/theme";
import { useRecoilValue } from "recoil";
import { editState } from "../../../states";

export function MajorEdit(props: any) {
  const info = useRecoilValue(editState);
  return (
    <MajorPart>
      <MajorTitle>학과 변경</MajorTitle>
      <MajorInput name="major" placeholder={info.major} {...props} autoComplete="off" spellCheck="false" />
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
  line-height: 24.96px;
`;

const MajorInput = styled.input`
  height: 52px;
  width: 315px;
  background-color: #33333399;
  border: none;
  border-radius: 8px;
  margin-left: 43px;
  margin-right: 20px;
  color: ${WHITE_1};
  font-size: 18px;
  font-weight: 500;
  line-height: 21.78px;
  letter-spacing: -0.32px;
  padding: 15px 16px;
  opacity: 0.9;
`;
