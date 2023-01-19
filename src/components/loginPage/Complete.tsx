import styled from "styled-components";
import { WHITE_1 } from "../../styles/theme";

import { LionIcon } from "./../icons/LionIcon";

export function Complete() {
  return (
    <div>
      <Title>회원가입 완료!</Title>
      <SmallText>
        이제 커뮤니티 게시판을 이용할 수 있습니다.
        <br />
        확인 버튼을 누르면 로그인 페이지로 돌아갑니다.
      </SmallText>
      <LionIcon />
      <div>
        <OkBtn>로그인</OkBtn>
      </div>
    </div>
  );
}

const Title = styled.div`
  font-weight: 800;
  font-size: 40px;
  line-height: 48px;
  padding-top: 90px;
`;

const SmallText = styled.div`
  margin-top: 20px;
  color: #dfdfdf;
  font-weight: 600;
  line-height: 26px;
  font-size: 20px;
  margin-bottom: 74px;
`;

const OkBtn = styled.button`
  background-color: #333333;
  width: 400px;
  height: 80px;
  border-radius: 20px;
  font-weight: 700;
  font-size: 24px;
  line-height: 28.8px;
  text-align: center;
  margin-top: 93px;
  color: ${WHITE_1};
  :hover {
    background-color: #ed7f30;
  }
`;
