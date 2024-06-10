// TODO: Include packages needed for this application
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
  {
     type: 'input',
     name: 'project title',
     message: "What is the name of your project ?"
  },
 {
    type: 'input',
    name: 'description',
    message: "Write a description for your project"
 },
 {
    type: 'input',
    name: "usage info",
    message: "What do the users need to know about using this repo/project ?"
 },
 {
    type: 'input',
    name: 'contributions',
    message: "what do users need to know about contributing to the repo/project ?"
 },
 {
    type: 'input',
    name: 'test inst',
    message: "What is the command to run tests ?",
    default: "npm test"
 },
 {
    type: 'input',
    name: 'installation command',
    message: "What is the command to install the dependencies ?",
    default: "npm i",
 },
 {
    type: 'list',
    name: 'license',
    message: "What license is your project under ?",
    choices: ['MIT', 'Apache 2.0', 'BSD 2', 'None']
 },
 {
    type: 'input',
    name: 'github username',
    message: "What is your Github username ?"
 },
 {
    type: 'input',
    name: 'email address',
    message: "What is your email address ?"
 },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
