import styled from "styled-components";
import { BLACK_1, WHITE_1 } from "../../styles/theme";

export function SearchBar() {
  return (
    <SearchContainer>
      <input type="text" placeholder="검색어를 입력하세요"></input>
      <button type="submit">검색</button>
    </SearchContainer>
  );
}

const SearchContainer = styled.form`
  display: flex;
  margin-top: 20px;
  width: 100%;
  justify-content: space-between;
  gap: 16px;
  input {
    width: 100%;
    height: 60px;
    background: rgba(51, 51, 51, 0.6);
    border-radius: 8px;
    border: none;
    color: ${WHITE_1};
    font-weight: 500;
    padding: 19px 16px;
    font-size: 18px;
    &:focus {
      outline: none;
    }
  }
  button {
    width: 126px;
    height: 60px;
    line-height: 22px;
    border-radius: 8px;
    letter-spacing: -0px;
    font-size: 20px;
    background: #e9e9e9;
    font-weight: 600;
    text-align: center;
    color: ${BLACK_1};
    border: none;
  }
  @media all and (max-width: 767px) {
    margin-top: 16px;
    width: 100%;
    flex-direction: column;
    gap: 12px;
    input {
      width: 100%;
      height: 48px;
      font-size: 14px;
      border-radius: 8px;
      padding: 15px 12px;
    }
    button {
      width: 100%;
      height: 40px;
      font-size: 16px;
      line-height: 19px;
      border-radius: 8px;
    }
  }
`;
