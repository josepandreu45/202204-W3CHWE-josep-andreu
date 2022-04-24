import FooterComponent from "./componentes/FooterComponent/FooterComponent.js";
import HeaderComponent from "./componentes/HeaderComponent/HeaderComponent.js";
import PokemonComponent from "./componentes/PokemonComponent/PokemonComponent.js";

const response = await fetch(
  "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
);

const pokemonData = await response.json();

const pokemonList = await Promise.all(
  pokemonData.results.map(async (pokemon) => {
    const responseUrl = await fetch(pokemon.url);
    return responseUrl.json();
  })
);

const container = document.querySelector(".container");

new HeaderComponent(container);
pokemonList.forEach((pokemon) => {
  new PokemonComponent(
    container,
    pokemon.name,
    pokemon.sprites.front_default,
    pokemon.types[0].type.name,
    pokemon.weight
  );
});

new FooterComponent(container);

export default pokemonList;
