import Component from "../Component.js";

class FooterComponent extends Component {
  constructor(parentElement) {
    super(parentElement, "footer", "botones");

    this.render();
  }

  render() {
    this.element.innerHTML = ` <button class="anterior">ANTERIOR</button>
      <button class="siguiente">SIGUIENTE</button>`;
  }
}

export default FooterComponent;
