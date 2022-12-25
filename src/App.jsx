import { useState, useEffect } from "react";
import Cards from "./components/Cards";
import Search from "./components/SearchBar";
import { getPokemonData, getPokemons, searchPokemon } from "./api";
import "./css/App.css";

function App() {
  const [charge, setCharge] = useState(true);
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);
  const [notFound, setNotFound] = useState(false);
  const [searching, setSearching] = useState(false);

  const fetchPokemons = async () => {
    try {
      setCharge(true);
      const data = await getPokemons(24, 24 * page);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });
      const results = await Promise.all(promises);
      setPokemons(results);
      setCharge(false);
      setTotal(Math.ceil(data.count / 24));
      setNotFound(false);
    } catch (err) {}
  };

  useEffect(() => {
    if (!searching) {
      fetchPokemons();
    }
  }, [page]);

  const onSearch = async (pokemon) => {
    if (!pokemon) {
      return fetchPokemons();
    }
    setCharge(true);
    setNotFound(false);
    setSearching(true);
    const result = await searchPokemon(pokemon);
    if (!result) {
      setNotFound(true);
      setCharge(false);
      return;
    } else {
      setPokemons([result]);
      setPage(0);
      setTotal(1);
    }
    setCharge(false);
    setSearching(false);
  };

  return (
    <div className="App">
      <h1 className="title">Pokedex</h1>
      <Search onSearch={onSearch} />
      {notFound ? (
        <div>No se encontro lo que buscabas.</div>
      ) : (
        <Cards
          charge={charge}
          pokemons={pokemons}
          page={page}
          setPage={setPage}
          total={total}
        />
      )}
    </div>
  );
}

export default App;
