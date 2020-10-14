// function to generate collaborators & usernames
// function renderCollaborators(collaborators1, collaborators2)
//     for(i = 0; i < data.collaborators1.length; i++) {
//         var collaborators1 = data.collaborators1[i];
//         var collaborators2 = data.collaborators2[i];
//         return `![collaborators1](collaborators2)` ;
//     }

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description

  ${data.description}

  ## Table of Contents

  * [Installation](#installation)

  * [Usage](#usage)

  * [Credits](#credits)

  * [License](#license)

  * [Contributing](#contributing)

  * [Tests](#tests)

  * [Questions](#questions)

  ## Installation

  ${data.installInstructions}

  ## Usage

  ${data.usage}

  ## Credits

  Collaborators

  ${data.collaborators1}, ${data.collaborators2}

  Other

  ${data.credits}

  ## License

  ${data.license}

  ## Contributing

  ${data.contributors}

  ## Tests

  ${data.testing}

  ## Questions

  Feel free to email me at ${data.email} with any questions about the repository. Visit my GitHub profile, [${data.ghUserName}](https://github.com/${data.ghUserName}/), to see more of my work!
  
  `;
  }
  
  module.exports = generateMarkdown;
  