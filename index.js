const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const { managerQuestions, engineerQuestions, internQuestions, continueQuestions } = require('./src/questions');
const fs = require('fs');
const {generateHTML, generateCards} = require('./src/buildHtml');

const teamArr = [];

const askManagerQuestions = () => {
    inquirer.prompt(managerQuestions)
        .then((response) => {
            const newManager = new Manager(response.managerName, response.managerId, response.managerEmail, response.managerOffNo)
            addToTeamArr(newManager)
            continueRoster();
        })
}

const askEngineerQuestions = () => {
    inquirer.prompt(engineerQuestions)
        .then((response) => {
            const newEngineer = new Engineer(response.engineerName, response.engineerId, response.engineerEmail, response.engineerGithub)
            addToTeamArr(newEngineer);
            continueRoster();
        })
}

const askInternQuestions = () => {
    inquirer.prompt(internQuestions)
        .then((response) => {
            const newIntern = new Intern(response.internName, response.internId, response.internEmail, response.school)
            addToTeamArr(newIntern);
            continueRoster();
        })
}

const addToTeamArr = (memberObj) => {
    return teamArr.push(memberObj)
}

const continueRoster = () => {
    return inquirer.prompt(continueQuestions)
        .then((response) => {
            if (response.NextTeammate === "Engineer") {
                askEngineerQuestions();
            } else if (response.NextTeammate === "Intern") {
                askInternQuestions();
            } else {
                const htmlCards = generateCards(teamArr);
                const htmlPageContent = generateHTML(htmlCards)
                fs.writeFile('./dist/index.html', htmlPageContent, (err) =>
                    err ? console.log(err) : console.log('Successfully created index.html!')
                );
            }
        })
}

// const handleContinueResponse = (response) => {
//     if (response.NextTeammate === "Engineer") {
//         askEngineerQuestions();
//     } else if (response.NextTeammate === "Intern") {
//         askInternQuestions();
//     } else {
//         const htmlCards = generateCards(teamArr);
//         const htmlPageContent = generateHTML(htmlCards)
//         fs.writeFile('index.html', htmlPageContent, (err) =>
//             err ? console.log(err) : console.log('Successfully created index.html!')
//         );
//     }
// }

askManagerQuestions();

