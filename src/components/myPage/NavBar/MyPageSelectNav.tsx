import styled from "styled-components";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { btnActiveState } from "../../../states/index";
import { useEffect } from "react";

const MyPageSelectNav = () => {
  const navigate = useNavigate();
  const [isBtnActive, SetIsBtnActive] = useRecoilState(btnActiveState);
  const moveToURL = (event: React.ChangeEvent<HTMLSelectElement>) => {
    SetIsBtnActive(Number(event.target.value));
    if (event.target.value === '1') navigate(`/myPage/post`);
    else if (event.target.value === '2') navigate(`/myPage/reply`);
    else if (event.target.value === '3') navigate(`/myPage/like`);
    else if (event.target.value === '4') navigate(`/myPage/edit`);
  };

  useEffect(() => {
    const path = window.location.pathname.split("/")[2];
    if (path === "post") SetIsBtnActive(1);
    else if (path === "reply") SetIsBtnActive(2);
    else if (path === "like") SetIsBtnActive(3);
    else if (path === "edit") SetIsBtnActive(4);
  }, []);

  return (
    <SelectBox>
      <Select onChange={moveToURL} value={isBtnActive}>
        <Option value="1">내가 쓴 글</Option>
        <Option value="2">내가 쓴 댓글</Option>
        <Option value="3">좋아요 누른 글</Option>
        <Option value="4">정보 변경</Option>
      </Select>
      <Arrow />
    </SelectBox>
  );
};

const SelectBox = styled.div`
  width: 688px;
  height: 80px;
  border-radius: 12px;
  background: rgba(51, 51, 51, 0.6);
  margin-top: 40px;
  display: flex;
  align-items: center;
`;

const Select = styled.select`
  width: 650px;
  height: 80px;
  padding: 24px;
  color: #ed7f30;
  background: transparent;
  border: 0;
  font-size: 20px;
  outline: none;
  -webkit-appearance: none;
  -moz-appearance: none;
`;
const Option = styled.option`
  font-size: 14px;
  padding: 6px 8px;
  transition: background-color 0.2s ease-in;
  &:hover {
    background-color: #595959;
  }
`;

const Arrow = styled(MdOutlineKeyboardArrowDown)`
  font-size: 32px;
`;

export default MyPageSelectNav;
