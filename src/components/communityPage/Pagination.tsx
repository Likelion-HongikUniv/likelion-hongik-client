import styled from "styled-components";
import { useSetRecoilState, useRecoilValue, useRecoilState } from "recoil";
import { IPagination } from "../../interfaces/post";
import { paginationState, pageState, curPageIndexState } from "../../states/atoms";
import { WHITE_1 } from "../../styles/theme";

export function Pagination() {
  const pagination = useRecoilValue<IPagination>(paginationState);
  const setPage = useSetRecoilState<number>(pageState);
  const [curPageIndex, setCurPageIndex] = useRecoilState<number>(curPageIndexState);
  const activeButton = {
    background: "#ED7F30",
    border: "none",
  };
  const pageArr = Array.from({ length: pagination?.totalPage }, (v, i) => i + 1);
  const PAGE_MAX = 6;

  const division = (data: number[], size: number) => {
    const arr = [];
    for (let i = 0; i < data.length; i += size) {
      arr.push(data.slice(i, i + size));
    }
    return arr;
  };

  const pageDividedArr = division(pageArr, PAGE_MAX);

  return (
    <PageWrapper>
      {!pagination.isEmpty && curPageIndex !== 0 && (
        <PageBtn
          onClick={() => {
            setCurPageIndex(curPageIndex - 1);
            setPage(curPageIndex * PAGE_MAX);
          }}
        >
          ...
        </PageBtn>
      )}
      {pageDividedArr[curPageIndex]?.map((pageNum: number) => (
        <PageBtn
          key={pageNum}
          type="button"
          style={pageNum === pagination?.currentPage ? activeButton : {}}
          onClick={() => setPage(pageNum)}
        >
          {pageNum}
        </PageBtn>
      ))}

      {!pagination.isEmpty && curPageIndex !== pageDividedArr?.length - 1 && (
        <PageBtn
          onClick={() => {
            setCurPageIndex(curPageIndex + 1);
            setPage((curPageIndex + 1) * PAGE_MAX + 1);
          }}
        >
          ...
        </PageBtn>
      )}
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.4167vw;
`;

const PageBtn = styled.button`
  width: 1.7188vw;
  height: 1.7188vw;
  border: 0.0521vw solid ${WHITE_1};
  border-radius: 0.2083vw;
  color: ${WHITE_1};
  @media all and (max-width: 768px) {
    width: 7.1795vw;
    height: 7.1795vw;
    border-radius: 0.7vw;
  }
`;
