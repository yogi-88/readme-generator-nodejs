const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    //Title
    {
        type: 'input',
        name: 'title',
        message: 'What is you project title?'
    },
    //Description
    {
        type: 'input',
        name: 'description',
        message: 'Please put your project description'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please mention the installation instructions for your project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide the usage instructions for your project'
    },

    //License (multiple choice)
    {
        type: 'list',
        choices: ['MIT','GPL','GNU','None'],
        name: 'license',
        message: 'Which licens ewould you like to use for your project?'
    },
    //Contributing
    {
        type: 'input',
        name: 'Contributions',
        message: 'Provide the contribution guidelines for your project'
    },
    //Tests
    {
        type: 'input',
        name: 'tests',
        message: 'What are the test instructions for your project?'
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },

];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName.md, data, (err)=> {
        if(err) {
            console.error(err);
        } else {
            console.log('Success!');
        }
    });

}

// function to initialize program
function init() {
    inquirer
    .prompt(questions)
    .then(answers => {
        console.log(answers);
        writeToFile('README.md', generateMarkdown({...answers}))
    });
    

}

// function call to initialize program
init();
