const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./develop/utils/generateMarkdown.js');

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project? (Required)',
        validate: titleInput => {
            if (titleInput) {
              return true;
            } else {
              console.log('Please enter a title!');
              return false;
            }
        }
    },
    {
        type: 'input',
        name: 'about',
        message: 'Please describe your project (Required)',
        validate: aboutInput => {
            if (aboutInput) {
              return true;
            } else {
              console.log('Please enter a description!');
              return false;
            }
        }
    },
    {
        type: 'input',
        name: 'install',
        message: 'Please provide installation instructions for your project (Required)',
        validate: installInput => {
            if (installInput) {
              return true;
            } else {
              console.log('Please enter a instructions so we can install the app!');
              return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide instructions on how to use your project (Required)',
        validate: usageInput => {
            if (usageInput) {
              return true;
            } else {
              console.log('Please describe so users can enjoy the app!');
              return false;
            }
        }
    },
    {
        type: 'input',
        name: 'credit',
        message: 'Please list other contributors to the project (Required)',
        validate: creditInput => {
            if (creditInput) {
              return true;
            } else {
              console.log('Please enter none');
              return false;
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please select a license for your project (Required)',
        choices: ['GNU GPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'The Unlicense (None)'],
        validate: licenseInput => {
            if (licenseInput) {
              return true;
            } else {
              console.log('Please select a license!');
              return false;
            }
        }
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please describe the test performed on the project',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please enter your Github username (Required)',
        validate: githubInput => {
            if (githubInput) {
              return true;
            } else {
              console.log('Please enter your username!');
              return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address (Required)',
        validate: emailInput => {
            if (emailInput) {
              return true;
            } else {
              console.log('Please enter your email!');
              return false;
            }
        }
    }
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log('Readme created!');
    });
}

// function to initialize program
function init() {
    inquirer
        .prompt(questions)
        .then((data) => {
          return generateMarkdown(data);
        })
        .then((readme) => {
          writeToFile('README.md', readme);
        })
        .catch((err) => {
          console.log(err);
        });
}

// function call to initialize program
init();
