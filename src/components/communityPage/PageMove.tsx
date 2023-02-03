import styled from "styled-components";
import { IPagination } from "../../interfaces/post";
import { Pagination } from "./Pagination";
import { useRecoilValue, useRecoilState } from "recoil";
import { paginationState, pageState, curPageIndexState } from "../../states/atoms";
import useMediaQuery from "../../hooks/useMediaQuery";
import { useEffect } from "react";

export function PageMove() {
  const pagination = useRecoilValue<IPagination>(paginationState);
  const isMobile = useMediaQuery("maxWidth: 768px");
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
  margin-top: 3.125vw;
  margin-bottom: 17.7083vw;
`;

const MoveBtn = styled.button`
  width: 4.7917vw;
  height: 1.7188vw;
  border: 0.0521vw solid #ffffff;
  border-radius: 0.2083vw;
  color: #ffffff;
  @media all and (max-width: 768px) {
    border: none;
    width: 1.8513vw;
    height: 3.2436vw;
    font-size: 4vw;
  }
`;

const NoneBtn = styled(MoveBtn)`
  width: 4.7917vw;
  height: 1.7188vw;
  border-radius: 0.2083vw;
  border: none;
  @media all and (max-width: 768px) {
    width: 1.8513vw;
    height: 3.2436vw;
  }
`;
