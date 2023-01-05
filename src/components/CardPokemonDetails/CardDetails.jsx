import seta from "../../assets/Arrow-left.svg";
import peso from "../../assets/peso.svg";
import altura from "../../assets/altura.svg";
import leftArrow from "../../assets/change-pic-arrow-esq.svg";
import rigthArrow from "../../assets/change-pic-arrow-dir.svg";
import { ProgressBar } from "./CardDetailsStyles";
import { DetailStyle } from "./CardDetailsStyles";
import { Link } from "react-router-dom";
import { TipoPokemonStyle } from "./CardDetailsStyles";
import {statName,formatarText} from '../../utils/utils'


export const CardDetails = ({
  name,
  types,
  id,
  sprites,
  weight,
  height,
  moves,
  stats,
  species
}) => {
  return (
    <DetailStyle key={id} tipo={types?.map(({ type }) => type.name)[0]}>
      <div className="Detail__Header">
        <Link to={"/"}>
          <img src={seta} alt="" />
        </Link>
        <h1>{name}</h1>
        <p>{id}</p>
      </div>
      <figure className="Detail__Sprite">
        <button className="Detail_nextPokemon">
          <i>
            <img src={leftArrow} alt="" />
          </i>
        </button>
        <img src={sprites?.other.dream_world.front_default} alt="" />
        <button className="Detail_nextPokemon">
          <i>
            <img src={rigthArrow} alt="" />
          </i>
        </button>
      </figure>
      <div className="Details__infos">
        <div className="info__tipo">
          {types
            ?.map((tipo) => tipo.type.name)
            ?.map((poketype) => {
              return (
                <TipoPokemonStyle key={poketype} tipo={poketype}>
                  {poketype}
                </TipoPokemonStyle>
              );
            })}
          {species?.is_legendary && (
            <TipoPokemonStyle tipo={species?.is_legendary && "legendary"}>
              {species?.is_legendary && "legendary"}
            </TipoPokemonStyle>
          )}
        </div>
        <h3 className="Details__about">About</h3>
        <div className="Details__Peso_altura_Moves">
          <div className="Peso-altura-moves">
            <div>
              <img src={peso} alt="" />
              <p className="details">{weight} kg</p>
            </div>
            <p>peso</p>
          </div>
          <div className="Peso-altura-moves">
            <div>
              <img src={altura} alt="" />
              <p className="details">{height}</p>
            </div>
            <p>altura</p>
          </div>
          <div className="Peso-altura-moves">
            <div id="ataques">
              {moves?.slice(moves.length - 2).map(({ move }) => (
                <p key={move.name}>{move.name}</p>
              ))}
            </div>
            <p>ataques</p>
          </div>
        </div>
        <p className="aboutPokemon">
          {formatarText(species?.flavor_text_entries.filter((species)=>species.language.name === "en").slice(0, 1)
            .map(({ flavor_text }) => flavor_text).toString())}
        </p>
        <div className="base-stats">
          <h3>Base stats</h3>
          <div className="stats_container">
            {stats?.map(({ base_stat, stat }) => {
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
};
