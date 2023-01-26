import styled from "styled-components";
import { IPagination } from "../../interfaces/post";
import { Pagination } from "./Pagination";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { paginationState, pageState } from "../../states/atoms";

export function PageMove() {
  const pagination = useRecoilValue<IPagination>(paginationState);

  const setPage = useSetRecoilState<number>(pageState);

  return (
    <Container>
      {!pagination.isFirst && !pagination.isEmpty ? (
        <MoveBtn onClick={() => setPage(pagination.currentPage - 1)}>이전 페이지</MoveBtn>
      ) : (
        <NoneBtn />
      )}
      <Pagination />
      {!pagination.isLast && !pagination.isEmpty ? (
        <MoveBtn onClick={() => setPage(pagination.currentPage + 1)}>다음 페이지</MoveBtn>
      ) : (
        <NoneBtn />
      )}
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

const NoneBtn = styled.div`
  width: 92px;
  height: 33px;
  border-radius: 4px;
`;
