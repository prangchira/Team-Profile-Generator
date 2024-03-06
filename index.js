const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");
const internal = require("stream");



// TODO: Write Code to gather information about the development team members, and render the HTML file.

const teamMember = [];


function getTeamInfo(){
    function getManagerInfo(){
        inquirer.prompt([{
            type: "input",
            name: "managerName",
            message: "Please input Manager's name:"
        },
        {
            type:"input",
            name: "managerId",
            message: "Please input Manager's ID:"
        },
        {
            type:"input",
            name: "managerEmail",
            message: "Please input Manager's email:"
        },
        {
            type:"input",
            name: "managerOfficeNumber",
            message: "Please input Manager's office number:"
        },
        ])
        .then((answer) =>{
            const manager = new Manager(
                answer.managerName,
                answer.managerId,
                answer.managerEmail,
                answer.managerOfficeNumber
            );
        teamMember.push(manager);
        addTeamMember();
        });
        
        
    }

    function addTeamMember(){
        inquirer.prompt([{
            type: "list", 
            name: "teamChoice",
            message: "Please add team member",
            choices: [
                "Engineer", 
                "Intern", 
                "Exit",
            ],   
        },])
        .then((userChoice) =>{
            // switch (userChoice.teamChoice) {
            //     case "Engineer":
            //       getEngineerInfo();
            //       break;
            //     case "Intern":
            //       getInternInfo();
            //       break;
            //     default:
            //       buildTeam();
            //   }
            if(userChoice.teamChoice === "Engineer"){
                getEngineerInfo();
            }else 
            if(userChoice.teamChoice === "Intern"){
                getInternInfo();
            }else
            buildTeam();
        });
    }

    function getEngineerInfo(){
        inquirer.prompt([{
            type: "input", 
            name: "engineerName",
            message: "Please input Engineer's name:",
        },
        {
            type:"input",
            name: "engineerId",
            message: "Please input Engineer's ID:",
        },
        {
            type:"input",
            name: "engineerEmail",
            message: "Please input Engineer's email:",
        },
        {
            type:"input",
            name: "engineerGithub",
            message: "Please input Engineer's Github:",
        }])
        .then((answer) => {
            const engineer = new Engineer(
                answer.engineerName,
                answer.engineerId,
                answer.engineerEmail,
                answer.engineerGithub
            );
            teamMember.push(engineer);
            addTeamMember();
        });
     
    }

    function getInternInfo(){
        inquirer.prompt([{
            type: "input",
            name: "internName",
            message: "Please input Intern's name:",
        },
        {
            type:"input",
            name: "internId",
            message: "Please input Intern's ID:",
        },
        {
            type:"input",
            name: "internEmail",
            message: "Please input Intern's email:",
        },
        {
            type:"input",
            name: "internSchool",
            message: "Please input Intern's School:",
        }])
        .then((answer)=>{
            const intern = new Intern(
                answer.internName,
                answer.internId,
                answer.internEmail,
                answer.internSchool
            );
            teamMember.push(intern);
            addTeamMember();
        });
    }

    function buildTeam(){
        if (!fs.existsSync(OUTPUT_DIR)) {
            fs.mkdirSync(OUTPUT_DIR);
          }
          fs.writeFileSync(outputPath, render(teamMember), "utf-8");
        }

 getManagerInfo();
}

getTeamInfo();
