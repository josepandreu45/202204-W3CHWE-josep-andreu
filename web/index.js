import FooterComponent from "./componentes/FooterComponent/FooterComponent.js";
import HeaderComponent from "./componentes/HeaderComponent/HeaderComponent.js";
import MainComponent from "./componentes/MainComponent/MainComponent.js";
import PokemonComponent from "./componentes/PokemonComponent/PokemonComponent.js";

const response = await fetch(
  "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20"
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

new MainComponent(container);

const main = document.querySelector(".pokemon-card");

pokemonList.forEach((pokemon) => {
  new PokemonComponent(
    main,
    pokemon.name.toUpperCase(),
    pokemon.sprites.other.home.front_default,
    pokemon.types[0].type.name,
    pokemon.weight
  );
});

new FooterComponent(container);

export default pokemonList;
