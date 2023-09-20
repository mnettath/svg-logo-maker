// Jest tests for shapes
// importing shapes from the shapes.js
const { Square, Triangle, Circle } = require("./shapes");

// Each shape class should be tested for a render() method that returns a string for the corresponding SVG file with the given shape color

describe("Circle", () => {
  it("should generate a valid SVG for a Circle", () => {
    const expectedSvg = `<circle cx="150" cy="100" r="100" fill="blue" stroke-width="5"/>`;
    const shape = new Circle();
    shape.setColor("blue");
    const actualSvg = shape.render();
    expect(actualSvg).toEqual(expectedSvg);
  });
});

describe("Triangle", () => {
  it("should generate a valid SVG for a Triangle", () => {
    const expectedSvg = `<polygon points= "100, 30, 30, 170, 170, 170" fill="red" stroke-width="5"/>`;
    const shape = new Triangle();
    shape.setColor("red");
    const actualSvg = shape.render();
    expect(actualSvg).toEqual(expectedSvg);
  });
});

describe("Square", () => {
  it("should generate a valid SVG for a Square", () => {
    const expectedSvg = `<rect x="10" y="10" width="200" height="200" fill="green" stroke-width="5"/>`;
    const shape = new Square();
    shape.setColor("green");
    const actualSvg = shape.render();
    expect(actualSvg).toEqual(expectedSvg);
  });
});
