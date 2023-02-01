import styled from "styled-components";
import { IPagination } from "../../interfaces/post";
import { Pagination } from "./Pagination";
import { useRecoilValue, useRecoilState } from "recoil";
import { paginationState, pageState, curPageIndexState } from "../../states/atoms";
import { useMediaQuery } from "react-responsive";
import { useEffect } from "react";

export function PageMove() {
  const pagination = useRecoilValue<IPagination>(paginationState);
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [page, setPage] = useRecoilState<number>(pageState);
  const [curPageIndex, setCurPageIndex] = useRecoilState<number>(curPageIndexState);

  const onClickPrev = () => {
    setPage(pagination.currentPage - 1);
    if (page % 6 === 0) {
      console.log("설마2");
      setCurPageIndex(curPageIndex - 1);
    }
  };

  const onClickNext = () => {
    setPage(pagination.currentPage + 1);
    if (page % 6 === 5) {
      console.log(page, "설마1");
      setCurPageIndex(curPageIndex + 1);
    }
  };

  return (
    <>
      <Container>
        {!pagination.isFirst && !pagination.isEmpty ? <MoveBtn onClick={onClickPrev}>&lt;</MoveBtn> : <NoneBtn />}
        <Pagination />
        {!pagination.isLast && !pagination.isEmpty ? <MoveBtn onClick={onClickNext}>&gt;</MoveBtn> : <NoneBtn />}
      </Container>
    </>
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
  @media all and (max-width: 768px) {
    border: none;
    width: 1.8513vw;
    height: 3.2436vw;
    font-size: 4vw;
  }
`;

const NoneBtn = styled(MoveBtn)`
  width: 92px;
  height: 33px;
  border-radius: 4px;
  border: none;
  @media all and (max-width: 768px) {
    width: 1.8513vw;
    height: 3.2436vw;
  }
`;
