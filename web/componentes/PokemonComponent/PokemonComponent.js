import Component from "../Component.js";

class PokemonComponent extends Component {
  constructor(parentElement) {
    super(parentElement, "main", "pokemon-card");

    this.render();
  }

  render() {
    this.element.innerHTML = ` <section class="pokemon">
          <h2>Nombre Pokemon</h2>

          <img
            class="pokemon__imagen"
            src="imagenes/prueba.png"
            alt="foto de picachu"
            width="100"
            height="100"
          />
          <ul class="pokemon__list">
            <li>Type:</li>
            <li>Weight:</li>
          </ul>
        </section>`;
  }
}

export default PokemonComponent;
