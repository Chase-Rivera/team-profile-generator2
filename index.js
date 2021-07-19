const inquirer = require("inquirer");
const fs = require("fs");



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