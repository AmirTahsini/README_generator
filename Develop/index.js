const inquirer = require('inquirer');

const {writeFile} = require('fs').promises;

const questions = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'What is your project title?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Provide your project description',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Describe how the app is installed',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use',
      },
      {
        type: 'input',
        name: 'license',
        message: 'Provide license info',
      },
      {
        type: 'input',
        name: 'credits',
        message: 'List any collaborators',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Include any tests for your application',
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter your email address',
      },
    ]);
  };

  const generateREADME = ({title, description, installation, usage, license, credits, tests, github, email}) =>
    `# ${title}

     ## Table of Contents

     ## Description
     
     ${description}
     
     ## Installation
     
     ${installation}
     
     ## Usage
     
     ${usage}
     
     ## License
     
     ${license}
    
     ## Credits
     
     ${credits}

     ## Tests

     ${tests}

     ## Questions

     Link to GitHub repo: (https://github.com/${github})

     If you have any questions please send an email to: (mailto: ${email})`


// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
const init = () => {
    promptUser()
      // Use writeFile method imported from fs.promises to use promises instead of
      // a callback function
      .then((answers) => writeFile('README.md', generateREADME(answers)))
      .then(() => console.log('Successfully wrote to README.md'))
      .catch((err) => console.error(err));
  };

// Function call to initialize app
init();
