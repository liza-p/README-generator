const fs = require("fs");
const util = require("util");
const axios = require("axios");
const inquirer = require("inquirer");

const questions = [
    {
    type: "input",
    name: "username",
    message: "Provide github username"
    },
    {
    type: 'input',
    message: "Enter your project Title",
    name: "title"
    },
    {
    type: 'input',
    message: "Enter your project Description",
    name: "description"
    },
    {
      type: 'input',
      message: "Enter link to the deployed application",
      name: "deployedLink"
      },
    {
    type: 'input',
    message: "Provide installation steps",
    name: "installation"
    },
    {
    type: 'input',
    message: "Provide usage instructions",
    name: "usage"
    },
    {
    type: "list",
    name: "license",
    message: "Select appropriate license",
    choices: [
          "MIT",
          "ISC",
          "GPL"
      ]
   },
   {
   type: "input",
   name: "contributing",
   message: "Enter instructions for contributors"
   },
   {
    type: "input",
    name: "test",
    message: "Enter testing instructions"
   }




    
    

];
    inquirer
  .prompt(questions)
  .then(userInput => {
    console.log(userInput);
    writeToFile("TheREADME.md", 
    `## ${userInput.title}
${userInput.description}
 ## Link to the deployed application
 -${userInput.deployedLink}

## Table of Contents
* [Installation](##Installation)
* [Usage](##Usage)
* [License](##License)
* [Contributing](##Contributing)
* [Tests](##Tests)
* [Author](##Author)

## Installation 
- ${userInput.installation}

## Usage
- ${userInput.usage}

## License
![License](https://img.shields.io/badge/license-${userInput.license}-blueviolet)

## Contributing 
- ${userInput.contributing}

## Tests
- ${userInput.test}

## Author
- [${userInput.username}](https://github.com/${userInput.username})

`
    );
  })
  .catch(error => {
    if(error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else when wrong
    }
  });





function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err){
        console.log(err)
    });
}


function init() {

}

init();
