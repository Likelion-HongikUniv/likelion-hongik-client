import styled from "styled-components";
import { IPagination } from "../../interfaces/post";
import { Pagination } from "./Pagination";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { paginationState, pageState } from "../../states/atoms";
import useMediaQuery from "../../hooks/useMediaQuery";

export function  PageMove() {
  const pagination = useRecoilValue<IPagination>(paginationState);
  const isMobile = useMediaQuery("( max-width: 390px )");

  return (
    <>
      <Container>
        {!pagination.isFirst && !pagination.isEmpty ? <MoveBtn>&lt;</MoveBtn> : <NoneBtn />}
        <Pagination />
        {!pagination.isLast && !pagination.isEmpty ? <MoveBtn>&gt;</MoveBtn> : <NoneBtn />}
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

const MobileContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
  margin-top: 60px;
`;

const MoveBtn = styled.button`
  width: 92px;
  height: 33px;
  border: 1px solid #ffffff;
  border-radius: 4px;
  color: #ffffff;
`;

const PrevBtn = styled(MoveBtn)`
  @media (max-width: 390px) {
    width: 198px;
    height: 28px;
  }
`;

const NextBtn = styled(MoveBtn)`
  @media (max-width: 390px) {
    width: 128px;
    height: 28px;
  }
`;

const NoneBtn = styled(MoveBtn)`
  width: 92px;
  height: 33px;
  border-radius: 4px;
  border: none;
  @media (max-width: 390px) {
    width: 128px;
    height: 28px;
  }
`;

const NonePrevBtn = styled(NoneBtn)`
  width: 198px;
  height: 28px;
`;
