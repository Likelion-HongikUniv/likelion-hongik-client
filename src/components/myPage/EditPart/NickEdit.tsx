import axios from "axios";
import styled from "styled-components";
import { useRecoilValue, useRecoilState } from "recoil";
import { editState, NickMulState, mulBtnState } from "../../../states";
import { BLACK_1, WHITE_1 } from "./../../../styles/theme";

export function NickEdit(props: any) {
  const token = localStorage.getItem("token");
  const info = useRecoilValue(editState);
  const [nickMul, setNickMul] = useRecoilState(NickMulState);
  const [onClickActive, setOnClickActive] = useRecoilState(mulBtnState); //중복확인 버튼이 클릭되었는지 여부 확인 state

  const nick = {
    nickname: props.value,
  };

  const checkNickname = async () => {
    console.log(props.value);
    await axios
      .post(`http://13.125.72.138:8080/nickname`, JSON.stringify(nick), {
        headers: {
          "Content-Type": `application/json`,
          JWT: token,
        },
      })

      .then((response) => {
        console.log(response);
        if (response.data.code === 200) {
          console.log("사용가능 닉네임");
          setNickMul(true);
          setOnClickActive(true);
        }
      })

      .catch((err) => {
        console.log(err);
        if (err.response.data.code === 1006) {
          console.log("중복되는 닉네임");
          setNickMul(false);
          setOnClickActive(true);
        }
      });
  };

  return (
    <>
      <NicknamePart>
        <NickTitle>닉네임 변경</NickTitle>
        <div>
          {onClickActive === true ? (
            nickMul === true ? (
              <NickInput
                style={{ border: "1px solid #3774FF" }} //중복 확인 버튼 클릭 후 중복이 아닐 때
                name="nickname"
                placeholder={info.nickname}
                {...props}
                autoComplete="off"
                spellCheck="false"
              />
            ) : (
              <NickInput
                style={{ border: "1px solid #FF3D3D" }} //중복 확인 버튼 클릭 후 중복일 때
                name="nickname"
                placeholder={info.nickname}
                {...props}
                autoComplete="off"
                spellCheck="false"
              />
            )
          ) : (
            <NickInput name="nickname" placeholder={info.nickname} {...props} autoComplete="off" spellCheck="false" />
            //중복 확인 버튼 클릭 안했을 때
          )}
          <MulCheck onClick={checkNickname} disabled={props.value.length === 0 || props.value === info.nickname}>
            중복확인
          </MulCheck>
        </div>
      </NicknamePart>
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
    </>
  );
}

const NicknamePart = styled.div`
  display: flex;
  margin-top: 47px;
  align-items: center;
  @media (max-width: 768px) {
    //모바일
    display: inline-block;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    display: flex;
  }
`;

const NickTitle = styled.div`
  font-weight: 500;
  font-size: 20px;
  line-height: 24.96px;

  @media (max-width: 768px) {
    //모바일
    font-size: 16px;
    line-height: 19.2px;
    text-align: left;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: 20px;
  }
`;

const NickInput = styled.input`
  height: 52px;
  width: 315px;
  background-color: #33333399;
  border: none;
  border-radius: 8px;
  margin-left: 25px;
  margin-right: 20px;
  color: ${WHITE_1};
  font-size: 18px;
  font-weight: 500;
  line-height: 22.46px;
  letter-spacing: -0.32px;
  padding: 15px 16px;
  opacity: 0.9;

  @media (max-width: 768px) {
    //모바일
    width: 70vw;
    height: 48px;
    margin-left: 0;
    margin-top: 12px;
    margin-right: 15px;
    font-size: 16px;
    line-height: 19.2px;
    background-color: #222222;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    margin-left: 25px;
    width: 50vw;
  }
`;

const MulCheck = styled.button`
  background-color: ${BLACK_1};
  color: ${WHITE_1};
  border: 1px solid ${WHITE_1};
  font-size: 18px;
  line-height: 21.78px;
  text-align: center;
  border-radius: 8px;
  width: 96px;
  height: 52px;
  font-weight: 600;

  @media (max-width: 600px) {
    width: 15vw;
    margin-top: 12px;
    font-weight: 500;
    font-size: 12px;
    height: 48px;
  }

  @media (min-width: 600px) and (max-width: 767px) {
    width: 12vw;
    margin-top: 12px;
    font-weight: 500;
    font-size: 16px;
    height: 48px;
  }
`;

const IsMulText = styled.div`
  margin-top: 12px;
  font-size: 14px;

  @media (min-width: 767px) {
    padding-left: 120px;
  }
`;
