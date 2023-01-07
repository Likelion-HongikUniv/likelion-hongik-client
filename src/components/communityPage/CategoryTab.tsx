import React from "react";
import styled from "styled-components";

export function CategoryTab() {
  const activeStyle = {
    borderBottom: "2px solid #FFFFFF",
  };

  return (
    <CategoryList>
      <CategoryItem>공지사항</CategoryItem>
      <CategoryItem style={activeStyle}>Q&A</CategoryItem>
      <CategoryItem>자유게시판</CategoryItem>
    </CategoryList>
  );
}

export default CategoryTab;

const CategoryList = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
`;

const CategoryItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  padding: 20px;
`;
