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
    //Installation guide
    //Usage
    //License (multiple choice)
    {
        type: 'list',
        choices: ['MIT','GPL','GNU'],
        name: 'license',
        message: 'What is your license type?'
    }
    //Contributing
    //Tests
    //Questions
    //Github username
    //email address

];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('README.md', data, (err)=> {
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
        const markdown = generateMarkdown(answers);
        console.log(markdown);
    });
    

}

// function call to initialize program
init();
