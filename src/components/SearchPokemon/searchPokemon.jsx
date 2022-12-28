import SearchPoke from "./searchPokeStyles";
import buscaLupa from "../../assets/Lupa.svg";
import { PokeCard } from "../PokeCard/PokeCard";
import { useState } from "react";
import {NomeUpperCase,NormalizeNome,fillId} from '../../utils/utils'


export const SearchPokemon = ({ pokemons }) => {
  const [valorBusca, setBusca] = useState("");

  return (
    <SearchPoke>
      <form action="">
        <i>
          <img src={buscaLupa} alt="" width="10px" />
        </i>
        <input
          value={valorBusca}
          onChange={e=>setBusca(e.target.value)}
          name="busca"
          type="text"
          placeholder="buscar pokemon"
        />
      </form>
      <div className="Pokemon__container">
        {pokemons &&
          pokemons
          ?.filter(({name})=>name.includes(valorBusca))
           .map(({ id, name, sprites, types }) => {
            return (
              <PokeCard
                key={id}
                id={fillId(id)}
                nome={NormalizeNome(NomeUpperCase(name))}
                tipo={types.map(({ type }) => type.name)[0].toString()}
                pic={sprites.other.dream_world.front_default}
              />
            );
          })}
      </div>
    </SearchPoke>
  );
};
