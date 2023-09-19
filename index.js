// Runs the application using imports from lib/

const inquirer = require("inquirer");
const fs = require("fs"); // includes the Node.js build in file system module in your JS code

inquirer
  .prompt([
    {
      // prompt for text where user can enter 3 characters
      type: "input",
      message: "Please enter 3 characters for your logo",
      name: "text",
      validate: function (input) {
        if (input.length === 3) {
          return true;
        } else {
          return "Please enter exactly 3 characters.";
        }
      },
    },
    {
      // prompt for text color where user can type in color keyword OR hexadecimal number
      type: "input",
      message:
        "To set the text color, please enter a color keyword OR hexadecimal number",
      name: "textColor",
      // TO DO: validation for if they do not type in a valid color keyword OR hexadecimal number
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
      // TO DO: validation for if they do not type in a valid color keyword OR hexadecimal number
    },
  ])
  .then((data) => {
    console.log(data);

    const svg = `<svg width="100" height="100">
    <rect width="100" height="100" fill="${data.shapeColor}" />
    <text x="10" y="50" fill="${data.textColor}">${data.text}</text>
  </svg>`;

    // after all prompts are taken care of there needs to be a new svg file created named logo.svg

    fs.writeFile("./examples/logo.svg", svg, (error) => {
      if (error) {
        console.log(error);
      } else {
        console.log("Generated logo.svg");
      }
    });
  });
