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
  margin-top: 1.0417vw;
  gap: 0.8333vw;
  width: 100%;
  input {
    width: 40.7813vw;
    height: 3.125vw;
    background: rgba(51, 51, 51, 0.6);
    border-radius: 0.4167vw;
    border: none;
    color: ${WHITE_1};
    font-weight: 500;
    padding: 0.9896vw 0.8333vw;
    font-size: 0.9375vw;
    &:focus {
      outline: none;
    }
  }
  button {
    width: 6.5625vw;
    height: 3.125vw;
    line-height: 1.1458vw;
    border-radius: 0.4167vw;
    letter-spacing: -0.0167vw;
    font-size: 1.0417vw;
    background: #e9e9e9;
    font-weight: 600;
    text-align: center;
    color: ${BLACK_1};
    border: none;
  }
  @media all and (max-width: 768px) {
    margin-top: 4.1026vw;
    width: 100%;
    flex-direction: column;
    gap: 3.0769vw;
    input {
      width: 100%;
      height: 12.3077vw;
      font-weight: 500;
      font-size: 3.5897vw;
      border-radius: 2.0513vw;
      padding: 3.8462vw 3.0769vw;
    }
    button {
      width: 100%;
      height: 10.2564vw;
      font-weight: 600;
      font-size: 4.1026vw;
      line-height: 4.8718vw;
      border-radius: 2.0513vw;
    }
  }
`;
