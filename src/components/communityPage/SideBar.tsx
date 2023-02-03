import styled from "styled-components";
import { useRecoilState, useRecoilValue } from "recoil";
import { nowTagState, tagListState } from "../../states/atoms";
import { useNavigate } from "react-router-dom";
import { ITag, ICategory, ICommunityParam } from "../../interfaces/category";
import useMediaQuery from "../../hooks/useMediaQuery";

export function SideBar(categoryName: ICommunityParam) {
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
              <img alt="profile-img" />
            </ProfileImg>
            <ProfileDesc>
              <span>김아현</span>
              <div>컴퓨터공학과</div>
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
  position: fixed;
  display: flex;
  width: 9.8958vw;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  left: 17.7083vw;
  @media all and (max-width: 768px) {
    display: flex;
    position: static;
    flex-direction: row;
  }
`;

const ProfileBoard = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.625vw;
  @media all and (max-width: 768px) {
    margin-bottom: 10.2564vw;
  }
`;

const ProfileImg = styled.div`
  width: 3.125vw;
  height: 3.125vw;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 100%;
  }
`;

const ProfileDesc = styled.div`
  font-size: 0.7292vw;
  color: #b9b9b9;
  span {
    font-weight: 700;
    font-size: 0.9375vw;
    color: #fff;
  }
`;

const TagWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-bottom: 0.0521vw solid #6d6d6d;
  padding: 1.0417vw 0 0 0;
  span {
    font-size: 0.625vw;
    color: #979797;
  }

  div {
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    gap: 0.8333vw;
    padding: 1.0417vw 0.5729vw;
    font-weight: 500;
    span {
      font-size: 0.8333vw;
      letter-spacing: -0.0167vw;
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

const SelectBox = styled.select`
  padding: 3.0769vw;
  border: none;
  background-color: transparent;
  font-weight: 700;
  font-size: 3.5897vw;
  color: #fff;
  height: 10.5128vw;
  cursor: pointer;
`;

const Option = styled.option`
  color: #fff;
  background: #333333;
  width: 19.2308vw;
  height: 10.5128vw;
  padding: 3.0769vw;
`;
