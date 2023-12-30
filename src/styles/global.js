import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        
    } 
    body {
        width: 100%;
        /* width: 100vh; */
        /* Para mobile podemos usar 100vh */
        height: 100vh;
        overflow: hidden;
        font-family: 'Poppins', sans-serif;
    }
`;

export default GlobalStyle;