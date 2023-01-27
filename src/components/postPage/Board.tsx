import styled from "styled-components";
import { Row, Column } from "../elements/Wrapper";
import { HeartButton } from "./HeartButton";
import { ViewerUi } from "./ViewerUi";
import moment from "moment";
import { IBoard } from "../../interfaces/comments";
import useMediaQuery from "../../hooks/useMediaQuery";
import { MoreButton } from "../icons/MoreButton";

export function Board(boardData: IBoard) {
  const isPC = useMediaQuery("(min-width: 992px)");
  const curDate = boardData.createdTime;
  const date = moment(curDate, "YYYYMMDDHHmmss").format("YYYY.MM.DD");

  return (
    <>
      {isPC ? (
        <Column gap="24px">
          <Title>{boardData.title || "게시글 제목"}</Title>
          <SubTextDiv>
            <Row gap="1rem" alignItems="center">
              {boardData.author?.nickname}
              <Date>{date || "2022.11.30"}</Date>
            </Row>
            <MoreButton />
          </SubTextDiv>
          <Hairline />
          <Column lineHeight="1.25rem">
            <ViewerUi body={boardData.body} />
          </Column>
          <HeartButton likes={boardData.likeCount} />
          <Hairline />
        </Column>
      ) : (
        <Column gap="12px">
          <Title>{boardData.title || "게시글 제목"}</Title>
          <SubTextDiv>
            <AuthorDiv>
              <div className="author">{boardData.author?.nickname}</div>
              <Date>{date || "2022.11.30"}</Date>
            </AuthorDiv>
            <MoreButton />
          </SubTextDiv>
          <Hairline />
          <Column lineHeight="1.25rem">
            <ViewerUi body={boardData.body} />
          </Column>
          <HeartButton likes={boardData.likeCount} />
          <Hairline />
        </Column>
      )}
    </>
  );
}

const Title = styled.h1`
  font-family: "SUIT";
  font-style: normal;
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 34px;
  /* or 142% */

  letter-spacing: -0.32px;
`;

const AuthorDiv = styled.div`
  color: #d7d7d7;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 14px;
  gap: 0.5em;
  & > .author {
    font-weight: 600;
  }
`;

const SubTextDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Date = styled.p`
  color: #d7d7d7;
  font-weight: 400;
`;

const Hairline = styled.div`
  border: 1px solid rgb(255, 255, 255, 0.3);
`;
