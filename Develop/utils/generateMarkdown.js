// function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  ![${data.license} badge](https://img.shields.io/badge/license-${data.license}-blue)

  # ${data.title}

  ### Description
  ${data.about}

  ### Table of Contents
  + [Installation](#installation)
  + [Usage](#usage)
  + [Credits](#credits)
  + [License](#license)
  + [Tests](#tests)
  + [Questions?](#questions?)

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
  Github: [Profile](https://github.com/${data.github})  
  Email: ${data.email}

`;
}

module.exports = generateMarkdown;
