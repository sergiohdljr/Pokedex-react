import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  fillId,
  NomeUpperCase,
  NormalizeNome,
  alturaPokemon,
  pesoPokemon,
  fetchPokemonDetails,
} from "../../utils/utils";
import { useQuery } from "react-query";
import { CardDetails } from "../../components/CardPokemonDetails/CardDetails";
import { ContainerApp } from "../../styles/AppContainer";

export const DetailsPage = () => {
  
  const { id } = useParams();

  const {data: pokemon,error,isLoading,isError} = useQuery(
    "pokemon",
     async () => await fetchPokemonDetails(id, "pokemon"));

  const { data: species } = useQuery(
    "species",
    async () => await fetchPokemonDetails(id, "pokemon-species")
  );

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
        />
      )}
    </ContainerApp>
  );
};
