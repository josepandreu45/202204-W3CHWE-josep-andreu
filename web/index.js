import FooterComponent from "./componentes/FooterComponent/FooterComponent.js";
import HeaderComponent from "./componentes/HeaderComponent/HeaderComponent.js";
import PokemonComponent from "./componentes/PokemonComponent/PokemonComponent.js";

const getPokemon = async () => {
  const response = await fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
  );
  const pokemonData = await response.json();
  return pokemonData;
};

(async () => {
  const pokemon = await getPokemon();
  return pokemon;
})();

const container = document.querySelector(".container");

new HeaderComponent(container);
new PokemonComponent(container);
new FooterComponent(container);
