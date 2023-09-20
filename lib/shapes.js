// Exports `Triangle`, `Circle`, and `Square` classes
function generateShapes(data) {
  // Class for circle
  if (data.shape === "Circle") {
    return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <circle cx="150" cy="100" r="100" fill="${data.shapeColor}" stroke-width="5" text-anchor="middle" alignment-baseline="middle"/>
    <text x="150" y="110" fill="${data.textColor}" font-size="80" text-anchor="middle" alignment-baseline="middle">${data.text}</text> 
    </svg>`;
  } else if (data.shape === "Triangle") {
    return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <polygon points= "100, 30, 30, 170, 170, 170" fill="${data.shapeColor}" stroke-width="5"/>
    <text x="100" y="150" fill="${data.textColor}" font-size="40" text-anchor="middle" alignment-baseline="middle">${data.text}</text>
    </svg>`;
  } else {
    // Square
    return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="10" width="200" height="200" fill="${data.shapeColor}" stroke-width="5"/>
    <text x="110" y="110" fill="${data.textColor}" font-size="80" text-anchor="middle" alignment-baseline="middle">${data.text}</text>
    </svg>`;
  }
}

module.exports = generateShapes;
