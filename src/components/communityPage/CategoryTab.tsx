import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ICategory } from "../../interfaces/category";

export function CategoryTab({ categoryName = "notice" }: ICategory) {
  const activeStyle = {
    borderBottom: "2px solid #FFFFFF",
  };

  return (
    <CategoryList>
      <Link to="/community/notice">
        <CategoryItem style={categoryName === "notice" ? activeStyle : {}}>공지사항</CategoryItem>
      </Link>
      <Link to="/community/qna">
        <CategoryItem style={categoryName === "qna" ? activeStyle : {}}>Q&A</CategoryItem>
      </Link>
      <Link to="/community/free">
        <CategoryItem style={categoryName === "free" ? activeStyle : {}}>자유게시판</CategoryItem>
      </Link>
    </CategoryList>
  );
}

export default CategoryTab;

const CategoryList = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  a {
    text-decoration: none;
    color: white;
  }
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
