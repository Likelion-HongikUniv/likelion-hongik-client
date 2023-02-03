import styled from "styled-components";
import { SearchBar } from "./SearchBar";
import { ICommunityParam } from "../../interfaces/category";
import { WriteIcon } from "../icons/WriteIcon";
import useMediaQuery from "../../hooks/useMediaQuery";

export function TopBoard(categoryName: ICommunityParam) {
  const isMobile = useMediaQuery("( max-width: 768px )");

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
  padding-bottom: 0.8333vw;
  border-bottom: 0.0521vw solid rgba(255, 255, 255, 0.4);
  margin-top: 2.0833vw;
  div {
    display: flex;
    gap: 0.3125vw;
    align-items: center;
    font-weight: 600;
    font-size: 0.8333vw;
  }
  button {
    width: 6.1979vw;
    height: 2.7083vw;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 0.651vw;
    background: #ed7f30;
    border-radius: 0.4167vw;
    img {
      width: 0.3vw;
      height: 0.3vw;
    }
    span {
      font-weight: 600;
      font-size: 1.0417vw;
      text-align: center;
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
