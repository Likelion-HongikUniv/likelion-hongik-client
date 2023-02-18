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

  @media (max-width: 767px) {
    //모바일
    display: inline-block;
  }
`;

const MajorTitle = styled.div`
  font-weight: 500;
  font-size: 20px;
  line-height: 24.96px;

  @media (max-width: 767px) {
    //모바일
    font-size: 16px;
    line-height: 19.2px;
    /* text-align: left; */
    display: flex;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
  }
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

  @media (max-width: 768px) {
    //모바일
    width: 88vw;
    height: 48px;
    margin-left: 0;
    margin-top: 12px;
    font-size: 16px;
    line-height: 19.2px;
    background-color: #222222;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    width: 50vw;
    margin-left: 43px;
  }
`;
