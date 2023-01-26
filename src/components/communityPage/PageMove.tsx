import styled from "styled-components";
import { IPagination } from "../../interfaces/post";
import { Pagination } from "./Pagination";

export function PageMove(pagination: IPagination) {
  return (
    <Container>
      <MoveBtn>이전 페이지</MoveBtn>
      <Pagination />
      <MoveBtn>다음 페이지</MoveBtn>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 60px;
  margin-bottom: 340px;
`;

const MoveBtn = styled.button`
  width: 92px;
  height: 33px;
  border: 1px solid #ffffff;
  border-radius: 4px;
  color: #ffffff;
`;
