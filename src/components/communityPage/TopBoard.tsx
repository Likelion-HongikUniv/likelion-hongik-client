import styled from "styled-components";
import { SearchBar } from "./SearchBar";
import { ICommunityParam } from "../../interfaces/category";
import { WriteIcon } from "../icons/WriteIcon";
import useMediaQuery from "../../hooks/useMediaQuery";
import { BLACK_1 } from "../../styles/theme";

export function TopBoard(categoryName: ICommunityParam) {
  const isMobile = useMediaQuery("( max-width: 768px )");

  return (
    <Wrapper>
      <SearchBar />
      <Table>
        <div>
          <span style={{ color: "#ED7F30" }}>•</span>
          <span>최신순</span>
        </div>
        {categoryName.categoryName === "BOARD" ? (
          <button>
            <WriteIcon />
            {!isMobile && <span>글쓰기</span>}
          </button>
        ) : (
          <button>
            <span>과제 업로드</span>
          </button>
        )}
      </Table>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Table = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-bottom: 16px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  margin-top: 19px;
  div {
    display: flex;
    gap: 6px;
    align-items: center;
    font-weight: 600;
    font-size: 16px;
  }
  @media all and (max-width: 768px) {
    margin-top: 6.1538vw;
    div {
      font-size: 4.1026vw;
    }
  }
  button {
    display: flex;
    justify-content: space-evenly;
    background: #ed7f30;
    width: 119px;
    height: 52px;
    align-items: center;
    padding: 12px;
    border-radius: 8px;
    svg {
      width: 18px;
      height: 18px;
    }
    span {
      font-weight: 600;
      font-size: 20px;
      line-height: 24px;
      text-align: center;
      letter-spacing: -0.32px;
      color: ${BLACK_1};
    }
    @media all and (max-width: 768px) {
      width: auto;
      height: auto;
      padding: 3.2051vw;
      border-radius: 2.0513vw;
      img {
        width: 3.8462vw;
        height: 3.8462vw;
      }
      span {
        font-size: 4.1026vw;
        line-height: 4.8718vw;
        font-weight: 600;
      }
    }
  }
`;
