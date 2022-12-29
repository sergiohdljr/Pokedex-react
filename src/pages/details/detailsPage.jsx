import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { DetailStyle, TipoPokemonStyle } from "./detailsStyles";
import { fillId, NomeUpperCase, NormalizeNome } from "../../utils/utils";
import seta from "../../assets/Arrow-left.svg";
import peso from "../../assets/peso.svg";
import altura from "../../assets/altura.svg";
import { ContainerApp } from "../../styles/AppContainer";

export const DetailsPage = () => {
  const { nome } = useParams();
  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${nome}/`)
      .then((respo) => respo.json())
      .then((poke) => setPokemon([poke]));
  }, []);

  return (
    <ContainerApp
      tipo={pokemon?.map(({ types }) => types.map(({ type }) => type.name)[0])}
    >
      {pokemon &&
        pokemon?.map(({ name, types, id, sprites, weight, height, moves }) => {
          return (
            <DetailStyle
              key={id}
              tipo={types?.map((tipo) => tipo.type.name)[0]}
            >
              <div className="Detail__Header">
                <Link to={"/"}>
                  <img src={seta} alt="" />
                </Link>
                <h1>{NormalizeNome(NomeUpperCase(name))}</h1>
                <p>{fillId(id)}</p>
              </div>
              <figure className="Detail__Sprite">
                <img src={sprites.other.dream_world.front_default} alt="" />
              </figure>
              <div className="Details__infos">
                <div className="info__tipo">
                  {types
                    .map((tipo) => tipo.type.name)
                    .map((poketype) => {
                      return (
                        <TipoPokemonStyle key={poketype} tipo={poketype}>
                          {poketype}
                        </TipoPokemonStyle>
                      );
                    })}
                </div>
                <h3 className="Details__about">About</h3>
                <div className="Details__Peso_altura_Moves">
                  <div className="Peso-altura-moves">
                    <div>
                      <img src={peso} alt="" />
                      <p id="details">{weight}</p>
                    </div>
                    <p>peso</p>
                  </div>
                  <div className="Peso-altura-moves">
                    <div>
                      <img src={altura} alt="" />
                      <p id="details">{height}</p>
                    </div>
                    <p>altura</p>
                  </div>
                  <div className="Peso-altura-moves">
                    <div id="ataques">
                      {moves.slice(0, 2).map(({ move }) => (
                        <p key={move.name}>{move.name}</p>
                      ))}
                    </div>
                    <p>ataques</p>
                  </div>
                </div>
              </div>
            </DetailStyle>
          );
        })}
    </ContainerApp>
  );
};
