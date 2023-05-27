// export const searchPokemon = async (pokemon) => {
//   try {
//     let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
//     const response = await fetch(url);
//     const data = await response.json();
//     return data;
//   } catch (err) {}
// };

export const searchPokemon = async (pokemon) => {
  try {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=1010`;
    const response = await fetch(url);
    const data = await response.json();

    const results = data.results.filter((result) => {
      const name = result.name.toLowerCase();
      const id = result.url.split("/").slice(-2, -1)[0];
      return name.includes(pokemon.toLowerCase()) || id.includes(pokemon);
    });

    const pokemonDetails = await Promise.all(
      results.map(async (result) => {
        const response = await fetch(result.url);
        const data = await response.json();
        return data;
      })
    );
    return pokemonDetails;
  } catch (err) {}
};

export const getPokemons = async (limit = 24, offset = 0) => {
  try {
    let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (err) {}
};

export const getPokemonData = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (err) {}
};
