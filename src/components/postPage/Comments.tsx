import styled from "styled-components";
import { Row, Column } from "../elements/Wrapper";
import { Profile } from "../icons/Profile";
import { HeartUnfilled } from "../icons/HeartUnfilled";
import { IComment } from "../../interfaces/comment";

export function Comments({ key, id, body, created }: IComment) {
  return (
    <>
      <Row>
        <Profile />
        <Column>
          <UserId>AhhyunKim</UserId>
          <Date>{created}</Date>
          <Date>2022.11.30</Date>
          {/* {body} */}
          헤엑 ~!! 고거 참 어려운 질문이군용! 다른 분들 의견 있나요? 헤엑 ~!! 고거 참 어려운 질문이군용! 다른 분들 의견
          있나요? 헤엑 ~!! 고거 참 어려운 질문이군용! 다른 분들 의견 있나요?
          <br />
          <HeartUnfilled />
          <ReplyButton>댓글 달기</ReplyButton>
        </Column>
      </Row>
    </>
  );
}

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

const ReplyButton = styled.button`
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
`;
