// Jest tests for shapes
const GenerateShapes = require("./shapes");

// Each shape class should be tested for a render() method that returns a string for the corresponding SVG file with the given shape color

describe("Circle", () => {
  it("should generate a valid SVG for a Circle", () => {
    const shape = new Circle();
    shape.setColor("blue");
    expect(shape.render()).toEqual(
      `<circle cx="150" cy="100" r="100" fill="${this.data.shapeColor}"/>`
    );
  });
});
