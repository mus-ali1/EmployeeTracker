# EmployeeTracker

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


### Demo of Application

[Employee Tracker]()



### Table of Contents

- [Description](#description)
- [User-Story](#User-Story)
- [Acceptence-Criteria](#Acceptence-Criteria)
- [Installation](#Installation)
- [Usage](#usage)
- [Credits](#Credits)
- [Questions](#questions)
- [License](#license)
- [Application Image](#application-image)

## Description

A command line application which utilizes ```node JS``` ```Express``` and ```Mysql``` to provide a useful and
easily accessible employee management system, perfect for any employer who wants to keep track of employees as part of
their organisation. 

## User Story 


```md
AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business
```
# Acceptance Criteria 

```md
GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database 
```

# Installation 

clone repo ``` https://github.com/mus-ali1/EmployeeTracker.git```

Run the following command from the terminal: 

```npm i```


## Usage

1. Create dotenv file at the top of your file structure, which should contain the following 
 ```DB_NAME=``` ```DB_PASSWORD=``` ```DB_USER=```

2. Navigate to DB file

3. Ensure MySQL is installed and set up on your computer before using this application. A guide can be found [here](https://dev.mysql.com/doc/mysql-installation-excerpt/5.7/en/)


3. Initialise the database by running the following commands in the terminal: 
```mysql -u root -p```
```source db/schema.sql```
```source db/seeds.sql```

4. Run node index.js

## Credits

Other Contributors: 
  N/A

  Third Party Technologies:
  The Third Party Code used:
 - console.table
 -  inquirer
 -  mysql2
 -  dotenv

## Questions

If you have any questions feel free to contact me here:

 ##### Github: [github.com/mus-ali1](https://github.com/mus-ali1)
 

 ##### Email: [mustafa_a_ali@outlook.com](mailto:mustafa_a_ali@outlook.com?subject=[GitHub])

 If you'd like to open an issue directly, use the following link. 

 [open an issue](https://github.com/mus-ali1/EmployeeTracker/issues)


## License

[MIT](https://opensource.org/licenses/MIT)

Copyright <2021> <Mustafa Ali>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.



## Application Image

 ![Image of Application]()