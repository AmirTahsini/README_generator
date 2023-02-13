const inquirer = require('inquirer');

const {writeFile} = require('fs').promises;
const generateREADME = require('./utils/generateMarkdown');

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
        type: 'list',
        name: 'license',
        message: 'Select which license you would like to apply',
        choices: [
          'MIT',
          'Apache',
          'Mozilla'
        ]
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

  


// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
const init = () => {
    questions()
      // Use writeFile method imported from fs.promises to use promises instead of
      // a callback function
      .then((answers) => writeFile('README.md', generateREADME(answers)))
      .then(() => console.log('Successfully wrote to README.md'))
      .catch((err) => console.error(err));
  };

// Function call to initialize app
init();
