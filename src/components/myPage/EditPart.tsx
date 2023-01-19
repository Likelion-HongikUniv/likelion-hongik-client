import styled from "styled-components";
import { BLACK_1, WHITE_1 } from "../../styles/theme";
import { BasicEdit } from "./EditPart/BasicEdit";
import { PartEdit } from "./EditPart/PartEdit";
import { TeamEdit } from "./EditPart/TeamEdit";
import { useRecoilState } from "recoil";
import { editState } from "./../../states/index";
import useInput from "../../hooks/useInput";
import { NickEdit } from "./EditPart/NickEdit";
import { MajorEdit } from "./EditPart/MajorEdit";
import useSelect from "./../../hooks/useSelect";

export function EditPart() {
  const [info, setInfo] = useRecoilState(editState);

  const changeNickname = useInput(info.nickname);
  const changeMajor = useInput(info.major);
  const changePart = useSelect(info.part);
  const changeTeam = useSelect(info.team);

  const onClickSave = () => {
    //저장 버튼 클릭 시 정보 넘겨주기
    const infoHandler = {
      ...info,
      major: changeMajor.value,
      nickname: changeNickname.value,
      part: changePart.value,
      team: changeTeam.value,
    };
    setInfo(infoHandler);
    console.log(info);
  };

  return (
    <EditPartDiv>
      <BasicEdit />
      <NickEdit {...changeNickname} />
      <MajorEdit {...changeMajor} />
      <Bar />
      <EditTitle>멋사 정보 변경</EditTitle>
      <PartEdit {...changePart} />
      <TeamEdit {...changeTeam} />
      <SaveBtn onClick={onClickSave}>저장</SaveBtn>
    </EditPartDiv>
  );
}

const EditPartDiv = styled.div`
  width: 100%;
  height: 100%;
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
