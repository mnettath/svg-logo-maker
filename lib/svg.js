class SVG {
  constructor() {
    this.textElement = "";
    this.shapeElement = "";
  }

  renderShape(shape) {
    this.shapeElement = shape.render();
  }
  // Function to render a text element with the provided message and color
  renderText(text, color) {
    this.textElement = `<text
          x="150"
          y="110"
          fill="${color}"
          font-size="80"
          text-anchor="middle"
          alignment-baseline="middle"
        >
          ${text}
        </text>`;
  }

  render() {
    // render the SVG element
    return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
    ${this.shapeElement}
    ${this.textElement}
    </svg>`;
  }
}

module.exports = SVG;
