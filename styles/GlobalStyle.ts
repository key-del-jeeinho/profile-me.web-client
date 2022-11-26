import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    a {
        color: #fff;
        text-decoration: none;
        outline: none;
    }

    a:hover, a:active {
        text-decoration: none;
        color:#fff;
    }

body {
    font-family: 'Pretendard'
}
`

export default GlobalStyle