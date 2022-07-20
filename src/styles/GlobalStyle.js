import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @font-face {
    font-family: RIDIBatang;
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_twelve@1.0/RIDIBatang.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: RIDIBatang, -apple-system, BlinkMacSystemFont, system-ui, Roboto,
    'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR',
    'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
    sans-serif !important;
  }

  body {
    width: 100%;
    height: 100%;
    background: #6768ab;
    line-height: 1.6;
  }

  a {
    text-decoration : none;
    color : inherit;
  }

  button {
    border : none;
    background: none;
    outline: none;
    cursor : pointer;
  }

  li {
    padding-left: 0;
    list-style: none;
  }

  textarea {
    background-color: transparent;
    border: 0;
    &:focus {
      outline: none;
      box-shadow: none;
    }
  }

  [hidden] {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  &::selection {
    background: #eee54a;
  }

  &::-moz-selection {
    background: #eee54a;
  }
`;
