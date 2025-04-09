-- Pre-populates the database with sample data --

-- Insert Departments --
INSERT INTO department (name) VALUES 
  ('Engineering'), 
  ('Finance'), 
  ('Legal'), 
  ('Sales')
ON CONFLICT DO NOTHING;

-- Insert Roles --
INSERT INTO role (title, salary, department_id) VALUES 
  ('Software Engineer', 100000, 1), 
  ('Accountant', 80000, 2), 
  ('Lawyer', 120000, 3), 
  ('Sales Lead', 100000, 4),
  ('Salesperson', 80000, 4),
  ('Lead Software Engineer', 160000, 1),
  ('Account Manager', 170000, 2);

-- Insert Employees --
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES 
  ('Alice', 'Henderson', 1, NULL), 
  ('Bob', 'Smith', 2, 1), 
  ('Charlie', 'Brown', 3, 2), 
  ('Dominic', 'Decoco', 3, NULL),
  ('Mandy', 'Patinkin', 4, 2),
  ('Jasmine', 'Garcia', 5, NULL),
  ('Eric', 'Salazar', 6, 3);
