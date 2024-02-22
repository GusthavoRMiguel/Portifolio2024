import { createGlobalStyle, css } from 'styled-components';
import theme from './theme';

const GlobalStyles = createGlobalStyle`


  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    scroll-behavior: smooth;
    font-optical-sizing: auto;
    font-style: normal;
    font-family: ${theme.font.family};
    ::-webkit-scrollbar-thumb {
    background-color: ${theme.colors.gray_300} !important;
   }
    ::-webkit-scrollbar-track {
    background-color: ${theme.colors.gray_50}!important;
    border-radius: 35px !important;
   }
    ::-webkit-scrollbar {
    width: 10px !important;
    border-radius: 35px !important;
    }

    @media (max-width: 600px) {
     ::-webkit-scrollbar {
       width: 1px !important;
     }

  }
  }

  ${({ theme }) => css`
    html {
      max-width: 100vw;
      overflow-x: hidden;
      -webkit-font-smoothing: antialiased;
      text-rendering: optimizeLegibility !important;
    }

    body {
      font-size: ${theme.font.sizes.medium};
      background-color: ${theme.colors.gray_50};
    }

    body,
    input,
    textarea,
    button {
      font-size: 10px;
      font-family: ${theme.font.family};
    }
  `}

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  h1, h2, h3, h4, strong, p { 
    margin: 0;
    line-height: normal;
    display: flex;
    align-items: center;
    font-family: ${theme.font.family};
  }




`;

export default GlobalStyles;
