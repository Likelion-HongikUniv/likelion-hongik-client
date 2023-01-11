import styled from "styled-components";
import { HeartFilled } from "../icons/HeartFilled";
import { WHITE_1 } from "../../styles/theme";

export function HeartButton() {
  return (
    <ButtonWrapper>
      <HeartFilled />
      312
    </ButtonWrapper>
  );
}

const ButtonWrapper = styled.button`
  box-sizing: border-box;
  font-size: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px 20px;
  gap: 4px;

  width: max-content;
  height: 48px;

  color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.8);
  border-radius: 50px;
`;
