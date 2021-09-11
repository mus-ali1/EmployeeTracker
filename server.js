// Import dependencies
const mysql = require("mysql");
const inquirer = require("inquirer");
const express = require("express");
const cTable = require("console.table");


// Requires and configure dotenv package
require('dotenv').config()

// This app starts a server and listens on port 3000 for connections
const app = express();
const PORT = 3000;


// This Middleware allows the data being sent to our server in POST and PUT requests to be stored  as JSON object (express.json) ,
// (express.urlencoded) allows the incoming request object to be recognised as a strings or arrays.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Creates connection to database
const connection = mysql.createConnection({

    host: "localhost",
    port: 3000,
    user: "root",
    password: process.env.DB_PASSWORD,
    database: "employeesDB",
});

// This is a error handling function which throws an error if there is no connection to our database and 
// runs our initTracker function if the connection is successfull.
connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }

    console.log("connected as id " + connection.threadId);

    initTracker();
});


function initTracker() {
    inquirer
        .prompt({
            name: "action",
            type: "list",
            message: "Welcome to the employee tracker management system. What would you like to do?",
            choices: [
                {
                    name: "ADD a department",
                    value: "addDepartment",
                },
                {
                    name: "ADD a role",
                    value: "addRole",
                },
                {
                    name: "ADD an employee",
                    value: "addEmployee",
                },
                {
                    name: "VIEW all departments, roles, or employees",
                    value: "view",
                },
                {
                    name: "UPDATE employee roles",
                    value: "update",
                },
                {
                    name: "DELETE a department",
                    value: "deleteDepartment",
                },
                {
                    name: "DELETE a role",
                    value: "deleteRole",
                },
                {
                    name: "DELETE an employee",
                    value: "deleteEmployee",
                },
                new inquirer.Separator(),
                {
                    name: "Exit Employee Tracker",
                    value: "exit",
                },
            ]
        })


        // This function allows the relevant function for each case to run if it is selected, the switch expression
        //evaluates the expression inputed this is compared with the value of each case in the structure if there is a match, the
        // associated block of code is executed, the break keyword breaks out of the switch block. This will stop the execution of more execution of code and/or case testing inside the block.
        .then(function (answer) {
            switch (answer.action) {
                case "view":
                    viewAll();
                    break;

                case "addDepartment":
                    addDepartment();
                    break;

                case "addRole":
                    addRole();
                    break;

                case "addEmployee":
                    addEmployee();
                    break;

                case "update":
                    updateRole();
                    break;

                case "deleteDepartment":
                    deleteDepartment();
                    break;

                case "deleteRole":
                    deleteRole();
                    break;

                case "deleteEmployee":
                    deleteEmployee();
                    break;

                case "exit":
                    connection.end();
                    break;
            }
        });
}

