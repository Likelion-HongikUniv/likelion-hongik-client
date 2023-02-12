import styled from "styled-components";
import { useRecoilState, useRecoilValue } from "recoil";
import { nowTagState, tagListState } from "../../states/atoms";
import { useNavigate } from "react-router-dom";
import { ITag, ICategory, ICommunityParam } from "../../interfaces/category";
import useMediaQuery from "../../hooks/useMediaQuery";
import { WHITE_1 } from "../../styles/theme";
import { profileImgState } from "../../states";
import { editState } from "../../states/index";
import emoji_lion from "./../images/emoji_lion_24x24.png";

export function SideBar(categoryName: ICommunityParam) {
  const profileImg = useRecoilValue(profileImgState);
  const info = useRecoilValue(editState);
  const isMobile = useMediaQuery("( max-width: 768px )");
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

  const onChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const category = event.target.value;
    if (category === "BOARD") {
      setNowTag("NOTICE");
    } else if (category === "HOMEWORK") {
      setNowTag("FRONTEND");
    } else {
      setNowTag("FRONTEND");
    }
    navigate(`/community/${category}`);
  };
  return (
    <SideBarWrapper>
      <div>
        {isMobile && categoryName.categoryName === "PROJECT" ? (
          ""
        ) : (
          <ProfileBoard>
            <ProfileImg>
              <img alt="profile-img" src={profileImg || emoji_lion} />
            </ProfileImg>
            <ProfileDesc>
              <span>{info.nickname}</span>
              <div>{info.major}</div>
            </ProfileDesc>
          </ProfileBoard>
        )}
        {isMobile ? (
          <SelectBox onChange={onChangeHandler}>
            {tagList.map((category: ICategory) => (
              <Option value={category.key} key={category.key}>
                {category.text}
              </Option>
            ))}
          </SelectBox>
        ) : (
          tagList.map((category: ICategory) => (
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
          ))
        )}
      </div>
    </SideBarWrapper>
  );
}

const SideBarWrapper = styled.div`
  display: flex;
  width: 190px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  @media all and (max-width: 768px) {
    width: 100%;
    display: flex;
    position: static;
    flex-direction: row;
  }
`;

const ProfileBoard = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
  @media all and (max-width: 768px) {
    width: 100%;
    gap: 3.0769vw;
    margin-bottom: 10.2564vw;
  }
`;

const ProfileImg = styled.div`
  img {
    width: 60px;
    height: 60px;
    object-fit: cover;
    border-radius: 100%;
  }
  @media all and (max-width: 768px) {
    img {
      width: 15.3846vw;
      height: 15.3846vw;
    }
  }
`;

const ProfileDesc = styled.div`
  color: #b9b9b9;
  font-size: 14px;

  span {
    font-weight: 700;
    font-size: 18px;
    color: ${WHITE_1};
  }
  @media all and (max-width: 768px) {
    font-size: 3.5897vw;
    span {
      font-size: 4.6154vw;
    }
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
      color: ${WHITE_1};
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

const SelectBox = styled.select`
  padding: 3.0769vw;
  border: none;
  background-color: transparent;
  font-weight: 700;
  font-size: 3.5897vw;
  color: ${WHITE_1};
  height: 10.5128vw;
  cursor: pointer;
`;

const Option = styled.option`
  color: ${WHITE_1};
  background: #333333;
  width: 19.2308vw;
  height: 10.5128vw;
  padding: 3.0769vw;
`;
