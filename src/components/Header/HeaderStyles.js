import styled from "styled-components";

const HeaderStyles = styled.div`
display: flex;
gap: 0.5rem;
align-items: center;
width: 100%;
height: 2rem;
margin: 0 auto;
margin-top: 2rem;

img{
    width: 24px;
    height: 100%;
}

h1{
    font-weight: 700;
    font-size: 1.8rem;
    color: ${({theme})=>theme.grayScale.darkGray}
}
`

export default HeaderStyles