import Component from "../Component.js";

class FooterComponent extends Component {
  constructor(parentElement) {
    super(parentElement, "footer", "botones");

    this.render();
  }

  render() {
    this.element.innerHTML = ` <button>ANTERIOR</button>
      <button>SIGUIENTE</button>`;
  }
}

export default FooterComponent;
