const managerQuestions = [
    {
        type: "input",
        name: "managerName",
        message: "Please enter the team manager's name:"
    },
    {
        type: "input",
        name: "managerId",
        message: "Please enter the manager's ID:",
    },
    {
        type: "input",
        name: "managerEmail",
        message: "Please enter the manager's email:",
    },
    {
        type: "input",
        name: "managerOffNo",
        message: "Please enter the manager's office number:"
    }
]

const engineerQuestions = [
    {
        type: "input",
        name: "engineerName",
        message: "Please enter the engineer's name:"
    },
    {
        type: "input",
        name: "engineerId",
        message: "Please enter the engineer's ID:",
    },
    {
        type: "input",
        name: "engineerEmail",
        message: "Please enter the engineer's email:",
    },
    {
        type: "input",
        name: "engineerGithub",
        message: "Please enter the engineer's GitHub username:",
    },
]

const internQuestions = [
    {
        type: "input",
        name: "internName",
        message: "Please enter the intern's name:"
    },
    {
        type: "input",
        name: "internId",
        message: "Please enter the intern's ID:",
    },
    {
        type: "input",
        name: "internEmail",
        message: "Please enter the intern's email:",
    },
    {
        type: "input",
        name: "school",
        message: "Please enter the intern's school:",
    },
]

const continueQuestions = [
    {
        type: "list",
        name: "NextTeammate",
        message: "Would you like to add another team member?",
        choices: ["Engineer", "Intern", "No"],
    },
]



module.exports = {
    managerQuestions: managerQuestions,
    engineerQuestions: engineerQuestions,
    internQuestions: internQuestions,
    continueQuestions: continueQuestions,
}
