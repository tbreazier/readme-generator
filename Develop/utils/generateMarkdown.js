// function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  # ${data.title}

  ### Description
  ${data.about}

  ### Table of Contents
  +[Installation](#installation)
  +[Usage](#usage)
  +[Credits](#credits)
  +[License](#license)
  +[Tests](#tests)
  +[Questions?](#questions?)

  ### Installation
  ${data.install}

  ### Usage
  ${data.usage}

  ### Credits
  ${data.credit}

  ### License
  ${data.license}

  ### Tests
  ${data.test}

  ### Questions?
  Email: ${data.email}
  Github: ${data.github}

`;
}

module.exports = generateMarkdown;
