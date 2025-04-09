// Import required packages
const inquirer = import('inquirer');
const { Client } = import('pg');
const dotenv = import('dotenv');
dotenv.config();

// Database connection setup
const db = new Client({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT
});

db.connect();

// Main menu function
function mainMenu() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'choice',
            message: 'What would you like to do?',
            choices: [
                'View All Departments',
                'View All Roles',
                'View All Employees',
                'Add Department',
                'Add Role',
                'Add Employee',
                'Update Employee Role',
                'Exit'
            ]
        }
    ]).then(answer => {
        switch (answer.choice) {
            case 'View All Departments':
                viewDepartments();
                break;
            case 'View All Roles':
                viewRoles();
                break;
            case 'View All Employees':
                viewEmployees();
                break;
            case 'Add Department':
                addDepartment();
                break;
            case 'Add Role':
                addRole();
                break;
            case 'Add Employee':
                addEmployee();
                break;
            case 'Update Employee Role':
                updateEmployeeRole();
                break;
            case 'Exit':
                db.end();
                console.log('Goodbye!');
                process.exit();
        }
    });
}

// Function placeholders for database interactions
function viewDepartments() {
    db.query('SELECT * FROM department', (err, res) => {
        if (err) throw err;
        console.table(res.rows);
        mainMenu();
    });
}

function viewRoles() {
    db.query('SELECT * FROM role', (err, res) => {
        if (err) throw err;
        console.table(res.rows);
        mainMenu();
    });
}

function viewEmployees() {
    db.query('SELECT * FROM employee', (err, res) => {
        if (err) throw err;
        console.table(res.rows);
        mainMenu();
    });
}

function addDepartment() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter department name:'
        }
    ]).then(answer => {
        db.query('INSERT INTO department (name) VALUES ($1)', [answer.name], (err) => {
            if (err) throw err;
            console.log('Department added!');
            mainMenu();
        });
    });
}

function addRole() {
    // Implementation for adding a role
}

function addEmployee() {
    // Implementation for adding an employee
}

function updateEmployeeRole() {
    // Implementation for updating employee roles
}

// Start the application
mainMenu();
