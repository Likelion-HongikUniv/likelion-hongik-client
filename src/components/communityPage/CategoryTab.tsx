import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useRecoilState, useRecoilValue } from "recoil";
import { nowTagState, tagListSelector } from "../../states/atoms";
import { ICategory, ITag, ICommunityParam } from "../../interfaces/category";
import { BLACK_1, WHITE_1 } from "../../styles/theme";

export function CategoryTab(categoryName: ICommunityParam) {
  const tagList = useRecoilValue<ICategory[]>(tagListSelector(categoryName.categoryName));
  const [nowTag, setNowTag] = useRecoilState<string>(nowTagState);
  const navigate = useNavigate();
  const activeStyle = {
    borderBottom: `2px solid %{WHITE_1}`,
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
    color: ${WHITE_1};
  }
`;

const CategoryItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 0.9375vw;
  line-height: 1.1458vw;
  padding: 1.0417vw;
  cursor: pointer;

  @media all and (max-width: 768px) {
    font-weight: 500;
    font-size: 3.0769vw;
    line-height: 3.8462vw;
    padding: 3.0769vw;
  }
`;
