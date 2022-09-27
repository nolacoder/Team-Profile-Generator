const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const { managerQuestions, engineerQuestions, internQuestions, continueQuestions } = require('./lib/questions');

const teamArr = [];

const askManagerQuestions = () => {
    inquirer.prompt(managerQuestions)
        .then((response) => {
            const newManager = new Manager(response.managerName, response.managerId, response.managerEmail, response.managerOffNo)
            addToTeamArr(newManager)
            console.log(teamArr);
            continueRoster();
        })
}

const askEngineerQuestions = () => {
    inquirer.prompt(engineerQuestions)
        .then((response) => {
            const newEngineer = new Engineer(response.engineerName, response.engineerId, response.engineerEmail, response.engineerGithub)
            addToTeamArr(newEngineer);
            console.log(teamArr);
            continueRoster();
        })
}

const askInternQuestions = () => {
    inquirer.prompt(internQuestions)
        .then((response) => {
            const newIntern = new Intern(response.internName, response.internId, response.internEmail, response.school)
            addToTeamArr(newIntern);
            console.log(teamArr);
            continueRoster();
        })
}

const addToTeamArr = (memberObj) => {
    return teamArr.push(memberObj)
}

const continueRoster = () => {
    return inquirer.prompt(continueQuestions)
        .then((response) => handleContinueResponse(response))
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

askManagerQuestions();

