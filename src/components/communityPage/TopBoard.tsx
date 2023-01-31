import styled from "styled-components";
import { SearchBar } from "./SearchBar";
import { ICommunityParam } from "../../interfaces/category";
import { WriteIcon } from "../icons/WriteIcon";
import { useMediaQuery } from "react-responsive";

export function TopBoard(categoryName: ICommunityParam) {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  return (
    <Wrapper>
      {categoryName.categoryName === "BOARD" && <SearchBar />}
      <Table>
        <div>
          <span style={{ color: "#ED7F30", fontSize: "4px" }}>•</span>
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
  margin-top: 40px;
  div {
    display: flex;
    gap: 6px;
    align-items: center;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
  }
  button {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 12.5px;
    background: #ed7f30;
    border-radius: 8px;
    img {
      width: 18px;
      height: 18px;
    }
    span {
      font-weight: 600;
      font-size: 20px;
      line-height: 24px;
      text-align: center;
      letter-spacing: -0.32px;
      color: #000000;
    }
    @media all and (max-width: 768) {
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
