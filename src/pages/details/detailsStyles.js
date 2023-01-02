import styled from "styled-components";
import pokedex from "../../assets/Pokedex.svg";

export const DetailStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-self: center;
  min-width: 360px;
  width: 40%;
  height: 640px;
  padding: 1rem;
  background-color: ${({ theme, tipo }) => theme.pokemonType[tipo]};
  background-image: url(${pokedex});
  background-repeat: no-repeat;
  background-position: top 2% left 90%;
  background-size: 208px;

  .Detail__Header {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.7rem;
    width: 100%;
    margin: 0 auto;

    a {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0.5rem;
      border-radius: 50%;
      cursor: pointer;
      background-color: ${({ theme, tipo }) => theme.pokemonType[tipo]};
      :hover {
        opacity: 70%;
      }
    }

    h1 {
      flex-grow: 1;
      font-size: 24px;
      color: ${({ theme }) => theme.grayScale.white};
    }

    p {
      font-size: 12px;
      font-weight: 700;
      color: ${({ theme }) => theme.grayScale.white};
    }
  }
  .Detail__Sprite {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 220px;

    img {
      width: 100%;
      height: 100%;
    }
  }
  .Details__infos {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 0.3rem;
    align-items: center;
    width: 100%;
    background-color: ${({ theme }) => theme.grayScale.white};
    padding: 27px 20px 0px 20px;
    border-radius: 0.5rem;

    .info__tipo {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.3rem;
    }

    .Details__about {
      font-size: 14px;
      font-weight: 700;
      color: ${({ theme, tipo }) => theme.pokemonType[tipo]};
    }
    .Details__Peso_altura_Moves {
      width: 100%;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 1fr;

      .Peso-altura-moves {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 3fr 1fr;
        justify-content: center;
        align-items: center;
        width: 100%;

        div {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 0.8rem;
        }

        img {
          justify-items: center;
        }

        .details {
          color: ${({ theme }) => theme.grayScale.darkGray};
          font-size: 0.7rem;
          text-align: center;
        }

        p {
          color: ${({ theme }) => theme.grayScale.mediumGray};
          font-size: 0.7rem;
          text-align: center;
        }

        #ataques {
          gap: 0;
          display: flex;
          flex-direction: column;

          p {
            color: ${({ theme }) => theme.grayScale.darkGray};
          }
        }
      }
    }
  }
  .base-stats {
    width: 100%;
    height: 170px;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding-top: 1rem;
    h3 {
      text-align: center;
      font-size: 14px;
      font-weight: 700;
      color: ${({ theme, tipo }) => theme.pokemonType[tipo]};
    }
    .stats_container {
      width: 100%;
      height: 100%;
      display: grid;
      gap: 0.3rem;
      grid-template-columns: 1fr;
      grid-template-rows: repeat(6, 15px);

      .stat {
        height: 15px;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        justify-content: space-between;
        p {
          width: 28px;
          font-size: 12px;
          font-weight: 500;
          text-align:left;
          color: ${({ theme, tipo }) => theme.pokemonType[tipo]};
        }
      }
    }
  }
`;

export const TipoPokemonStyle = styled.div`
  padding: 0.5rem;
  font-size: 12px;
  text-align: center;
  width: fit-content;
  border-radius: 1rem;
  color: ${({ theme }) => theme.grayScale.white};
  background-color: ${({ theme, tipo }) => theme.pokemonType[tipo]};
`;

export const ProgressBar = styled.div`
  flex-grow: 1;
  height: 4px;
  background-color: blue;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.grayScale.lightGray};
  .progress {
    width: ${({ progress }) => `${progress}px`};
    height: 100%;
    background-color: ${({ theme, tipo }) => theme.pokemonType[tipo]};
    border-radius: 0.5rem;
  }
`;