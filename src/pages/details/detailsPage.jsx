import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  fillId,
  NomeUpperCase,
  NormalizeNome,
  alturaPokemon,
  pesoPokemon,
  statName,
  fetchPokemonDetails,
  fetchPokemonSpecies,
} from "../../utils/utils";
import { useQuery } from "react-query";
import { CardDetails } from "../../components/CardPokemonDetails/CardDetails";
import { ContainerApp } from "../../styles/AppContainer";

export const DetailsPage = () => {
  const { id } = useParams();
  const [pokemonId, setPokemonId] = useState(id);

  const baseUrl = "https://pokeapi.co/api/v2";

  const {data: pokemon,error,isFetching} = useQuery(["pokemon", id], async () => await fetchPokemonDetails(id,baseUrl), {
      keepPreviousData: true,
    });

  const {data:species} = useQuery(["species", id], async () => await fetchPokemonSpecies(id, baseUrl), {
    keepPreviousData: true,
  });

  return (
    <ContainerApp tipo={pokemon?.types.map(({ type }) => type.name)[0]}>
      {pokemon && (
      <CardDetails
        name={NomeUpperCase(NormalizeNome(pokemon.name))}
        types={pokemon?.types}
        id={fillId(pokemon.id)}
        sprites={pokemon.sprites}
        weight={pesoPokemon(pokemon.weight)}
        height={alturaPokemon(pokemon.height)}
        moves={pokemon.moves}
        stats={pokemon.stats}
        species={species}
      />)}
    </ContainerApp>
  );
};
