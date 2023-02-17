import styled from "styled-components";
import { SearchBar } from "./SearchBar";
import { ICommunityParam } from "../../interfaces/category";
import { WriteIcon } from "../icons/WriteIcon";
import useMediaQuery from "../../hooks/useMediaQuery";
import { BLACK_1 } from "../../styles/theme";
import { useNavigate } from "react-router-dom";

export function TopBoard(categoryName: ICommunityParam) {
  const isMobile = useMediaQuery("( max-width: 767px )");
  const navigate = useNavigate();

  return (
    <Wrapper>
      <SearchBar categoryName={categoryName.categoryName} />
      <Table>
        <div>
          <span style={{ color: "#ED7F30" }}>•</span>
          <span>최신순</span>
        </div>
        {categoryName.categoryName === "BOARD" ? (
          <button
            onClick={() => {
              navigate("/write");
            }}
          >
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
  }
  @media all and (max-width: 767px) {
    margin-top: 24px;
    div {
      font-size: 16px;
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
    @media all and (max-width: 767px) {
      width: auto;
      height: auto;
      padding: 12px;
      border-radius: 8px;
      img {
        width: 15px;
        height: 15px;
      }
      span {
        font-size: 16px;
        line-height: 19px;
      }
    }
  }
`;
