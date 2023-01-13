import styled from "styled-components";
import { WHITE_1 } from "../../styles/theme";
import useInput from "./../../hooks/useInput";

export function LoginDetailInfo() {
  const nickname = useInput("");
  const studentNum = useInput("");
  const major = useInput("");

  return (
    <div>
      <Title>추가 정보 입력하기</Title>
      <DetailInfo style={{ marginTop: "60px" }}>닉네임</DetailInfo>
      <InputBox placeholder="닉네임 입력" {...nickname} />
      <DetailInfo>학번</DetailInfo>
      <InputBox placeholder="학번 입력" {...studentNum} />
      <DetailInfo>학과</DetailInfo>
      <InputBox placeholder="학과 입력 ex. 시각디자인학과" {...major} />
      <DetailInfo>파트</DetailInfo>
      <SelectPart>
        <Options value="" disabled selected>
          파트 선택
        </Options>
        <Options>기획/디자인</Options>
        <Options>프론트엔드</Options>
        <Options>백엔드</Options>
      </SelectPart>
      <div style={{ textAlign: "center" }}>
        <DoneBtn>완료</DoneBtn>
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
  background-color: #333333;
  text-align: center;
  border-radius: 20px;
  color: ${WHITE_1};
  font-weight: 700;
  font-size: 24px;
  line-height: 28.8px;

  :hover {
    background-color: #ed7f30;
  }
`;
