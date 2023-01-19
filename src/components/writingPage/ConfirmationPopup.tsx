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
  const setIsancelButtonClicked = useSetRecoilState(isCancelButtonClickedState);
  const navigate = useNavigate();
  return (
    <Wrapper>
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
                  setIsancelButtonClicked(false);
                }}
              >
                취소
              </CancelButton>
              <LeaveButton
                onClick={() => {
                  navigate("/community");
                }}
              >
                나가기
              </LeaveButton>
            </Row>
          </Column>
        </Column>
      </ConfirmationPopUpWrapper>
      <BackDrop />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: fixed;
  top: 35%;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const BackDrop = styled.div`
  z-index: 9999;

  width: 100vw;
  height: 100vh;

  position: fixed;
  top: 0;

  background-color: rgba(14, 14, 14, 0.5);
`;

const ConfirmationPopUpWrapper = styled.div`
  z-index: 10000;

  background-color: #222222;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 32px 24px;
  border-radius: 12px;

  width: 420px;
  height: 238px;
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
