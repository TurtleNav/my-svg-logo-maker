// Import our dependencies
const inquirer = require("inquirer");


// Begin prompting the user 
function startPrompt() {
    const questions = [
        {
            "message": "Enter the text you wish to place in your logo SVG (max 3 characters long)",
            "type": "input",
            "name": "logoText",
            "validate": (x) => x.length < 4
        },
        {
            "message": "Enter a color you would like to render your logo as? Please enter a valid color name or hex color code",
            "type": "input",
            "name": "logoColor",
            "validate": (x) => validateColorInput(x)
        }
    ]
    inquirer
        .prompt(questions)
        .then((answers => {
            console.log(answers);
        }))
}

//  Global entry point function
function init() {
    startPrompt();
}

init()