// Exports `Triangle`, `Circle`, and `Square` classes
function generateShapes(data) {
  // Class for circle
  if (data.shape === "Circle") {
    return `<svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <circle cx="25" cy="75" r="20" fill=${data.shapeColor} stroke-width="5">
    <text x="10" y="10" color=${data.textColor}>${data.text}</text>
    </circle>
    </svg>`;
  } else if (data.shape === "Triangle") {
    return `<svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <polygon points= "100, 30, 30, 170, 170, 170" fill=${data.shapeColor} stroke-width="5">
    <text x="10" y="10" color=${data.textColor}>${data.text}</text>
    </polygon>
    </svg>`;
  } else {
    return `<svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <rec x="30" y="30" width="140" height="140" fill ${data.shapeColor} stroke-width="5">
    <text x="10" y="10" color=${data.textColor}>${data.text}</text>
    </rec>
    </svg>`;
  }
}

// Class for triangle

// Class for square

module.exports = generateShapes;
