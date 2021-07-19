const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/engineer");



const newTeamMemeber = [
    {
        type: "list",
        message: "Would you like to add a new team member?",
        name: "teamMmeber",
        choices: ["Engineer", "Intern", "Done"]


    }
];

const managerQuestions = [
    {
        type: "input",
        message: "What is your team manager's name?",
        name: "name"
    },
    {
        type: "input",
        message: "What is your team manager's ID number?",
        name: "id"
    },
    {
        type: "input",
        message: "What is your team manager's email?",
        name: "email"
    },
    {
        type: "input",
        message: "What is your team manager's office number?",
        name: "officeNumber"
    }
];

const enginerrQuestions = [
    {
        type: "input",
        message: "What is this engineer's name?",
        name: "name"
    },
    {
        type: "input",
        message: "What is this engineer's ID number?",
        name: "id"
    },
    {
        type: "input",
        message: "What is this engineer's email?",
        name: "email"
    },
    {
        type: "input",
        message: "What is this engineer's GitHub username?",
        name: "gitHub"
    }


];

const internQuestions = [
    {
        type: "input",
        message: "What is this intern's name?",
        name: "name"
    },
    {
        type: "input",
        message: "What is this intern's ID number?",
        name: "id"
    },
    {
        type: "input",
        message: "What is this intern's email?",
        name: "email"
    },
    {
        type: "input",
        message: "What is this intern's school name?",
        name: "school"
    },
];

let currentTeam = [];

const askEnginfo = () => {
    return inquirer
    .prompt(engineerQuestions)
    .then((engineerAnswers) => {
        currentTeam.push(new Engineer(engineerAnswers));
    return askNewTeamMember()
});
};

const askIntinfo = () => {
    return inquirer
    .prompt(internQuestions)
    .then((internAnswers) => {
        currentTeam.push(new Intern(internAnswers));
    return askNewTeamMember()
});
};