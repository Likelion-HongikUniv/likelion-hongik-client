import styled from "styled-components";
import { BLACK_2 } from "../../styles/theme";
import { WHITE_1 } from "../../styles/theme";
import { Profile } from "../icons/Profile";
import { HeartUnfilled } from "../icons/HeartUnfilled";

export function Replies() {
  return (
    <>
      <Wrapper>
        <Profile />
        <TextContainer>
          <>
            <UserId>AhhyunKim</UserId>
            <Date>2022.11.30</Date>
          </>
          헤엑 ~!! 고거 참 어려운 질문이군용! 다른 분들 의견 있나요? 헤엑 ~!! 고거 참 어려운 질문이군용! 다른 분들 의견
          있나요? 헤엑 ~!! 고거 참 어려운 질문이군용! 다른 분들 의견 있나요?
          <br />
          <HeartUnfilled />
        </TextContainer>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  width: 90%;
  background-color: ${BLACK_2};
  border-radius: 12px;
  display: flex;
  align-items: flex-start;
  padding: 20px;
  gap: 10px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-weight: 400;
  font-size: 16px;
  line-height: 23px;
  /* or 144% */

  letter-spacing: -0.32px;

  color: #ffffffb8;
`;

const UserId = styled.div`
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: -0.32px;
`;

const Date = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: -0.32px;
`;

const HeartButton = styled.button`
  font-size: 20px;
  color: white;
`;
