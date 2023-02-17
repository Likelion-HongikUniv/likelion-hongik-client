// 전역 css

import { createGlobalStyle } from "styled-components";
import "./font.css";
import { BLACK_1 } from "./theme";

const GlobalStyle = createGlobalStyle` 

* {
    box-sizing: border-box;
  }

  body {
    font-family: SUIT;
    line-height: 1.5;
    margin: 0;
    background-color: ${BLACK_1};
    color: white;
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
