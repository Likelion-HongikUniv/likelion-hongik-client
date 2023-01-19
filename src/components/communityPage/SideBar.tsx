import React from "react";
import styled from "styled-components";
import { useRecoilState, useRecoilValue } from "recoil";
import { nowTagState, tagListState } from "../../states/atoms";
import { useNavigate } from "react-router-dom";
import { ITag, ICategory, ICommunityParam } from "../../interfaces/category";

export function SideBar(categoryName: ICommunityParam) {
  const [nowTag, setNowTag] = useRecoilState<string>(nowTagState);
  const tagList = useRecoilValue<ICategory[]>(tagListState);
  const navigate = useNavigate();
  const activeStyle = {
    fontWeight: "700",
    color: "#ED7F30",
  };
  const onTagClickHandler = (category: string, tag: string) => {
    setNowTag(tag);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    navigate(`/community/${category}`);
  };
  return (
    <SideBarWrapper>
      <ProfileBoard>
        <ProfileImg>
          <img alt="profile-img" />
        </ProfileImg>
        <ProfileDesc>
          <span>김아현</span>
          <div>컴퓨터공학과</div>
        </ProfileDesc>
      </ProfileBoard>
      {tagList.map((category: ICategory) => (
        <TagWrapper key={category.key}>
          <span>{category.text}</span>
          <div>
            {category.tags?.map((tag: ITag) => (
              <span
                key={tag.key}
                onClick={() => onTagClickHandler(category.key, tag.key)}
                style={category.key === categoryName.categoryName && tag.key === nowTag ? activeStyle : {}}
              >
                {tag.text}
              </span>
            ))}
          </div>
        </TagWrapper>
      ))}
    </SideBarWrapper>
  );
}

const SideBarWrapper = styled.div`
  position: fixed;
  display: flex;
  width: 190px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  left: 17.7083vw;
`;

const ProfileBoard = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
`;

const ProfileImg = styled.div`
  width: 60px;
  height: 60px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 100%;
  }
`;

const ProfileDesc = styled.div`
  font-size: 14px;
  line-height: 17px;
  letter-spacing: -0.32px;
  color: #b9b9b9;
  span {
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    color: #fff;
  }
`;

const TagWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-bottom: 1px solid #6d6d6d;
  padding: 20px 0 0 0;
  span {
    font-size: 12px;
    line-height: 15px;
    color: #979797;
  }

  div {
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    gap: 16px;
    padding: 20px 11px;
    font-weight: 500;
    span {
      font-size: 16px;
      line-height: 19px;
      letter-spacing: -0.32px;
      color: #ffffff;
      cursor: pointer;
      &:hover {
        color: #ed7f30;
      }
    }
  }

  &:nth-child(4) {
    border: none;
  }
`;
