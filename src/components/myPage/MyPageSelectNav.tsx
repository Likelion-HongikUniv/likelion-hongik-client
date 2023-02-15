import styled from "styled-components";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { selectActiveState } from "./../../states/index";

const MyPageSelectNav = () => {
  const navigate = useNavigate();
  const [index, setIndex] = useRecoilState(selectActiveState);
  const moveToURL = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setIndex(event.target.value);
    navigate(`/myPage/${event.target.value}`);
  };

  return (
    <SelectBox>
      <Select onChange={moveToURL} value={index}>
        <Option value="post">내가 쓴 글</Option>
        <Option value="reply">내가 쓴 댓글</Option>
        <Option value="like">좋아요 누른 글</Option>
        <Option value="edit">정보 변경</Option>
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
