// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const { type } = require('os');
const { clear } = require('console');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the name of your project?',
    validate: value => {
      if (value) {
        return true;
      } else {
        console.log('Please enter your project title');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'description',
    message: 'Describe your project',
    validate: value => {
      if (value) {
        return true;
      } else {
        console.log('Please describe your project');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
    validate: value => {
      if (value) {
        return true;
      } else {
        console.log('Please enter your email address');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username?',
    validate: value => {
      if (value) {
        return true;
      } else {
        console.log('Please enter your GitHub username');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Provide installation instructions.',
    validate: value => {
      if (value) {
        return true;
      } else {
        console.log('You must enter installation instructions');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'usage',
    message: 'How can your project be used?',
    validate: value => {
      if (value) {
        return true;
      } else {
        console.log('Please enter how to use your project');
        return false;
      }
    }
  },
  {
    type: 'list',
    name: 'license',
    message: 'What license are you using for your project?',
    choices: ['Apache 2.0', 'MIT', 'GPL 3.0', 'None'],
  },
  {
    type: 'input',
    name: 'contribution',
    message: 'Provide instructions on how users can contribute to your project',
    validate: contribution => {
      if (contribution) {
        return true;
      } else {
        console.log('Please provide instructions on how to contribute to this project');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Provide instructions on how users can test your project',
    validate: tests => {
      if (tests) {
        return true;
      } else {
        console.log('Please provide instructions on how to test your project');
        return false;
      }
    }
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, err => {
    if (err) throw err;
    console.log("README.md created!");
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then(readmeData => {
    writeToFile("./dist/README.md", generateMarkdown(readmeData));
  });
}

// Function call to initialize app
init();
