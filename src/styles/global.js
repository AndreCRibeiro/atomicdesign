import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    min-height: 100%;
  }

  body {
    background: #eee;
    -webkit-font-smoothing: antialiased !important;
  }

  body, input {
    color: #000;
    font-size: 16px;
    font-family: Muli;
  }

  button {
    color: #FFF;
    font-size: 16px;
    font-family: Muli;
    cursor: pointer;
  }
`;
