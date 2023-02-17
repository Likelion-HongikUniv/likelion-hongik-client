import { useState, ChangeEvent } from "react";
import styled from "styled-components";
import useSelect from "./../../hooks/useSelect";
import axios from "axios";
import useInput from "../../hooks/useInput";
import { useRecoilState, useRecoilValue } from "recoil";
import { BasicEdit } from "./EditPart/BasicEdit";
import { PartEdit } from "./EditPart/PartEdit";
import { NickEdit } from "./EditPart/NickEdit";
import { MajorEdit } from "./EditPart/MajorEdit";
import { editState, mulBtnState, NickMulState } from "./../../states/index";
import { BLACK_1, WHITE_1 } from "../../styles/theme";

export function EditPart() {
  const [info, setInfo] = useRecoilState(editState);
  const [nickCheck, setNickCheck] = useRecoilState(mulBtnState);
  const mulNick = useRecoilValue(NickMulState);

  const jwt = localStorage.getItem("token");

  const useNickInput = (initialValue: string | undefined) => {
    const [value, setValue] = useState(initialValue);
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
      setNickCheck(false);
      //이걸 위해서 useInput 살짝 수정해서 붙여옴 허허
      // input값이 바뀔 때마다 중복확인 체크를 다시 해줘야함
    };
    return { value, setValue, onChange };
  };

  const changeNickname = useNickInput(info.nickname);
  const changeMajor = useInput(info.major);
  const changePart = useSelect(info.part);

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
    };
    setInfo(infoHandler);
    console.log(info);

    axios
      .put("http://13.125.72.138:8080/mypage/edit", JSON.stringify(data), {
        headers: {
          "Content-Type": `application/json`,
          JWT: `${jwt}`,
        },
      })
      .then((response) => {
        console.log(response);
        window.location.reload(); //새로고침되게
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
          <SaveBtn
            disabled={
              ((nickCheck === true && mulNick === true) || changeNickname.value === info.nickname) &&
              changeNickname.value?.length !== 0 &&
              changeMajor.value?.length !== 0
                ? false
                : true
            }
            onClick={onClickSave}
          >
            저장
          </SaveBtn>
        </div>
      </div>
    </EditPartDiv>
  );
}

const EditPartDiv = styled.div`
  width: 768px;
  height: 100%;
  background-color: ${BLACK_1};
  color: ${WHITE_1};
  margin-left: 8.33vw;
  padding-top: 140px;

  @media (max-width: 767px) {
    //모바일
    padding: 0 0;
    width: max-content;
    margin-left: 6vw;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    width: max-content;
    padding: 0 0;
    margin-left: 2vw;
  }
`;

const EditTitle = styled.div`
  font-weight: 700;
  font-size: 24px;
  line-height: 34px;
  letter-spacing: -0.32px;
  margin-bottom: 40px;
  text-align: left;

  @media (max-width: 767px) {
    //모바일
    display: none;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    margin-top: 40px;
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

  @media (min-width: 768px) and (max-width: 1023px) {
    // 테블릿 세로
    width: 650px;
    margin-top: 56px;
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

  @media (max-width: 767px) {
    //모바일
    margin-left: 0;
    width: 88vw;
    margin-top: 44px;
    margin-bottom: 106px;
    float: none;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    // 테블릿 세로
    float: right;
    margin-top: 44px;
  }

  &:disabled {
    cursor: default;
  }
`;
