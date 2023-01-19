import React from "react";
import styled from "styled-components";
import { SearchBar } from "./SearchBar";
import { ICommunityParam } from "../../interfaces/category";
import { WriteIcon } from "../icons/WriteIcon";

export function TopBoard(categoryName: ICommunityParam) {
  return (
    <Wrapper>
      {categoryName.categoryName === "post" && <SearchBar />}
      <Table>
        <div>
          <span style={{ color: "#ED7F30", fontSize: "4px" }}>•</span>
          <span>최신순</span>
        </div>
        {categoryName.categoryName === "post" ? (
          <button>
            <WriteIcon />
            <span>글쓰기</span>
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
  gap: 20px;
`;

const Table = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-bottom: 16px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  div {
    display: flex;
    gap: 6px;
    align-items: center;
  }
  button {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 119px;
    height: 52px;
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
  }
`;
