import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { useRecoilState, useRecoilValue } from "recoil";
import { tagListState, nowTagState, tagListSelector } from "../../states/atoms";
import { ICategory, ITag, ICommunityParam } from "../../interfaces/category";

export function CategoryTab(categoryName: ICommunityParam) {
  const tagList = useRecoilValue<ICategory[]>(tagListSelector(categoryName.categoryName));
  const [nowTag, setNowTag] = useRecoilState<string>(nowTagState);
  const navigate = useNavigate();
  const activeStyle = {
    borderBottom: "2px solid #FFFFFF",
  };

  const onClickTagHandler = (tag: ITag) => {
    setNowTag(tag.key);
    navigate(`/community/${categoryName.categoryName}`);
  };

  return (
    <CategoryList>
      {tagList[0]?.tags?.map((tag: ITag) => (
        <CategoryItem
          key={tag.key}
          style={tag.key === nowTag ? activeStyle : {}}
          onClick={() => onClickTagHandler(tag)}
        >
          {tag.text}
        </CategoryItem>
      ))}
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
  cursor: pointer;
`;
