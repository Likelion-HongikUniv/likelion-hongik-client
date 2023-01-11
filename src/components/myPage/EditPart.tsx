import styled from "styled-components";
import { BLACK_1, WHITE_1 } from "../../styles/theme";
import { BasicEdit } from "./EditPart/BasicEdit";
import { PartEdit } from "./EditPart/PartEdit";
import { TeamEdit } from "./EditPart/TeamEdit";

export function EditPart() {
  return (
    <EditPartDiv>
      <BasicEdit />
      <Bar />
      <EditTitle>멋사 정보 변경</EditTitle>
      <PartEdit />
      <TeamEdit />
      <SaveBtn>저장</SaveBtn>
    </EditPartDiv>
  );
}

const EditPartDiv = styled.div`
  width: 100%;
  height: 100%;
  /* margin-left: 488px; */
  background-color: ${BLACK_1};
  color: ${WHITE_1};
  padding-left: 163px;
  padding-top: 140px;
`;

const EditTitle = styled.div`
  font-weight: 700;
  font-size: 24px;
  line-height: 34px;
  letter-spacing: -0.32px;
  margin-bottom: 40px;
`;

const Bar = styled.div`
  width: 725px; //원래 925
  height: 1px;
  background-color: #ffffff66;
  margin: 40px 0;
  border-radius: 20px;
`;

const SaveBtn = styled.button`
  width: 73px;
  height: 60px;
  border-radius: 8px;
  background-color: ${WHITE_1};
  color: ${BLACK_1};
  margin-left: 652px;
  font-weight: 600;
  font-size: 18px;
  line-height: 21.78px;
`;
