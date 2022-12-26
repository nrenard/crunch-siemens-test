import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  body {
    background: ${({ theme }) => theme.colors.backgroundColor};
    color: ${({ theme }) => theme.colors.primary};
    padding: 50px;
  }

  body, input {
    font: normal 13px/1.625 'Helvetica Neue', Arial, Helvetica, sans-serif;  
  }

  button {
    cursor: pointer;
  }

  * {
    box-sizing: border-box;
  }

  .body-container {
    background: ${({ theme }) => theme.colors.white};
    padding: ${({ theme }) => theme.base.padding * 2}px;
    width: 100%;
    max-width: 860px;
    box-shadow: 0px 0px 12px rgb(0 0 0 / 30%);
    border-radius: ${({ theme }) => theme.base.radius}px;
    margin: 0 auto;
  }
`;
