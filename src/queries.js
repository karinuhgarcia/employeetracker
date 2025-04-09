// SQL Queries for CRUD operations
import pool from './db.js';

export async function getDepartments() {
  const res = await pool.query('SELECT * FROM department');
  return res.rows;
};

export async function getRoles() {
  const res = await pool.query(
    `SELECT role.id, role.title, department.name AS department, role.salary
     FROM role JOIN department ON role.department_id = department.id`);
  return res.rows;
};

export async function getEmployees() {
  const res = await pool.query(
    `SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary,
     manager.first_name AS manager
     FROM employee
     JOIN role ON employee.role_id = role.id
     JOIN department ON role.department_id = department.id
     LEFT JOIN employee manager ON employee.manager_id = manager.id`);
  return res.rows;
};
export async function addDepartment(name) {
  await pool.query('INSERT INTO department (name) VALUES ($1)', [name]);
};
export async function addRole(title, salary, department_id) {
  await pool.query('INSERT INTO role (title, salary, department_id) VALUES ($1, $2, $3)', [title, salary, department_id]);
};
export async function addEmployee(first_name, last_name, role_id, manager_id) {
  await pool.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4)',
    [first_name, last_name, role_id, manager_id]);
};
export async function updateEmployeeRole(employee_id, role_id) {
  await pool.query('UPDATE employee SET role_id = $1 WHERE id = $2', [role_id, employee_id]);
};

