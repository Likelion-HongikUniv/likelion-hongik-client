import { useEffect, useState } from "react";
import styled, { CSSProperties } from "styled-components";
import { Column } from "../elements/Wrapper";

interface TabBarProps {
  clickedMainCategory?: "BOARD" | "HOMEWORK" | "PROJECT";
  setClickedMainCategory: Function;
  clickedSubCategory: string;
  setClickedSubCategory: Function;
  style?: CSSProperties;
}

interface ButtonProps {
  isClicked?: boolean;
}

export function TabBar({
  clickedMainCategory,
  setClickedMainCategory,
  clickedSubCategory,
  setClickedSubCategory,
  style,
}: TabBarProps) {
  const [subCategoryList, setSubCategoryList] = useState(
    clickedMainCategory === "BOARD"
      ? [
          { key: "NOTICE", text: "공지사항" },
          { key: "QNA", text: "Q&A" },
          { key: "FREEBOARD", text: "자유게시판" },
        ]
      : clickedMainCategory === "HOMEWORK"
      ? [
          { key: "FRONTEND", text: "프론트" },
          { key: "BACKEND", text: "백엔드" },
          { key: "DESIGN", text: "기획·디자인" },
        ]
      : [
          { key: "FRONTEND", text: "프론트" },
          { key: "BACKEND", text: "백엔드" },
          { key: "DESIGN", text: "기획·디자인" },
          { key: "MEETING", text: "프로젝트 회의" },
        ],
  );

  useEffect(() => {
    if (clickedMainCategory === "BOARD") {
      setSubCategoryList([
        { key: "NOTICE", text: "공지사항" },
        { key: "QNA", text: "Q&A" },
        { key: "FREEBOARD", text: "자유게시판" },
      ]);
    } else if (clickedMainCategory === "HOMEWORK") {
      setSubCategoryList([
        { key: "FRONTEND", text: "프론트" },
        { key: "BACKEND", text: "백엔드" },
        { key: "DESIGN", text: "기획·디자인" },
      ]);
    } else {
      setSubCategoryList([
        { key: "FRONTEND", text: "프론트" },
        { key: "BACKEND", text: "백엔드" },
        { key: "DESIGN", text: "기획·디자인" },
        { key: "MEETING", text: "프로젝트 회의" },
      ]);
    }
  }, [clickedMainCategory]);

  const onClickMainCategory = (e: any) => {
    const category = e.target.name;
    setClickedMainCategory(category);
  };

  const onClickSubCategory = (e: any) => {
    const category = e.target.name;

    setClickedSubCategory(category);
  };

  return (
    <Column gap="10px">
      <MainCategoryWrapper style={style}>
        <MainCategoryButton onClick={onClickMainCategory} isClicked={clickedMainCategory === "BOARD"} name="BOARD">
          게시판
        </MainCategoryButton>
        <MainCategoryButton
          onClick={onClickMainCategory}
          isClicked={clickedMainCategory === "HOMEWORK"}
          name="HOMEWORK"
        >
          과제관리
        </MainCategoryButton>
        <MainCategoryButton onClick={onClickMainCategory} isClicked={clickedMainCategory === "PROJECT"} name="PROJECT">
          프로젝트
        </MainCategoryButton>
      </MainCategoryWrapper>
      <SubCategoryWrapper>
        {subCategoryList.map((subCategory) => {
          return (
            <SubCategoryButton
              key={subCategory.key}
              isClicked={clickedSubCategory === subCategory.key}
              onClick={onClickSubCategory}
              name={subCategory.key}
            >
              {subCategory.text}
            </SubCategoryButton>
          );
        })}
      </SubCategoryWrapper>
    </Column>
  );
}

const MainCategoryWrapper = styled.div`
  width: 80vw;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  display: flex;
  align-items: center;
  margin-top: 20px;
  @media (max-width: 391px) {
    font-size: 16px;
  }
  @media (min-width: 391px) and (max-width: 767px) {
    //모바일
    font-size: 16px;
  }

  @media (width: 768px) {
    font-size: 16px;
  }
`;

const MainCategoryButton = styled.button<ButtonProps>`
  padding: 20px;
  color: white;
  font-weight: ${(props) => (props.isClicked ? 700 : 500)};
  font-size: 18px;
  line-height: 22px;
  border-bottom: ${(props) => (props.isClicked ? "2px solid #FFFFFF" : "")};

  @media (max-width: 391px) {
    font-size: 16px;
  }
  @media (min-width: 391px) and (max-width: 767px) {
    //모바일
    font-size: 16px;
  }

  @media (width: 768px) {
    font-size: 16px;
  }
`;

const SubCategoryWrapper = styled.div`
  width: 80vw;
  display: flex;
  align-items: center;
  gap: 7px;
`;

const SubCategoryButton = styled.button<ButtonProps>`
  width: auto;
  height: 62px;
  padding: 20px;
  color: white;
  font-weight: ${(props) => (props.isClicked ? 700 : 500)};
  font-size: 18px;
  line-height: 22px;
  background-color: ${(props) => (props.isClicked ? "#333333" : "")};
  @media (max-width: 391px) {
    font-size: 16px;
  }
  @media (min-width: 391px) and (max-width: 767px) {
    //모바일
    font-size: 16px;
  }

  @media (width: 768px) {
    font-size: 16px;
  }
`;
