// Import dependencies
const mysql = require("mysql");
const inquirer = require("inquirer");
const express = require("express");
const cTable = require("console.table");

// This app starts a server and listens on port 3000 for connections
const app = express();
const PORT = 3000;


// This Middleware allows the data being sent to our server in POST and PUT requests to be stored  as JSON object (express.json) ,
// (express.urlencoded) allows the incoming request object to be recognised as a strings or arrays.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
