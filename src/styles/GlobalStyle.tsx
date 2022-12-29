import { createGlobalStyle } from 'styled-components';
import './font.css';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: Pretendard;
    line-height: 1.5;
  }

  button {
    background-color: transparent;
    padding: 0;
    cursor: pointer;
    border: none;
    /* line-height: 0; */
  }
`;
export default GlobalStyle;
