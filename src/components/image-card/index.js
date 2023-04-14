import "./styles.scss";

class ImageCard extends HTMLElement {
  static observedAttributes = ["status", "repeat", "zoom", "delete", "image"];

  connectedCallback() {
    console.log("I am connecting");
    this.render();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.render();
  }

  render() {
    const statusBaseSrc = "src/components/image-card/assets";
    const status =
      (this.attributes.status && this.attributes.status.value) || "uploading";

    const imageSource =
      (this.attributes.image && this.attributes.image.value) || "";

    this.innerHTML = `
      <div class="image-card-class">
        <div class="image-card-header">
          <div class="status ${
            this.attributes.status && "shown"
          }"><img src="${statusBaseSrc}/status-${status}.png"></div>
          <div class="repeat ${
            this.attributes.repeat && "shown"
          }"><img src="${statusBaseSrc}/repeat.png"></div>
          <div class="zoom shown"><img src="${statusBaseSrc}/zoom-in.png"></div>
          <div class="cancel shown"><img src="${statusBaseSrc}/cancel.png"></div>
          <div class="image"><img src="${imageSource}"></div>
        </div>
      </div>
    `;
  }
}

customElements.define("image-card", ImageCard);
