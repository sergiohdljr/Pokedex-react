import styled from "styled-components";
import pokedex from "../../assets/Pokedex.svg";

export const DetailStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 360px;
  height: 640px;
  padding: 1rem;
  background-color: ${({ theme, tipo }) => theme.pokemonType[tipo]};
  background-image: url(${pokedex});
  background-repeat: no-repeat;
  background-position: top 2% left 90%;
  background-size: 208px;
  backdrop-filter: blue;

  .Detail__Header {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.7rem;
    width: 100%;
    margin: 0 auto;

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
    height: 220px;
    img {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 0px;
      position: absolute;
      width: 200px;
      height: 200px;
      left: 124.4px;
      top: 101.07px;
      transform: rotate(0.05deg);
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
    padding: 56px 20px 0px 20px;
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
      color: ${({ theme,tipo }) => theme.pokemonType[tipo]};
    }
    .Details__Peso_altura_Moves {
      width: 90%;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 1fr;

      .Peso-altura-moves{
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 3fr 1fr;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 48px;

        div{
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 0.8rem;
        }

        img{
          justify-items: center;
        }

        #details{
          font-size: 0.7rem;
          text-align: center;
        }

        p{
          color:${({theme})=>theme.grayScale.mediumGray};
          font-size: 0.7rem;
          text-align: center;
        }

        #ataques{
          gap: 0;
          display: flex;
          flex-direction: column;
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
