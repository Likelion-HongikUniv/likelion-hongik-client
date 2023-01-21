import styled from "styled-components";
import { Row, Column } from "../elements/Wrapper";
import { HeartButton } from "./HeartButton";
import { ViewerUi } from "./ViewerUi";
import moment from "moment";
import { IBoard } from "../../interfaces/comments";

export function Board(boardData: any) {
  // const { data: comments, isLoading, isError, error } = useQuery<IComment[], Error>("comments", getComments);
  const curDate = boardData.createdTime;
  const date = moment(curDate, "YYYYMMDDHHmmss").format("YYYY-MM-DD HH:mm:ss");

  return (
    <Column gap="24px">
      <Title>{boardData.title || "게시글 제목"}</Title>
      <Row gap="1rem" alignItems="center">
        {boardData.author.nickname}
        <Date>{date || "2022.11.30"}</Date>
        {boardData.author.isAuthor ? "수정하기" : "로그아웃 상태"}
      </Row>
      <Hairline />
      <Column lineHeight="1.25rem">
        <ViewerUi body={boardData?.body || "2123"}></ViewerUi>
      </Column>
      <HeartButton likes={boardData.likeCount} />
      <Hairline />
    </Column>
  );
}

const Title = styled.h1`
  font-family: "SUIT";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 34px;
  /* or 142% */

  letter-spacing: -0.32px;
`;

const Date = styled.p`
  color: #d7d7d7;
  font-weight: 400;
`;

const Hairline = styled.div`
  border: 1px solid rgb(255, 255, 255, 0.3);
`;
