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





// This function allows user to add department, this block of code runs when the case addDepartment in initTracker() is chosen, the user is prompted and a 
//connection.query function then runs which communicates with the database and inserts new department into the data set, error handling function to confirm 
//department has being added, if not throw err.
function addDepartment() {
    inquirer
        .prompt({
            name: "department_name",
            type: "input",
            message: "What is the department name?",
        })
        .then((answer) => {
            console.log("Adding a new department...\n");
            connection.query(
                `INSERT INTO department SET ?`,
                {
                    department_name: answer.department_name,
                },
                function (err, res) {
                    if (err) throw err;
                    console.log("New department added!\n");
                    // Call updateProduct AFTER the INSERT completes
                    initTracker();
                }
            );
        });
}







// This function allows us to query our database and display all employees, utilise console.table to show table of employees on terminal.
function displayAllEmployees() {
    let query = "SELECT * FROM employee ";
    connection.query(query, (err, res) => {
        if (err) throw err;

        console.log("\n\n ** Full Employee list ** \n");
        console.table(res);
    });
}

// This function allows us to query our database and display all roles, utilise console.table to show table of roles on terminal.
function displayAllRoles() {
    let query = "SELECT * FROM roles ";
    connection.query(query, (err, res) => {
        if (err) throw err;

        console.log("\n\n ** Full Role list ** \n");
        console.table(res);
    });
}

// This function allows us to query our database and display all departments, utilise console.table to show table of departments on terminal.
function displayAllDepartments() {
    let query = "SELECT * FROM department ";
    connection.query(query, (err, res) => {
        if (err) throw err;

        console.log("\n\n ** Full Department list ** \n");
        console.table(res);
    });
}

// Start our server so that it can begin listening to client requests.
app.listen(PORT, () => {

    // Log (server-side) when our server has started 
    console.log(`app listening at http://localhost:${PORT}`);
});
