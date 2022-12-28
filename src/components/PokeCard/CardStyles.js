import styled from "styled-components";

const CardStyles = styled.div`
  width: 150px;
  height: 162px;
  display: flex;
  gap: 0.8rem;
  flex-direction: column;
  border: 0.5px ${({ theme, tipo }) => theme.pokemonType[tipo]} solid;
  border-radius: 0.5rem;
  cursor: pointer;

  .Card__id {
    width: 100%;
    display: flex;
    justify-content: end;
    padding-right: 0.5rem;

    h4 {
      font-size: 0.8rem;
      font-weight: 400;
      color: ${({ theme, tipo }) => theme.pokemonType[tipo]};
    }
  }

  figure {
    width: 100%;
    height: 50%;
    flex-grow: 1;
    display: flex;
    justify-content: center;
  }

  .Card__footer {
    justify-self: stretch;
    padding: 0.5rem;
    border-radius: 0 0 0.5rem 0.5rem;
    background-color: ${({ theme, tipo }) => theme.pokemonType[tipo]};

    h4 {
      font-size: 0.7rem;
      letter-spacing: 0.1rem;
      line-height: 1rem;
      font-weight: 400;
      text-align: center;
      color: ${({ theme }) => theme.grayScale.white};
    }
  }
`;

export default CardStyles