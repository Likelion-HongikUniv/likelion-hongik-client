import React from "react";
import styled from "styled-components";

export function Pagination() {
  const activeButton = {
    background: "#ED7F30",
    border: "none",
  };

  return (
    <PageWrapper>
      <button type="button" style={activeButton}>
        1
      </button>
      <button type="button">2</button>
      <button type="button">3</button>
      <button type="button">4</button>
      <button type="button">5</button>
      <button type="button">...</button>
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  button {
    width: 33px;
    height: 33px;
    border: 1px solid #ffffff;
    border-radius: 4px;
    color: #ffffff;
  }
`;
