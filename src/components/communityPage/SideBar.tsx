import styled from "styled-components";
import { useRecoilState, useRecoilValue } from "recoil";
import { nowTagState, tagListState, selectModalState } from "../../states/atoms";
import { useNavigate } from "react-router-dom";
import { ITag, ICategory, ICommunityParam } from "../../interfaces/category";
import useMediaQuery from "../../hooks/useMediaQuery";
import { WHITE_1 } from "../../styles/theme";
import { profileImgState } from "../../states";
import { editState } from "../../states/index";
import emoji_lion from "./../images/emoji_lion_24x24.png";
import { SelectArrowDown } from "../icons/SelectArrowDown";
import { SelectModal } from "./SelectModal";

export function SideBar(categoryName: ICommunityParam) {
  const [isModal, setIsModal] = useRecoilState(selectModalState);
  const profileImg = useRecoilValue(profileImgState);
  const info = useRecoilValue(editState);
  const isMobile = useMediaQuery("( max-width: 767px )");
  const isTablet = useMediaQuery("(min-width: 768px) and (max-width: 1023px)");
  const [nowTag, setNowTag] = useRecoilState<ITag>(nowTagState);
  const tagList = useRecoilValue<ICategory[]>(tagListState);
  const navigate = useNavigate();
  const activeStyle = {
    fontWeight: "700",
    color: "#ED7F30",
  };
  const onTagClickHandler = (category: string, tag: ITag) => {
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
      setNowTag({ key: "NOTICE", text: "공지사항" });
    } else if (category === "HOMEWORK") {
      setNowTag({ key: "FRONTEND", text: "프론트" });
    } else {
      setNowTag({ key: "FRONTEND", text: "프론트" });
    }
    navigate(`/community/${category}`);
  };
  return (
    <SideBarWrapper>
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
      ) : isTablet ? (
        <Accordian onClick={() => setIsModal(true)}>
          <div>{nowTag.text}</div>
          <SelectArrowDown />
        </Accordian>
      ) : (
        tagList.map((category: ICategory) => (
          <TagWrapper key={category.key}>
            <span>{category.text}</span>
            <div>
              {category.tags?.map((tag: ITag) => (
                <span
                  key={tag.key}
                  onClick={() => onTagClickHandler(category.key, tag)}
                  style={category.key === categoryName.categoryName && tag.key === nowTag.key ? activeStyle : {}}
                >
                  {tag.text}
                </span>
              ))}
            </div>
          </TagWrapper>
        ))
      )}
      {isModal && (
        <ModalWrapper>
          <SelectModal categoryName={categoryName.categoryName} />
        </ModalWrapper>
      )}
    </SideBarWrapper>
  );
}

const SideBarWrapper = styled.div`
  display: flex;
  width: 190px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  @media all and (max-width: 1023px) {
    width: 100%;
    display: flex;
    position: static;
    flex-direction: column;
    align-items: flex-start;
    gap: 40px;
  }
`;

const ProfileBoard = styled.div`
  align-self: flex-start;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 12px;
  @media all and (max-width: 767px) {
    width: 100%;
    gap: 12px;
  }
`;

const ProfileImg = styled.div`
  img {
    width: 60px;
    height: 60px;
    object-fit: cover;
    border-radius: 100%;
  }
`;

const ProfileDesc = styled.div`
  color: #b9b9b9;
  font-size: 14px;
  margin-top: 6px;
  span {
    font-weight: 700;
    font-size: 18px;
    color: ${WHITE_1};
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
  padding: 12px;
  border: none;
  background-color: transparent;
  font-weight: 700;
  font-size: 14px;
  color: ${WHITE_1};
  height: 41px;
  cursor: pointer;
`;

const Option = styled.option`
  color: ${WHITE_1};
  background: #333333;
  width: 75px;
  height: 41px;
  padding: 12px;
`;

const Accordian = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background: rgba(51, 51, 51, 0.6);
  border-radius: 12px;
  padding: 27.5px 24px;
  font-weight: 600;
  font-size: 20px;
  line-height: 25px;
  letter-spacing: -0.32px;
  color: #ed7f30;
`;

const ModalWrapper = styled.div`
  z-index: 999;
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.7);
`;
