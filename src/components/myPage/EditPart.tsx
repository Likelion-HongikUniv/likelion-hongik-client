import styled from "styled-components";
import { BLACK_1, WHITE_1 } from "../../styles/theme";
import { BasicEdit } from "./EditPart/BasicEdit";
import { PartEdit } from "./EditPart/PartEdit";
import { useRecoilState } from "recoil";
import { editState } from "./../../states/index";
import useInput from "../../hooks/useInput";
import { NickEdit } from "./EditPart/NickEdit";
import { MajorEdit } from "./EditPart/MajorEdit";
import useSelect from "./../../hooks/useSelect";
import axios from "axios";

export function EditPart() {
  const [info, setInfo] = useRecoilState(editState);

  const jwt = localStorage.getItem("token");

  const changeNickname = useInput(info.nickname);
  const changeMajor = useInput(info.major);
  const changePart = useSelect(info.part);
  // const changeTeam = useSelect(info.team);

  const data = {
    nickname: changeNickname.value,
    major: changeMajor.value,
    part: changePart.value,
  };

  const onClickSave = () => {
    //저장 버튼 클릭 시 정보 넘겨주기
    const infoHandler = {
      ...info,
      major: changeMajor.value,
      nickname: changeNickname.value,
      part: changePart.value,
      // team: changeTeam.value,
    };
    setInfo(infoHandler);
    console.log(info);

    axios
      .post(
        "http://13.125.72.138:8080/accounts/detail_info/",
        JSON.stringify(data),
        // { withCredentials: true },
        {
          headers: {
            "Content-Type": `application/json`,
            JWT: `${jwt}`,
          },
        },
      )
      .then((response) => {
        console.log(response);
        window.location.reload(); //새로고침되게?
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <EditPartDiv>
      <BasicEdit />
      <div style={{ display: "flex" }}>
        <div>
          <NickEdit {...changeNickname} />
          <MajorEdit {...changeMajor} />
          <Bar />
          <EditTitle>멋사 정보 변경</EditTitle>
          <PartEdit {...changePart} />
          {/* <TeamEdit {...changeTeam} /> */}
          <SaveBtn onClick={onClickSave}>저장</SaveBtn>
        </div>
      </div>
    </EditPartDiv>
  );
}

const EditPartDiv = styled.div`
  width: 691px;
  height: 100%;
  background-color: ${BLACK_1};
  color: ${WHITE_1};
  margin-left: 8.33vw;
  padding-top: 140px;

  @media (max-width: 768px) {
    //모바일
    padding: 0 0;
    width: max-content;
    margin-left: 6vw;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    width: 500px;
  }
`;

const EditTitle = styled.div`
  font-weight: 700;
  font-size: 24px;
  line-height: 34px;
  letter-spacing: -0.32px;
  margin-bottom: 40px;
  text-align: left;

  @media (max-width: 768px) {
    //모바일
    display: none;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
  }
`;

const Bar = styled.div`
  width: 691px; //원래 925
  height: 1px;
  background-color: #ffffff66;
  margin: 40px 0;
  border-radius: 20px;

  @media (max-width: 768px) {
    //모바일
    width: 88vw;
    margin: 20px 0;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    // 테블릿 세로
    width: 650px;
  }
`;

const SaveBtn = styled.button`
  width: 73px;
  height: 60px;
  border-radius: 8px;
  background-color: ${WHITE_1};
  color: ${BLACK_1};
  /* margin-left: 652px; */
  float: right;
  font-weight: 600;
  font-size: 18px;
  line-height: 21.78px;

  @media (max-width: 768px) {
    //모바일
    margin-left: 0;
    width: 88vw;
    margin-top: 44px;
    margin-bottom: 106px;
    float: none;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    // 테블릿 세로
    float: right;
    margin-right: 40px;
  }
`;
