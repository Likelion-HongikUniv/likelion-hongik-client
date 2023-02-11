import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { isThumbnailSetButtonClickedState } from "../../states";
import { Column, Row } from "../elements/Wrapper";
import { ImageIcon } from "../icons/ImageIcon";

export function ThumbnailUploadPopup() {
  const SetIsThumbnailSetButtonClicked = useSetRecoilState(isThumbnailSetButtonClickedState);
  const navigate = useNavigate();

  return (
    <>
      <ConfirmationPopUpWrapper>
        <Column gap="16px" justifyContent="flex-start">
          <div style={{ color: "white", fontSize: "24px", fontWeight: "700" }}>썸네일 업로드</div>
          <Column width="100%" marginTop="25px" alignItems="center">
            {/* <img src="" width={209} height={209} /> */}
            <ImageArea>
              <ImageIcon />
            </ImageArea>
            <TextArea>썸네일 이미지 미설정 시 기본 이미지로 업로드됩니다.</TextArea>
            <Row gap="12px" style={{ height: "auto" }}>
              <CancelButton
                onClick={() => {
                  SetIsThumbnailSetButtonClicked(false);
                }}
              >
                취소
              </CancelButton>
              <LeaveButton
                onClick={() => {
                  // 썸네일 업로드
                }}
              >
                등록
              </LeaveButton>
            </Row>
          </Column>
        </Column>
      </ConfirmationPopUpWrapper>
      <BackDrop />
    </>
  );
}

const BackDrop = styled.div`
  z-index: 15000;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(14, 14, 14, 0.5);
`;

const ConfirmationPopUpWrapper = styled.div`
  z-index: 16000;
  background-color: #222222;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */

  padding: 24px;
  border-radius: 12px;
  width: 420px;
  height: 420px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const TextArea = styled.text`
  font-weight: 400;
  font-size: 12px;
  line-height: 34px;
  color: rgba(255, 255, 255, 0.6);
`;

const ImageArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 209px;
  height: 209px;
  background: #333333;
  border-radius: 8px;
`;

const CancelButton = styled.button`
  width: 180px;
  height: 52px;
  border: 1px solid rgba(255, 255, 255, 0.6);
  border-radius: 8px;
  color: rgba(255, 255, 255, 1);
  font-weight: 500;
  font-size: 20px;
`;

const LeaveButton = styled.button`
  width: 180px;
  height: 52px;
  background-color: #ed7f30;
  border-radius: 8px;
  color: black;
  font-weight: 500;
  font-size: 20px;
`;
