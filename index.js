//Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMD = require('./utils/generateMarkdown.js');

// List of questions for the user to answer in the console.
const questions = [{
    type: 'input',
    name: 'userName',
    message: 'Welcome, please enter your github USER ID:'
}, {
    type: 'input',
    name: 'userEmail',
    message: 'Enter in your email adress:'
}, {
    type: 'input',
    name: 'projectTitle',
    message: 'Enter in a project title:'
}, {
    type: 'input',
    name: 'projectDescription',
    message: 'Give a short description of your project:'
}, {
    type: 'input',
    name: 'installInstructions',
    message: 'Enter in any specific installation commands:',
    default: 'npm i'
}, {
    type: 'input',
    name: 'usageInformation',
    message: 'Describe how your application is used:',
}, {
    type: 'list',
    name: 'licenseChoice',
    message: 'What license applies to your project?',
    choices: ['Apache License 2.0', 'MIT License', 'Mozilla Public License 2.0', 'None']
}, {
    type: 'input',
    name: 'contributingData',
    message: "Add in any additional contribution information:"
}, {
    type: 'input',
    name: 'testCommand',
    message: 'Enter in any commands for running prebuilt tests on the project:',
    default: 'npm test'
}
];

// function that creates the readme files
function writeToFile(fileName, data) {
    fs.writeFile(`./generatedREADMEs/${fileName}`, data, (err) => {
        err ? console.error(err) : console.log('Successfully created README markdown file.')
    })
}

// intilization function
function init() {}
    inquirer
        .prompt(questions)
        .then((data) => {
            let mdFile = generateMD.generateMarkdown(data);
            writeToFile(`${data.projectTitle}_README.md`, mdFile);
        });


// Function call to initialize app
init();
