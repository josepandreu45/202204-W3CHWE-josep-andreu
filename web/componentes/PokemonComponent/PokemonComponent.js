import Component from "../Component.js";

class PokemonComponent extends Component {
  name;
  image;
  type;
  weight;
  constructor(parentElement, name, image, type, weight) {
    super(parentElement, "section", "pokemon");
    this.name = name;
    this.image = image;
    this.type = type;
    this.weight = weight;
    this.render();
  }

  render() {
    this.element.innerHTML = `
  
        <h2>${this.name}</h2>

        <img
          class="pokemon__imagen"
          src="${this.image}"
          alt="foto de picachu"
          width="150"
          height="150"
        />
        <ul class="pokemon__list">
          <li>Type: ${this.type}</li>
          <li>Weight: ${this.weight}</li>
        </ul>
        <div class="pokemon__buttons">
          <i class="minus"
            ><img
              src="imagenes/minus.ico"
              alt="icono quitar"
              height="25"
              width="25"
          /></i>
          <i class="plus"
            ><img
              src="imagenes/plus.ico"
              alt="icono añadir"
              height="25"
              width="25"
          /></i>
        </div>
      
      `;
  }
}

export default PokemonComponent;
