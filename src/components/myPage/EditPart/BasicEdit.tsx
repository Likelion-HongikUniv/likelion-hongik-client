import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { FileUploader } from "../FileUploader";
import { editState } from "./../../../states/index";

export function BasicEdit() {
  const info = useRecoilValue(editState);

  return (
    <>
      <EditTitle>기본 정보 변경</EditTitle>
      <div style={{ display: "flex" }}>
        <FileUploader />
        <BasicInfo>
          <Major>{info.major}</Major>
          <Names>{info.nickname}</Names>
        </BasicInfo>
      </div>
    </>
  );
}

const EditTitle = styled.div`
  font-weight: 700;
  font-size: 24px;
  line-height: 34px;
  letter-spacing: -0.32px;
  margin-bottom: 40px;
`;

const BasicInfo = styled.div`
  margin-left: 20px;
  margin-top: 31px;
`;

const Major = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 19.36px;
  color: #c8c8c8;
`;

const Names = styled.div`
  font-weight: 700;
  margin-top: 12px;
  font-size: 24px;
`;
