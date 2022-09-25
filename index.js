const Employee = require('./lib/Employee');
const inquirer = require('inquirer');
const {managerQuestions, engineerQuestions, internQuestions} = require('./lib/questions');

const teamArr = [];

const askInitialQuestions = () => {
    inquirer.prompt(managerQuestions)
        .then((response) => addToTeamArr(response))
        .then(() => console.log(teamArr))
        .then(handleAdditionalMembers)
}

const askEngineerQuestions = () => {
    inquirer.prompt(engineerQuestions)
        .then((response) => addToTeamArr(response))
        .then(() => console.log(teamArr))
        .then(handleAdditionalMembers)
}

const askInternQuestions = () => {
    inquirer.prompt(internQuestions)
        .then((response) => addToTeamArr(response))
        .then(() => console.log(teamArr))
        .then(handleAdditionalMembers)
}

const addToTeamArr = (memberObj) => {
    return teamArr.push(memberObj)
 }

const continueRoster = () => {
    return inquirer.prompt([
        {
            type: "list",
            name: "NextTeammate",
            message: "Would you like to add another team member?",
            choices:["Engineer", "Intern", "No"],
        },
    ])
}

const handleContinueResponse = (response) => {
    if (response.NextTeammate === "Engineer") {
        askEngineerQuestions();
    } else if (response.NextTeammate === "Intern") {
        askInternQuestions();
    } else {
        console.log("Time to build html");
    }
}

const handleAdditionalMembers = () => {
    continueRoster()
        .then((response) => handleContinueResponse(response))
}

askInitialQuestions();

