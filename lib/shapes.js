// Exports `Triangle`, `Circle`, and `Square` classes
class Circle {
  constructor(data) {
    this.data = data;
  }

  render() {
    return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="100" fill="${this.data.shapeColor}" stroke-width="5" text-anchor="middle" alignment-baseline="middle"/>
        <text x="150" y="110" fill="${this.data.textColor}" font-size="80" text-anchor="middle" alignment-baseline="middle">${this.data.text}</text> 
      </svg>`;
  }
}

class Triangle {
  constructor(data) {
    this.data = data;
  }

  render() {
    return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <polygon points= "100, 30, 30, 170, 170, 170" fill="${this.data.shapeColor}" stroke-width="5"/>
        <text x="100" y="150" fill="${this.data.textColor}" font-size="40" text-anchor="middle" alignment-baseline="middle">${this.data.text}</text>
      </svg>`;
  }
}

class Square {
  constructor(data) {
    this.data = data;
  }

  render() {
    return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="10" width="200" height="200" fill="${this.data.shapeColor}" stroke-width="5"/>
        <text x="110" y="110" fill="${this.data.textColor}" font-size="80" text-anchor="middle" alignment-baseline="middle">${this.data.text}</text>
      </svg>`;
  }
}

function generateShapes(data) {
  if (data.shape === "Circle") {
    return new Circle(data).render();
  } else if (data.shape === "Triangle") {
    return new Triangle(data).render();
  } else {
    return new Square(data).render();
  }
}

module.exports = generateShapes;
