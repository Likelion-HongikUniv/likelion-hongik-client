import styled from "styled-components";
import { WHITE_1 } from "../../styles/theme";
import useInput from "./../../hooks/useInput";
import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { editState } from "../../states";
import useSelect from "./../../hooks/useSelect";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function LoginDetailInfo() {
  const navigate = useNavigate();
  const [info, setInfo] = useRecoilState(editState);

  const nickname = useInput("");
  const major = useInput("");
  const part = useSelect("");
  const studentId = useInput("");
  const jwt = localStorage.getItem("token");

  const data = {
    nickname: nickname.value,
    major: major.value,
    studentId: studentId.value,
    part: part.value,
  };

  const onClickSave = () => {
    //저장 버튼 클릭 시 정보 넘겨주기

    const infoHandler = {
      ...info,
      major: major.value,
      nickname: nickname.value,
      part: part.value,
      studentId: studentId.value,
    };
    setInfo(infoHandler);

    axios
      .post(
        "http://13.125.72.138:8080//accounts/detail_info/",
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
        navigate("/login/complete");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // useEffect(() => {
  //   console.log(jwt);
  //   console.log(info);
  // }, []);

  return (
    <div>
      <Title>추가 정보 입력하기</Title>
      <DetailInfo style={{ marginTop: "60px" }}>닉네임</DetailInfo>
      <InputBox placeholder="닉네임 입력" {...nickname} />
      <DetailInfo>학번</DetailInfo>
      <InputBox placeholder="학번 입력" {...studentId} />
      <DetailInfo>학과</DetailInfo>
      <InputBox placeholder="학과 입력 ex. 시각디자인학과" {...major} />
      <DetailInfo>파트</DetailInfo>
      <SelectPart {...part}>
        <Options>파트 선택</Options>
        <Options value="기획/디자인">기획/디자인</Options>
        <Options value="프론트엔드">프론트엔드</Options>
        <Options value="백엔드">백엔드</Options>
      </SelectPart>
      <div style={{ textAlign: "center" }}>
        <DoneBtn
          disabled={
            nickname.value?.length !== 0 && studentId.value?.length !== 0 && major.value?.length !== 0 ? false : true
          }
          onClick={onClickSave}
        >
          완료
        </DoneBtn>
      </div>
    </div>
  );
}

const Title = styled.div`
  font-weight: 800;
  padding-top: 30px;
  font-size: 40px;
  line-height: 48px;
  text-align: center;
`;

const DetailInfo = styled.div`
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
`;

const InputBox = styled.input`
  margin: 20px 0px;
  width: 610px;
  height: 52px;
  border-radius: 8px;
  border: none;
  background-color: #222222;
  padding: 14px;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #d7d7d7;
`;

const SelectPart = styled.select`
  width: 610px;
  margin: 20px 0px;
  width: 610px;
  height: 52px;
  border-radius: 8px;
  border: none;
  background-color: #222222;
  padding: 14px;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #d7d7d7;
  cursor: pointer;
`;

const Options = styled.option`
  :disabled {
    display: none;
  }
`;

const DoneBtn = styled.button`
  width: 400px;
  height: 80px;
  margin: 60px 0 182px 0;
  /* background-color: #333333; */
  background-color: #ed7f30;
  text-align: center;
  border-radius: 20px;
  color: ${WHITE_1};
  font-weight: 700;
  font-size: 24px;
  line-height: 28.8px;

  :hover {
    background-color: #ed7f30;
  }

  &:disabled {
    background-color: #333333;
  }
`;
