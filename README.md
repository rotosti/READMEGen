# READMEGen

## Description

A simple application to create a professional looking README.md file.  This application uses the command line interface in conjunction with the NodeJS environment to create a file in the file system.

## Installation

The application uses NodeJS and the [Inquirer package](https://www.npmjs.com/package/inquirer). To get the required dependencies, you can use the following command in the CLI to get the dependency via npm.

```md
npm i
```

## Usage

To run the application, one needs to have the terminal pointing in the directory of the `index.js` file and invoke the following command in the command line:

```md
node index.js
```

The user will then answer the questions and the application will generate a file in the `generatedREADMEs` folder. 

## Functionality

The application uses the file system module of NodeJS and Inquirer.  The application gathers information using the CLI and passes that information into a generation function. That function returns a string with the structure of the markdown file.  Once the information is gathered, the file is generated with the name/title of the project + _README and stored in the generatedREADMEs directory.