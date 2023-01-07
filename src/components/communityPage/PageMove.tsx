import React from "react";
import styled from "styled-components";
import { Pagination } from "./Pagination";

export function PageMove() {
  return (
    <Container>
      <button>이전 페이지</button>
      <Pagination />
      <button>다음 페이지</button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  button {
    width: 92px;
    height: 33px;
    border: 1px solid #ffffff;
    border-radius: 4px;
    color: #ffffff;
  }
`;
