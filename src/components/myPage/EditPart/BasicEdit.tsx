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
  @media (max-width: 767px) {
    //모바일
    display: none;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    opacity: 98%;
    margin-top: 140px;
  }
`;

const BasicInfo = styled.div`
  margin-left: 20px;
  margin-top: 31px;
  @media (max-width: 767px) {
    //모바일
    margin-left: 12px;
    margin-top: 6px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
  }
`;

const Major = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 19.36px;
  color: #c8c8c8;
  @media (max-width: 767px) {
    //모바일
    font-size: 14px;
    line-height: 16.94px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
  }
`;

const Names = styled.div`
  font-weight: 700;
  margin-top: 12px;
  font-size: 24px;
  @media (max-width: 767px) {
    //모바일
    font-size: 18px;
    line-height: 21.78px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
  }
`;
