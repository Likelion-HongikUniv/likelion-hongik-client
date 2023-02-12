import { useSetRecoilState, useRecoilValue, useRecoilState } from "recoil";
import styled from "styled-components";
import { ICategory, ICommunityParam, ITag } from "../../interfaces/category";
import { selectModalState, tagListState, nowTagState } from "../../states/atoms";
import { MenuClose } from "../icons/MenuClose";
import { useNavigate } from "react-router-dom";

export function SelectModal(categoryName: ICommunityParam) {
  const navigate = useNavigate();
  const setIsModal = useSetRecoilState(selectModalState);
  const tagList = useRecoilValue<ICategory[]>(tagListState);
  const [nowTag, setNowTag] = useRecoilState<ITag>(nowTagState);
  const activeStyle = {
    color: "#ED7F30",
  };

  const onTagClickHandler = (category: string, tag: ITag) => {
    setNowTag({
      key: tag.key,
      text: tag.text,
    });
    setIsModal(false);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    navigate(`/community/${category}`);
  };

  return (
    <ModalContainer>
      <CloseBtn onClick={() => setIsModal(false)}>
        <MenuClose />
      </CloseBtn>
      <TagWrapper>
        {tagList.map((category: ICategory) => (
          <CategoryBox key={category.key}>
            <span>{category.text}</span>
            <div>
              {category.tags?.map((tag: ITag) => (
                <span
                  key={tag.key}
                  style={category.key === categoryName.categoryName && tag.key === nowTag.key ? activeStyle : {}}
                  onClick={() => onTagClickHandler(category.key, tag)}
                >
                  {tag.text}
                </span>
              ))}
            </div>
          </CategoryBox>
        ))}
      </TagWrapper>
    </ModalContainer>
  );
}

const ModalContainer = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100vw;
  height: 85.1vh;
  background: #333333;
  border-radius: 12px 12px 0px 0px;
  padding: 3.9vh;
`;

const CloseBtn = styled.button`
  align-self: flex-end;
`;

const TagWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 3.9vh;
`;

const CategoryBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 3.8vh;
  padding-bottom: 3.9vh;
  border-bottom: 1px solid #6d6d6d;
  span {
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;
  }
  div {
    display: flex;
    flex-direction: column;
    gap: 2vh;
    span {
      font-weight: 500;
      font-size: 18px;
      line-height: 22px;
      letter-spacing: -0.32px;
      cursor: pointer;
      &:hover {
        color: #ed7f30;
      }
    }
  }
  &:last-child {
    border: none;
  }
`;
