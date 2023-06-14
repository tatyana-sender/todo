import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
    
  html {
    min-height: 100%;
    font-size: 62.5%;
    font-family: 'Roboto', sans-serif;
  }
    
  body {
    min-height: 100vh;
    font-size: 1.6rem;
    font-family: 'Exo 2', sans-serif;
  }
    
  .wrapper {
    display: flex;
    min-height: 100vh;
  }
`;
