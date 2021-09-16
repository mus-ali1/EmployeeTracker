INSERT INTO department (name)
VALUES 
('IT'),
('Finance & Accounting'),
('Sales & Marketing'),
('Operations');


INSERT INTO roles (title, salary, department_id)
VALUES
('Full Stack Developer', 80000, 1),
('Software Engineer', 120000, 1),
('Accountant', 10000, 2), 
('Finanical Analyst', 150000, 2),
('Marketing Coordindator', 70000, 3), 
('Sales Lead', 90000, 3),
('Project Manager', 100000, 4),
('Operations Manager', 90000, 4);


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
('Davis', 'Simpson', 2, null),
('Jude', 'Law', 1, 1),
('Daniel', 'Craig', 4, null),
('Sarah', 'Jones', 3, 3),
('Tyler', 'Davids', 6, null),
('Tyrone', 'Roberts', 5, 5),
('Juel', 'Santana', 7, null),
('Ricky', 'Rose', 8, 7);

