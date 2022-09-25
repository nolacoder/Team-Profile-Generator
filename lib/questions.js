const managerQuestions = [
    {
        type: "input",
        name: "managerName",
        message: "Please enter the team manager's name:"
    },
    {
        type: "input",
        name: "managerID",
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
        name: "engineerID",
        message: "Please enter the engineer's ID:",
    },
    {
        type: "input",
        name: "engineerEmail",
        message: "Please enter the engineer's email:",
    },
    {
        type: "input",
        name: "github",
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
        name: "internID",
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



module.exports = {
    managerQuestions: managerQuestions,
    engineerQuestions: engineerQuestions,
    internQuestions: internQuestions,
}
