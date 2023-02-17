import styled from "styled-components";
import { useRecoilState } from "recoil";
import { btnActiveState } from "../../../states/index";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export function NavSelectPartMobile() {
  const [isBtnActive, SetIsBtnActive] = useRecoilState(btnActiveState);
  const navigate = useNavigate();
  useEffect(() => {
    const path = window.location.pathname.split("/")[2];
    if (path === "post") SetIsBtnActive(1);
    else if (path === "reply") SetIsBtnActive(2);
    else if (path === "like") SetIsBtnActive(3);
    else if (path === "edit") SetIsBtnActive(4);
  }, []);

  return (
    <MyPagePart>
      <SelectPart
        style={{ width: "70px" }}
        className={isBtnActive === 1 ? "active" : ""}
        onClick={() => {
          SetIsBtnActive(1);
          navigate("/myPage/post");
        }}
      >
        내가 쓴 글
      </SelectPart>
      <SelectPart
        style={{ width: "80px" }}
        className={isBtnActive === 2 ? "active" : ""}
        onClick={() => {
          SetIsBtnActive(2);
          navigate("/myPage/reply");
        }}
      >
        내가 쓴 댓글
      </SelectPart>
      <SelectPart
        style={{ width: "90px" }}
        className={isBtnActive === 3 ? "active" : ""}
        onClick={() => {
          SetIsBtnActive(3);
          navigate("/myPage/like");
        }}
      >
        좋아요 누른 글
      </SelectPart>
    </MyPagePart>
  );
}

const MyPagePart = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 32px;
  font-weight: 700;
  font-size: 12px;
  line-height: 19.36px;
`;

const SelectPart = styled.div`
  margin-top: 16px;
  margin-left: 11px;
  height: 40px;
  cursor: pointer;
  padding: 12px;
  display: flex;
  justify-content: center;
  &.active {
    color: #ed7f30;
    border-bottom: 2px solid white;
  }
`;
