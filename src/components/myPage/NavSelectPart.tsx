import styled from "styled-components";
import { useRecoilState } from "recoil";
import { btnActiveState } from "./../../states/index";

export function NavSelectPart() {
  const [isBtnActive, SetIsBtnActive] = useRecoilState(btnActiveState);
  return (
    <MyPagePart>
      <SelectPart
        style={{ width: "66px" }}
        className={isBtnActive === 1 ? "active" : ""}
        onClick={() => {
          SetIsBtnActive(1);
        }}
      >
        내가 쓴 글
      </SelectPart>
      <SelectPart
        style={{ width: "81px" }}
        className={isBtnActive === 2 ? "active" : ""}
        onClick={() => {
          SetIsBtnActive(2);
        }}
      >
        내가 쓴 댓글
      </SelectPart>
      <SelectPart
        style={{ width: "95px" }}
        className={isBtnActive === 3 ? "active" : ""}
        onClick={() => {
          SetIsBtnActive(3);
        }}
      >
        좋아요 누른 글
      </SelectPart>
      <Setting>설정</Setting>
      <SelectPart
        style={{ marginTop: "20px", width: "62px" }}
        className={isBtnActive === 4 ? "active" : ""}
        onClick={() => {
          SetIsBtnActive(4);
        }}
      >
        정보 변경
      </SelectPart>
    </MyPagePart>
  );
}

const MyPagePart = styled.div`
  padding-top: 32px;
  font-weight: 500;
  font-size: 16px;
  line-height: 19.36px;
`;

const SelectPart = styled.div`
  margin-top: 16px;
  margin-left: 11px;
  height: 19px;
  cursor: pointer;

  &.active {
    color: #ed7f30;
  }
`;

const Setting = styled.div`
  margin-top: 20px;
  font-size: 12px;
  font-weight: 500;
  line-height: 14.52px;
  color: #979797;
`;
