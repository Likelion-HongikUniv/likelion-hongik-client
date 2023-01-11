// 전역 css

import { createGlobalStyle } from "styled-components";
import "./font.css";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: SUIT;
    line-height: 1.5;
    margin: 0;
  }

  button {
    background-color: transparent;
    padding: 0;
    cursor: pointer;
    border: none;
    line-height: 0;
    font-family: SUIT;
  }

  input, select, option{
    font-family: SUIT;
  }
`;

export default GlobalStyle;
