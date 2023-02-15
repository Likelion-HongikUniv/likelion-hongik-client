import React from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { isCancelButtonClickedState } from "../../states";
import { Column, Row } from "../elements/Wrapper";

// interface ConfirmationPopUpProps {
//   onClickCancelButton?: React.MouseEventHandler<HTMLButtonElement>;
//   onClickLeaveButton?: React.MouseEventHandler<HTMLButtonElement>;
// }

export function ConfirmationPopup() {
  const setIsCancelButtonClicked = useSetRecoilState(isCancelButtonClickedState);
  const navigate = useNavigate();
  return (
    <>
      <ConfirmationPopUpWrapper>
        <Column gap="16px">
          <div style={{ color: "white", fontSize: "24px", fontWeight: "700" }}>작성 취소</div>
          <Column gap="40px">
            <div style={{ color: "rgba(255, 255, 255, 0.6)", fontWeight: "400", fontSize: "18px", opacity: "0.98" }}>
              앗! 작성 중인 글이 있어요. 정말 이동하시겠어요?
            </div>
            <Row gap="12px">
              <CancelButton
                onClick={() => {
                  setIsCancelButtonClicked(false);
                }}
              >
                취소
              </CancelButton>
              <LeaveButton
                onClick={() => {
                  navigate("/community/Q&A");
                }}
              >
                나가기
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
  justify-content: center;

  padding: 32px 24px;
  border-radius: 20px;

  width: 420px;
  height: 238px;

  position: fixed;
  margin: 0 auto;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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
  /* border: 1px solid rgba(255, 255, 255, 0.6); */
  background-color: #ed7f30;
  border-radius: 8px;
  color: "black";
  font-weight: 500;
  font-size: 20px;
`;
