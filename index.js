const Employee = require('./lib/Employee');
const inquirer = require('inquirer');

const askInitialQuestions = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "ManagerName",
            message: "Please enter the team manager's name:"
        },
        {
            type: "input",
            name: "ManagerID",
            message: "Please enter the manager's ID:",
        },
        {
            type: "input",
            name: "ManagerEmail",
            message: "Please enter the manager's email:",
        },
        {
            type: "input",
            name: "ManagerOffNo",
            message: "Please enter the manager's office number:"
        }
    ]);
}

const continueRoster = () => {
    inquirer.prompt([
        {
            type: "list",
            name: "Next Teammate",
            message: ["Engineer", "Intern", "None"]
        },
    ])
}

const init = () => {
    askInitialQuestions()
        .then((answers) => {
            console.log(answers)
        })
        .then(() => continueRoster())
        .then((response) => console.log(response))
        .catch((err) => console.error(err))
}

init();
