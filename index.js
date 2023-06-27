const inquirer = require('inquirer');
const fs = require('fs');
const genertateShape = require('./lib/shapes')


const questions = [
    {
        // Select 3 characters for logo
        type: "input",
        name: 'text',
        message: 'Enter up to 3 characters',
    },
    {
        // Select color of characters
        type: 'input',
        name: 'textColor',
        message: 'Enter character color',
    },
    {
        // Select a shape
        type: 'list',
        name: 'shape',
        message: 'Select a shape',
        choices: ["Circle", "Triangle", "Square"]
    },
    {
        // Selects shape color
        type: 'input',
        name: 'shapeColor',
        message: 'Enter shape color',
    },
];
function init() {
    inquirer
        .prompt(questions)
        .then(
            (answers) => {
                console.log(answers)
                const README = generateSVG(answers);
                // Create logo.svg file based on user's parameters
                fs.writeFile('logo.svg', svg, (err) =>
                    err ? console.log(err) : console.log('Successfully created logo.svg!')
                );
            }
        )
}
init();