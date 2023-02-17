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
            window.scrollTo({
              top: 0,
            });
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
          onClick={() => {
            setPage(pageNum);
            window.scrollTo({
              top: 0,
            });
          }}
        >
          {pageNum}
        </PageBtn>
      ))}

      {!pagination.isEmpty && curPageIndex !== pageDividedArr?.length - 1 && (
        <PageBtn
          onClick={() => {
            setCurPageIndex(curPageIndex + 1);
            setPage((curPageIndex + 1) * PAGE_MAX + 1);
            window.scrollTo({
              top: 0,
            });
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
  gap: 8px;
`;

const PageBtn = styled.button`
  width: 33px;
  height: 33px;
  border: 1px solid ${WHITE_1};
  border-radius: 4px;
  color: ${WHITE_1};
  @media all and (max-width: 767px) {
    width: 28px;
    height: 28px;
    border-radius: 3px;
  }
`;
