const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown")

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
        if (err) {
            return console.log(err);
        }
        console.log("Writing your README...")
    })
}

// array of questions for user
function init() {inquirer.prompt([
    {
        type: "input",
        name: "title",
        message: "What is the name of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Please enter a description of your project"
    },
    {   type: "input",
        name: "installInstructions",
        message: "What steps should users follow to install your project?"
    },
    {
        type: "input",
        name: "usage",
        message: "Please enter instructions for using your project"
    },
    {
        type: "input",
        name: "credits",
        message: "Please list any individuals or third parties you would like to credit in your README"
    },
    {
        type: "list",
        name: "license",
        message: "What kind of license would you like to use for your project?",
        choices: ["None", "Apache", "GNU", "MIT", "BSD2", "BSD3", "Boost", "Eclipse", "GNU3", "GNU2", "GNU-2.1", "Mozilla", "Unlicense"]
    },
    {
        type: "input",
        name: "contributors",
        message: "What guidelines should users follow when contributing to this repository?"
    },
    {
        type: "input",
        name: "testing",
        message: "Please provide instructions or examples for users who would like to run tests on your project"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?"
    },
    {
        type: "input",
        name: "ghUserName",
        message: "What is your GitHub username?"
    }
]).then(function(response) {
    const inqAnswers = generateMarkdown({...response});

    // call writeToFile function with "README.md" and inqAnswers as arguments
    writeToFile("README.md", inqAnswers);
});
};

// function call to initialize program
init();
