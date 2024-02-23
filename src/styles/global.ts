import { createGlobalStyle, css } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${(props) =>
      props.theme.colors.scrollbar_thumb} !important;
  }

  ::-webkit-scrollbar-track {
    background-color: ${(props) =>
      props.theme.colors.scrollbar_track} !important;
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

  html {
    max-width: 100vw;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility !important;
  }

  body {
    font-size: ${(props) => props.theme.font.sizes.medium};
    font-family: ${(props) => props.theme.font.family};
    background-color: ${(props) => props.theme.background.colors.primary};
 
  }

  body, input, textarea, button {
    font-size: 1.6rem; 
  }

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
    
  }
`;

export default GlobalStyles;
