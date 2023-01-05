import { Header } from "../../components/Header/header";
import { SearchPokemon } from "../../components/SearchPokemon/searchPokemon";
import { ContainerHome } from "../../styles/AppContainer";
import { useQuery } from "react-query";
import { fetchPokemon } from "../../utils/utils";

export const Home = () => {
  const { data: Pokemon, isFetching } = useQuery(
    "pokemons",
    async () =>
      await fetchPokemon("https://pokeapi.co/api/v2/pokemon?limit=154")
  );

  return (
    <ContainerHome>
      <Header></Header>
      <SearchPokemon pokemons={Pokemon}></SearchPokemon>
    </ContainerHome>
  );
};
