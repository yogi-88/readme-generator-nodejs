// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Description
     ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [License](#license)
  * [Questions](#questions)
  
  ## Installation

  ## Usage
  ${data.usage}

  ## Contributing
  ${contributing}

  ## Tests
  ${tests}

  GitHub: https://github.com/${data.github}
  Email: ${data.email}

`;
}

module.exports = generateMarkdown;
