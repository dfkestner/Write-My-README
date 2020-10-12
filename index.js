// array of questions for user
// ask about collaborator name/GH username prompt options
const questions = [
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
        name: "collaborators1",
        message: "Please list the first and last names of any individuals who collaborated on this project (add a comma after each person's name)"
    },
    {
        type: "input",
        name: "collaborators2",
        message: "Please list the GitHub usernames of any individuals who collaborated on this project (add a comma after each username)"
    },
    {
        type: "input",
        name: "credits",
        message: "Please list any tutorials or third party assets used to create this project"
    },
    {
        type: "list",
        name: "license",
        message: "What kind of license would you like to use for your project?",
        choices: ["None", "Apache 2.0", "GNU General Public v3.0", "MIT", "BSD 2-Clause 'Simplified'", "BSD 3-Clause 'New' or 'Revised'", "Boost Software 1.0", "Creative Commons Zero v1.0 Universal", "Eclipse Public 2.0", "GNU Affero General Public v3.0", "GNU General Public v2.0", "GNU Lesser General Public v2.1", "Mozilla Public 2.0", "The Unlicense"]
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

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
