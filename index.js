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