import axios from "axios";
import styled from "styled-components";
import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import useInput from "./../../hooks/useInput";
import useSelect from "./../../hooks/useSelect";
import { editState, NickMulState, mulBtnState } from "../../states";
import { WHITE_1 } from "../../styles/theme";

export function LoginDetailInfo() {
  const navigate = useNavigate();
  const [info, setInfo] = useRecoilState(editState);
  const [nickMul, setNickMul] = useRecoilState(NickMulState);
  const [onClickActive, setOnClickActive] = useRecoilState(mulBtnState); //중복확인 버튼이 클릭되었는지 여부 확인 state

  const useNickInput = (initialValue: string | undefined) => {
    const [value, setValue] = useState(initialValue);
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
      setOnClickActive(false);
      //이걸 위해서 useInput 살짝 수정해서 붙여옴 허허
      // input값이 바뀔 때마다 중복확인 체크를 다시 해줘야함
    };
    return { value, setValue, onChange };
  };

  const nickname = useNickInput("");
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
  // console.log(JSON.stringify(data));

  const nick = {
    nickname: nickname.value,
  };

  const nickMulCheck = async () => {
    await axios
      .post(`http://13.125.72.138:8080/nickname`, JSON.stringify(nick), {
        headers: {
          "Content-Type": `application/json`,
          JWT: jwt,
        },
      })
      .then((response) => {
        console.log(response);
        if (response.data.code === 200) {
          console.log("중복 X");
          setNickMul(true);
          setOnClickActive(true);
        }
      })
      .catch((err) => {
        console.log(err);
        if (err.response.data.code === 1006) {
          console.log("중복");
          setNickMul(false);
          setOnClickActive(true);
        }
      });
  };

  const onClickSave = () => {
    //저장 버튼 클릭 시 정보 넘겨주기
    console.log(studentId.value);
    if (studentId.value) {
      console.log("if 속!");
      const infoHandler = {
        ...info,
        major: major.value,
        nickname: nickname.value,
        part: part.value,
        studentId: studentId.value,
      };
      setInfo(infoHandler);
      console.log(info);
    }
    const data = {
      nickname: nickname.value,
      major: major.value,
      studentId: studentId.value,
      part: part.value,
    };

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
        navigate("/login/complete");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div style={{ textAlign: "center" }}>
      <Title>추가 정보 입력하기</Title>
      <div>
        <DetailInfo style={{ marginTop: "60px" }}>닉네임</DetailInfo>
        {onClickActive === true ? (
          nickMul === true ? (
            <InputBoxNick
              style={{ border: "1px solid #3774FF" }} //중복 확인 버튼 클릭 후 중복이 아닐 때
              name="nickname"
              placeholder="닉네임 입력"
              {...nickname}
              autoComplete="off"
              spellCheck="false"
            />
          ) : (
            <InputBoxNick
              style={{ border: "1px solid #FF3D3D" }} //중복 확인 버튼 클릭 후 중복일 때
              name="nickname"
              placeholder="닉네임 입력"
              {...nickname}
              autoComplete="off"
              spellCheck="false"
            />
          )
        ) : (
          <InputBoxNick
            style={{ marginBottom: "20px" }}
            name="nickname"
            placeholder="닉네임 입력"
            {...nickname}
            autoComplete="off"
            spellCheck="false"
          />
          //중복 확인 버튼 클릭 안했을 때
        )}
        <MulCheck onClick={nickMulCheck} disabled={nickname.value?.length === 0}>
          중복확인
        </MulCheck>
        {onClickActive === true ? (
          // 중복확인 버튼을 클릭했을 때만 글자 나타나게!
          //버튼 클릭 안한 상태에서는 아무 글자도 나타나지 않는다.
          nickMul === true ? (
            //닉네임 중복확인 후 중복이 아니라면
            <IsMulText style={{ color: "#3774FF" }}>사용할 수 있는 닉네임입니다.</IsMulText>
          ) : (
            //중복이라면
            <IsMulText style={{ color: "#FF3D3D" }}>중복된 닉네임입니다.</IsMulText>
          )
        ) : (
          <></>
        )}
      </div>

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
            onClickActive === true &&
            nickMul === true &&
            nickname.value?.length !== 0 &&
            studentId.value?.length !== 0 &&
            major.value?.length !== 0
              ? false
              : true
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

const MulCheck = styled.button`
  font-weight: 600;
  text-align: center;
  width: 106px;
  color: ${WHITE_1};
  height: 52px;
  border: 1px solid ${WHITE_1};
  border-radius: 8px;
  font-size: 18px;
  margin-left: 10px;
`;

const DetailInfo = styled.div`
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  text-align: left;
  @media (max-width: 767px) {
    margin-left: 0px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    // 테블릿 세로
  }
  @media (min-width: 1024px) and (max-width: 1200px) {
  }
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
  @media (max-width: 767px) {
    width: 350px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    // 테블릿 세로
  }
  @media (min-width: 1024px) and (max-width: 1200px) {
  }
`;

const InputBoxNick = styled(InputBox)`
  width: 494px;
  margin-bottom: 0;
  @media (max-width: 767px) {
    width: 234px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    // 테블릿 세로
  }
  @media (min-width: 1024px) and (max-width: 1200px) {
  }
`;

const IsMulText = styled.div`
  margin-top: 12px;
  font-size: 14px;
  margin-bottom: 20px;
  text-align: left;
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
  @media (max-width: 767px) {
    width: 350px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    // 테블릿 세로
  }
  @media (min-width: 1024px) and (max-width: 1200px) {
  }
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

  @media (max-width: 767px) {
    width: 350px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    // 테블릿 세로
  }
  @media (min-width: 1024px) and (max-width: 1200px) {
  }
`;
