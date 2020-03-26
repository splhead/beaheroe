import { createGlobalStyle } from 'styled-components';
import colors from './colors';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    font: 400 14px 'Roboto', sans-serif;
  }

  body {
    background: #f0f0f5;
    -webkit-font-smoothing: antialiased;
  }

  input, button, textarea {
    font: 400 14px 'Roboto', sans-serif;
  }

  button {
    cursor: pointer;
  }

  form input {
    width: 100%;
    height: 60px;
    color: ${colors.textColor};
    border: 1px solid ${colors.borderColor};
    border-radius: 8px;
    padding: 0 24px;
  }

  form textarea {
    width: 100%;
    min-height: 14px;
    resize: vertical;
    color: ${colors.textColor};
    border: 1px solid ${colors.borderColor};
    border-radius: 8px;
    padding: 16px 24px;
    line-height: 24px;
  }

  .button {
    width: 100%;
    height: 60px;
    background: ${colors.primary};
    border: 0;
    border-radius: 8px;
    color: #fff;
    font-weight: 700;
    margin-top: 16px;
    display: inline-block;
    text-align: center;
    text-decoration: none;
    font-size: 18px;
    line-height: 60px;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(90%)
    }
  }

  .back-link {
        display: flex;
        align-items: center;
        margin-top: 40px;
        color: #41414d;
        font-size: 18px;
        text-decoration: none;
        font-weight: 500;
        transition: opacity 0.2s;

        &:hover {
          opacity: 0.8;
        }

        svg {
          margin-right: 8px;
        }
      }
`;

export default GlobalStyle;
