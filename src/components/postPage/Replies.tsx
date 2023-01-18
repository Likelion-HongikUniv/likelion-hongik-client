import styled from "styled-components";
import { Row } from "../elements/Wrapper";
import { BLACK_2 } from "../../styles/theme";
import { Profile } from "../icons/Profile";
import { CommentArrow } from "../icons/CommentArrow";
import { LikeButton } from "./LikeButton";
import { IProfile } from "./Board";
import moment from "moment";
// interface 관리

export interface IReply {
  id?: number;
  author?: IProfile;
  body?: string;
  createdTime?: string;
  likeCount: number;
  deledted?: boolean;
}

export function Replies(reply: IReply) {
  const curDate = reply.createdTime;
  const date = moment(curDate, "YYYYMMDDHHmmss").format("YYYY-MM-DD HH:mm:ss");

  return (
    <>
      <Row>
        <CommentArrow />
        <Wrapper>
          <Profile />
          <TextContainer>
            <>
              <UserId>{reply?.author?.nickname || `AhhyunKim`}</UserId>
              <Date>{date || `2022.11.30`}</Date>
            </>
            {reply?.body ||
              `헤엑 ~!! 고거 참 어려운 질문이군용! 다른 분들 의견 있나요? 헤엑 ~!! 고거 참 어려운 질문이군용! 다른 분들 의견
          있나요? 헤엑 ~!! 고거 참 어려운 질문이군용! 다른 분들 의견 있나요?`}
            <LikeButton likes={reply?.likeCount} />
          </TextContainer>
        </Wrapper>
      </Row>
    </>
  );
}

const Wrapper = styled.div`
  width: 100%;
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
