// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `![License: ${license}](https://img.shields.io/badge/license-${license}-blue)`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === "MIT") {
    return 'https://opensource.org/license/mit-0/'
  }
  else if(license === 'Apache') {
    return 'https://opensource.org/license/apache2-0-php/'
  }
  else if(license === "Mozilla") {
    return 'https://opensource.org/license/mpl-2-0/'
  }
  else {
    return ''
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `
  ## License
  The license for this project is ${license}.
  Click here for details: ${renderLicenseLink(license)}
  `
}
const generateREADME = ({title, description, installation, usage, license, credits, tests, github, email}) =>
`
# ${title}

${renderLicenseBadge(license)}

## Table of Contents
- [Project Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Credits](#credits)
- [Tests](#tests)
- [Questions](#questions)

## Description
    
${description}
    
## Installation
    
${installation}
    
## Usage
    
${usage}
    
${renderLicenseSection(license)}

## Credits
    
${credits}

## Tests

${tests}

## Questions

Link to GitHub repo: (https://github.com/${github})

If you have any questions please send an email to: (mailto: ${email})
`;

module.exports = generateREADME;
