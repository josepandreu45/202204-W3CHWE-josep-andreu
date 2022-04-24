import Component from "../Component.js";

class HeaderComponent extends Component {
  constructor(parentElement) {
    super(parentElement, "header", "header");

    this.render();
  }

  render() {
    this.element.innerHTML = `<h1 class="header__title"> <img src="./imagenes/TituloUniversoPokémon.png" alt="titulo pokemon"></h1>
    <nav class="header__nav">
      <ul class="header__list">
        <li><a href="">Listado Pokemon</a></li>
        <li><a href="">Mis Pokemon</a></li>
      </ul>
    </nav>`;
  }
}

export default HeaderComponent;
