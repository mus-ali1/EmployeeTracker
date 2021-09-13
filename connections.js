const mysql = require("mysql2");

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
    database: "employee_db",
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