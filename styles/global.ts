import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
    }

    body {
        font-family: Saira, 'Helvetica Neue', sans-serif;
        background-color: #f0f0f5;
    }
`
export default GlobalStyles;
