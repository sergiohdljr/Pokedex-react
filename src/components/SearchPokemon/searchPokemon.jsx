import SearchPoke from "./searchPokeStyles";
import buscaLupa from "../../assets/Lupa.svg";
import { PokeCard } from "../PokeCard/PokeCard";
import { useState } from "react";
import {NomeUpperCase,NormalizeNome} from '../../utils/utils'


export const SearchPokemon = ({ pokemons, loading }) => {
  
  const [valorBusca, setBusca] = useState("");

  return (
    <SearchPoke>
      <form>
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
      <section className="Pokemon__container">
        {loading && <h1 className="Pokemon_loading">carregando pokemons...</h1>}
        {pokemons &&
          pokemons
          ?.filter(({name})=>name.includes(valorBusca))
           .map(({ id, name, sprites, types }) => {
            return (
              <PokeCard
                key={id}
                id={id}
                nome={NormalizeNome(NomeUpperCase(name))}
                tipo={types.map(({ type }) => type.name)[0].toString()}
                pic={sprites.other.dream_world.front_default}/>
            );
          })}
      </section>
    </SearchPoke>
  );
};
