import styled from "styled-components";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { IPagination } from "../../interfaces/post";
import { paginationState, pageState } from "../../states/atoms";

export function Pagination() {
  const pagination = useRecoilValue<IPagination>(paginationState);
  const pageArr = Array.from({ length: pagination.totalPage }, (v, i) => i + 1);
  const setPage = useSetRecoilState<number>(pageState);
  const activeButton = {
    background: "#ED7F30",
    border: "none",
  };

  return (
    <PageWrapper>
      {pageArr.map((pageNum: number) => (
        <PageBtn
          key={pageNum}
          type="button"
          style={pageNum === pagination.currentPage ? activeButton : {}}
          onClick={() => setPage(pageNum)}
        >
          {pageNum}
        </PageBtn>
      ))}
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
`;

const PageBtn = styled.button`
  width: 33px;
  height: 33px;
  border: 1px solid #ffffff;
  border-radius: 4px;
  color: #ffffff;
`;
