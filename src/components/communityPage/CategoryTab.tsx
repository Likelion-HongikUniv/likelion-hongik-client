import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useRecoilState, useRecoilValue } from "recoil";
import { nowTagState, tagListSelector } from "../../states/atoms";
import { ICategory, ITag, ICommunityParam } from "../../interfaces/category";
import { WHITE_1 } from "../../styles/theme";

export function CategoryTab(categoryName: ICommunityParam) {
  const tagList = useRecoilValue<ICategory[]>(tagListSelector(categoryName.categoryName));
  const [nowTag, setNowTag] = useRecoilState<ITag>(nowTagState);
  const navigate = useNavigate();
  const activeStyle = {
    borderBottom: `2px solid #fff`,
  };

  const onClickTagHandler = (tag: ITag) => {
    setNowTag({ key: tag.key, text: tag.text });
    navigate(`/community/${categoryName.categoryName}`);
  };

  return (
    <CategoryList>
      {tagList[0]?.tags?.map((tag: ITag) => (
        <CategoryItem
          key={tag.key}
          style={tag.key === nowTag.key ? activeStyle : {}}
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
    color: ${WHITE_1};
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
  padding-top: 0;
  cursor: pointer;

  @media all and (max-width: 767px) {
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    padding: 12px;
  }
`;
