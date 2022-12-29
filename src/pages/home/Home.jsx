import { useState, useEffect } from "react";
import { Header } from "../../components/Header/header";
import { SearchPokemon } from "../../components/SearchPokemon/searchPokemon";
import { ContainerHome } from "../../styles/AppContainer";

export const Home = () => {
  const [Pokemon, setPokemon] = useState([]);

  useEffect(() => {
    const fetchPokemon = async (url) => {
      const req = await fetch(url);
      const resp = await req.json();
      const urls = resp.results.map(
        async (resp) => await fetch(resp.url).then((results) => results.json())
      );
      const resultados = await Promise.all(urls);
      setPokemon(resultados);
    };
    fetchPokemon("https://pokeapi.co/api/v2/pokemon?limit=154");
  }, []);

  return (
    <ContainerHome>
      <Header></Header>
      <SearchPokemon pokemons={Pokemon}></SearchPokemon>
    </ContainerHome>
  );
};
