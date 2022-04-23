const getPokemon = async () => {
  const response = await fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
  );
  const PokemonData = await response.json();
  return PokemonData;
};

(async () => {
  const pokemon = await getPokemon();
  return pokemon;
})();
