import styled from "styled-components";
import { IPagination } from "../../interfaces/post";
import { Pagination } from "./Pagination";
import { useRecoilValue, useRecoilState } from "recoil";
import { paginationState, pageState, curPageIndexState } from "../../states/atoms";
import { WHITE_1 } from "../../styles/theme";

export function PageMove() {
  const pagination = useRecoilValue<IPagination>(paginationState);
  const [page, setPage] = useRecoilState<number>(pageState);
  const [curPageIndex, setCurPageIndex] = useRecoilState<number>(curPageIndexState);
  const PAGE_MAX = 6;

  const onClickPrev = () => {
    setPage(pagination.currentPage - 1);
    if (pagination.currentPage % PAGE_MAX === 1) {
      setCurPageIndex(curPageIndex - 1);
    }
    window.scrollTo({
      top: 0,
    });
  };

  const onClickNext = () => {
    setPage(pagination.currentPage + 1);
    if (pagination.currentPage % PAGE_MAX === 0) {
      setCurPageIndex(curPageIndex + 1);
    }
    window.scrollTo({
      top: 0,
    });
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
  @media (min-width: 768px) and (max-width: 1023px) {
    margin-bottom: 193px;
  }
`;

const MoveBtn = styled.button`
  width: 92px;
  height: 33px;
  border: 1px solid ${WHITE_1};
  border-radius: 4px;
  color: ${WHITE_1};
  @media all and (max-width: 1023px) {
    border: none;
    width: 7px;
    height: 13px;
    font-size: 16px;
  }
`;

const NoneBtn = styled(MoveBtn)`
  width: 92px;
  height: 33px;
  border-radius: 4px;
  border: none;
  @media all and (max-width: 1023px) {
    width: 7px;
    height: 13px;
  }
`;
