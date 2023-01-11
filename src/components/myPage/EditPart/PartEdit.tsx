import styled from "styled-components";
import { useSetRecoilState } from "recoil";
import { partState } from "../../../states";

export function PartEdit() {
  const setPart = useSetRecoilState(partState);

  return (
    <div style={{ display: "flex" }}>
      <PartTitle>파트 변경</PartTitle>
      <div>
        <PartSelect>
          <PartOptions
            onClick={() => {
              setPart(1);
            }}
          >
            기획/디자인
          </PartOptions>
          <PartOptions
            onClick={() => {
              setPart(2);
            }}
          >
            프론트엔드
          </PartOptions>
          <PartOptions
            onClick={() => {
              setPart(3);
            }}
          >
            백엔드
          </PartOptions>
        </PartSelect>
      </div>
    </div>
  );
}

const PartTitle = styled.div`
  font-weight: 500;
  font-size: 18px;
  line-height: 21.78px;
  display: flex;
  align-items: center;
`;

const PartSelect = styled.select`
  width: 387px;
  height: 60px;
  background-color: #33333399;
  border: none;
  border-radius: 8px;
  margin-left: 47px;
  color: #d7d7d7;
  padding: 19px 16px;
  font-weight: 500;
  font-size: 18px;
  line-height: 21.78px;
  letter-spacing: -0.32px;
  margin-bottom: 24px;
`;

const PartOptions = styled.option`
  font-weight: 500;
  font-size: 18px;
  line-height: 21.78px;
  letter-spacing: -0.32px;
  color: #d7d7d7;
  background-color: #222222;
`;
