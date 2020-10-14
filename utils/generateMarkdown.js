// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ![License](https://img.shields.io/badge/License-${data.license}-lightblue.svg)

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
  