// Runs the application using imports from lib/

const inquirer = require("inquirer");
const fs = require("fs"); // includes the Node.js build in file system module in your JS code
const { Circle, Triangle, Square } = require("./lib/shapes"); // imports circle, triangle, and square classes from shapes.js
const SVG = require("./lib/svg"); // imports SVG class from svg.js

inquirer
  .prompt([
    {
      type: "input",
      message: "Please enter up to 3 characters for your logo",
      name: "text",
      validate: function (input) {
        if (input.length >= 1 && input.length <= 3) {
          return true;
        } else {
          return "Please enter up to 3 characters.";
        }
      },
    },
    {
      // prompt for text color where user can type in color keyword OR hexadecimal number
      type: "input",
      message:
        "To set the text color, please enter a color keyword OR hexadecimal number",
      name: "textColor",
      validate: function (input) {
        const validColorKeywords = [
          "red",
          "green",
          "blue",
          "yellow",
          "orange",
          "purple",
          "pink",
          "black",
          "gray",
          "white",
        ];

        const hexColorRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;

        if (
          validColorKeywords.includes(input.toLowerCase()) ||
          hexColorRegex.test(input)
        ) {
          return true;
        } else {
          return "Please enter a valid color keyword or hexadecimal color code";
        }
      },
    },
    {
      // prompt where user can select from a list of shapes: circle, triangle and square
      type: "list",
      message: "Please select the shape that your logo will be",
      choices: ["Circle", "Triangle", "Square"],
      name: "shape",
    },
    {
      // prompt for shape color where user can enter a color keyword or hexadecimal number
      type: "input",
      message:
        "To set the shape color, please enter a color keyword OR hexadecimal number",
      name: "shapeColor",
      validate: function (input) {
        const validColorKeywords = [
          "red",
          "green",
          "blue",
          "yellow",
          "orange",
          "purple",
          "pink",
          "black",
          "gray",
          "white",
        ];

        const hexColorRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;

        if (
          validColorKeywords.includes(input.toLowerCase()) ||
          hexColorRegex.test(input)
        ) {
          return true;
        } else {
          return "Please enter a valid color keyword or hexadecimal color code";
        }
      },
    },
  ])
  .then((data) => {
    console.log(data);

    // Creating an instance of the SVG class
    const svgCanvas = new SVG();

    switch (data.shape) {
      case "Circle":
        // create a new Circle
        const circle = new Circle();
        // set the color
        circle.setColor(data.shapeColor);
        // goes into the svg.js
        svgCanvas.renderShape(circle);
        break;
      case "Triangle":
        // create a new Circle
        const triangle = new Triangle();
        // set the color
        triangle.setColor(data.shapeColor);
        // goes into the svg.js
        svgCanvas.renderShape(triangle);
        break;
      case "Square":
        // create a new Circle
        const square = new Square();
        // set the color
        square.setColor(data.shapeColor);
        // goes into the svg.js
        svgCanvas.renderShape(square);
        break;
    }

    svgCanvas.renderText(data.text, data.textColor);

    const svg = svgCanvas.render();

    // after all prompts are taken care of there needs to be a new svg file created named logo.svg
    fs.writeFile("./examples/logo.svg", svg, (error) => {
      if (error) {
        console.log(error);
      } else {
        console.log("Generated logo.svg");
      }
    });
  });
