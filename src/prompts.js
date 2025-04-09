// Handles user input using inquirer
import inquirer from 'inquirer';
import * as queries from './queries.js';

export async function mainMenu() {
    const { action } = await inquirer.prompt([
        {
            type: 'list',
            name: 'action',
            message: 'What would you like to do?',
            choices: [
                'View All Departments',
                'View All Roles',
                'View All Employees',
                'Add a Department',
                'Add a Role',
                'Add an Employee',
                'Update an Employee Role',
                'Exit'
            ]
        }
    ]);

    switch (action) {
        case 'View All Departments':
            console.table(await queries.getDepartments());
            break;
        case 'View All Roles':
            console.table(await queries.getRoles());
            break;
        case 'View All Employees':
            console.table(await queries.getEmployees());
            break;
        case 'Add a Department':
            const { departmentName } = await inquirer.prompt([{ type: 'input', name: 'departmentName', message: 'Department name:' }]);
            await queries.addDepartment(departmentName);
            console.log('Department added!');
            break;
        case 'Add a Role':
            const { title, salary, departmentId } = await inquirer.prompt([
                { type: 'input', name: 'title', message: 'Role title:' },
                { type: 'input', name: 'salary', message: 'Salary:' },
                { type: 'input', name: 'departmentId', message: 'Department ID:' }
            ]);
            await queries.addRole(title, salary, departmentId);
            console.log('Role added!');
            break;
        case 'Add an Employee':
            const { firstName, lastName, roleId, managerId } = await inquirer.prompt([
                { type: 'input', name: 'firstName', message: 'First Name:' },
                { type: 'input', name: 'lastName', message: 'Last Name:' },
                { type: 'input', name: 'roleId', message: 'Role ID:' },
                { type: 'input', name: 'managerId', message: 'Manager ID (or leave blank for none):' }
            ]);
            await queries.addEmployee(firstName, lastName, roleId, managerId || null);
            console.log('Employee added!');
            break;
        case 'Update an Employee Role':
            const { employeeId, newRoleId } = await inquirer.prompt([
                { type: 'input', name: 'employeeId', message: 'Employee ID:' },
                { type: 'input', name: 'newRoleId', message: 'New Role ID:' }
            ]);
            await queries.updateEmployeeRole(employeeId, newRoleId);
            console.log('Employee role updated!');
            break;
        case 'Exit':
            process.exit();
    }
    mainMenu();
};

export default mainMenu;
