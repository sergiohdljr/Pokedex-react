import { useState } from "react";
import { useParams } from "react-router-dom";
import {NomeUpperCase,NormalizeNome,alturaPokemon,pesoPokemon,fetchPokemonDetails} from "../../utils/utils";
import { useQuery } from "react-query";
import { CardDetails } from "../../components/CardPokemonDetails/CardDetails";
import { ContainerApp } from "../../styles/AppContainer";

export const DetailsPage = () => {
  const { id } = useParams();
  const [idPokemon, setPokemonId] = useState(id)

  const {data: pokemon,error,isLoading,isError} = useQuery([
    "pokemon", idPokemon],
     async () => await fetchPokemonDetails(idPokemon, "pokemon"),{keepPreviousData: true});

  const { data: species } = useQuery([
    "species", idPokemon],
    async () => await fetchPokemonDetails(idPokemon, "pokemon-species"),{keepPreviousData:true}
  );

  return (
    <ContainerApp tipo={pokemon?.types.map(({ type }) => type.name)[0]}>
      {pokemon && (
        <CardDetails
          name={NomeUpperCase(NormalizeNome(pokemon.name))}
          types={pokemon.types}
          id={pokemon.id}
          sprites={pokemon.sprites}
          weight={pesoPokemon(pokemon.weight)}
          height={alturaPokemon(pokemon.height)}
          moves={pokemon.moves}
          stats={pokemon.stats}
          species={species}
          changePokemon = {setPokemonId}
        />
      )}
    </ContainerApp>
  );
};
