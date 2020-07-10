const fs = require("fs");
const util = require("util");
const axios = require("axios");
const inquirer = require("inquirer");

const questions = [
    {
    type: 'input',
    message: "Enter your README Title",
    name: "title"
    },
    {
    type: 'input',
    message: "Enter your README Description",
    name: "description"
    },
    
    

];
    inquirer
  .prompt(questions)
  .then(answers => {
    console.log(answers);
    writeToFile("README.md", 
    `## ${answers.title}
${answers.description}`)
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
