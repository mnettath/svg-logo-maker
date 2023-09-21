// Exports `Triangle`, `Circle`, and `Square` classes
class Circle {
  constructor() {
    this.color = "";
  }
  setColor(color) {
    this.color = color;
  }

  render() {
    return `<circle cx="110" cy="110" r="90" fill="${this.color}" stroke-width="5"/>`;
  }
}

class Triangle {
  constructor() {
    this.color = "";
  }
  setColor(color) {
    this.color = color;
  }

  render() {
    return `<polygon points= "110, 10, 10, 170, 215, 170" fill="${this.color}" stroke-width="5"/>`;
  }
}

class Square {
  constructor() {
    this.color = "";
  }
  setColor(color) {
    this.color = color;
  }
  render() {
    return `<rect x="10" y="10" width="200" height="200" fill="${this.color}" stroke-width="5"/>`;
  }
}

// exporting shapes
module.exports = { Square, Triangle, Circle };
