import { useState } from "react";
import styled, { CSSProperties } from "styled-components";

interface TabBarProps {
  // clickedCategory?: string;
  // isClicked?: boolean;
  clickedCategory: string;
  setClickedCategory: Function;
  style?: CSSProperties;
}

interface ButtonProps {
  isClicked?: boolean;
}

export function TabBar({ clickedCategory, setClickedCategory, style }: TabBarProps) {
  // const [clickedCategory, setClickedCategory] = useState("");
  const onClick = (e: any) => {
    const category = e.target.name;
    setClickedCategory(category);
  };
  return (
    <Wrapper style={style}>
      <CategoryButton onClick={onClick} isClicked={clickedCategory === "공지사항"} name="공지사항">
        공지사항
      </CategoryButton>
      <CategoryButton onClick={onClick} isClicked={clickedCategory === "Q&A"} name="Q&A">
        Q&A
      </CategoryButton>
      <CategoryButton onClick={onClick} isClicked={clickedCategory === "자유게시판"} name="자유게시판">
        자유게시판
      </CategoryButton>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 80vw;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  display: flex;
  align-items: center;
`;

const CategoryButton = styled.button<ButtonProps>`
  padding: 20px;
  color: white;
  font-weight: ${(props) => (props.isClicked ? 700 : 500)};
  font-size: 18px;
  line-height: 22px;
  border-bottom: ${(props) => (props.isClicked ? "2px solid #FFFFFF" : "")};
`;
