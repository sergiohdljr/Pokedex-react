import styled from "styled-components";

const SearchPoke = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1.3rem;

  form {
    display: flex;
    gap: 0.5rem;
    width: 100%;
    height: 2.5rem;
    padding-left: 0.3rem;
    border: 1px ${({ theme }) => theme.grayScale.lightGray} solid;
    border-radius: 0.5rem;

    i {
      display: flex;
      justify-content: center;

      img {
        width: 15px;
      }
    }

    input {
      flex-grow: 1;
      display: flex;
      justify-content: center;
      font-size: 14px;
      color: ${({ theme }) => theme.grayScale.mediumGray};
      ::placeholder {
        font-size: 12px;
      }
    }
  }

  .Pokemon__container {
    flex-grow: 1;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    grid-template-rows: auto;
    justify-items:center;
    justify-content:center;
    gap: 1.5rem;

    .Pokemon_loading{
      width: 100%;
      display: flex;
      justify-content: center;
      align-self: center;
      font-size: 14px;
      font-weight: 400;
      color: ${({theme})=>theme.grayScale.mediumGray}
    }
  }
`;

export default SearchPoke;
