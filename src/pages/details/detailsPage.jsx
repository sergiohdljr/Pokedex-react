import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { DetailStyle, TipoPokemonStyle } from "./detailsStyles";
import {
  fillId,
  NomeUpperCase,
  NormalizeNome,
  alturaPokemon,
  pesoPokemon,
  statName,
} from "../../utils/utils";
import seta from "../../assets/Arrow-left.svg";
import peso from "../../assets/peso.svg";
import altura from "../../assets/altura.svg";
import { ContainerApp } from "../../styles/AppContainer";
import { ProgressBar } from "./detailsStyles";

export const DetailsPage = () => {
  const { nome } = useParams();
  const [pokemon, setPokemon] = useState();
  const [species, setSpecies] = useState();

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${nome}/`)
      .then((respo) => respo.json())
      .then((poke) => setPokemon([poke]));

    fetch(`https://pokeapi.co/api/v2/pokemon-species/${nome}/`)
      .then((respo) => respo.json())
      .then((speciesPokemon) => setSpecies(speciesPokemon));
  }, []);

  return (
    <ContainerApp
      tipo={pokemon?.map(({ types }) => types.map(({ type }) => type.name)[0])}
    >
      {pokemon &&
        pokemon?.map(
          ({ name, types, id, sprites, weight, height, moves, stats }) => {
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
                    {species?.is_legendary && (
                      <TipoPokemonStyle
                        tipo={species?.is_legendary && "legendary"}
                      >
                        {species?.is_legendary && "legendary"}
                      </TipoPokemonStyle>
                    )}
                  </div>
                  <h3 className="Details__about">About</h3>
                  <div className="Details__Peso_altura_Moves">
                    <div className="Peso-altura-moves">
                      <div>
                        <img src={peso} alt="" />
                        <p className="details">{pesoPokemon(weight)} kg</p>
                      </div>
                      <p>peso</p>
                    </div>
                    <div className="Peso-altura-moves">
                      <div>
                        <img src={altura} alt="" />
                        <p className="details">{alturaPokemon(height)}</p>
                      </div>
                      <p>altura</p>
                    </div>
                    <div className="Peso-altura-moves">
                      <div id="ataques">
                        {moves.slice(moves.length - 2).map(({ move }) => (
                          <p key={move.name}>{move.name}</p>
                        ))}
                      </div>
                      <p>ataques</p>
                    </div>
                  </div>
                  <div className="base-stats">
                    <h3>Base stats</h3>
                    <div className="stats_container">
                      {stats.map(({ base_stat, stat }) => {
                        const key = `${name}${stat.name}`;
                        return (
                          <div key={key} className="stat">
                            <p>{statName(stat.name)}</p>
                            <p>{base_stat}</p>
                            <ProgressBar
                              tipo={types?.map((tipo) => tipo.type.name)[0]}
                              progress={base_stat}
                            >
                              <div className="progress"></div>
                            </ProgressBar>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </DetailStyle>
            );
          }
        )}
    </ContainerApp>
  );
};
