# Employee Tracker

## Description
A command-line Content Management System (CMS) that helps business owners and managers view and manage departments, roles, and employees in a PostgreSQL database. Built using Node.js, Inquirer, and the `pg` package.

This application allows users to:
- View all departments, roles, and employees
- Add departments, roles, and employees
- Update an employee's role

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Demo Video](#demo-video)
- [Features](#features)
- [Bonus Features](#bonus-features)
- [Technologies](#technologies)
- [License](#license)
- [Credits](#credits)

## Installation
1. Clone the repository:
```bash
git clone https://github.com/your-username/employee-tracker.git
cd employee-tracker
```
2. Install dependencies:
```bash
npm install
```
3. Set up the PostgreSQL database:
- Create a database named `employeetracker`
- Run the schema and seed files:
```bash
psql -U your_username -d employeetracker -f schema.sql
psql -U your_username -d employeetracker -f seeds.sql
```
4. Create a `.env` file with the following:
```
DB_USER=your_pg_user
DB_PASSWORD=your_pg_password
DB_HOST=localhost
DB_PORT=5432
DB_NAME=employee_db
```

## Usage
Start the app with:
```bash
npm run start
```
Follow the prompts to navigate the employee database using the arrow keys.

## Demo Video
[Watch the walkthrough demo here](https://app.screencastify.com/v3/watch/epvpwpnDYfmlcyF9WMw4)

## Features
- View all departments
- View all roles
- View all employees
- Add a department
- Add a role
- Add an employee
- Update an employee's role

## Technologies
- Node.js
- Inquirer.js
- PostgreSQL (`pg` package)
- dotenv

## License
MIT License

