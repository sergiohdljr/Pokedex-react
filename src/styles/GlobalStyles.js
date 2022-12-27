import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

body{
    font-family: 'Poppins', sans-serif;
    background-color: ${({ theme }) => theme.grayScale.backGround};
}

input,a,button{
    all: unset;
}
`;