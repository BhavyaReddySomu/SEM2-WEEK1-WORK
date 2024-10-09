// server.js

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
let employees = [];

// GET /employees: Get all employees
app.get('/employees', (req, res) => {
    res.json(employees);
});

// GET /employees/:id: Get a single employee by ID
app.get('/employees/:id', (req, res) => {
    const employee = employees.find(emp => emp.id === parseInt(req.params.id));
    if (!employee) {
        return res.status(404).json({ error: 'Employee not found' });
    }
    res.json(employee);
});

// POST /employees: Add a new employee
app.post('/employees', (req, res) => {
    const { name, position, salary } = req.body;
    const newEmployee = {
        id: employees.length + 1, // Simple ID generation
        name,
        position,
        salary
    };
    employees.push(newEmployee);
    res.status(201).json(newEmployee);
});

// PUT /employees/:id: Update an employee by ID
app.put('/employees/:id', (req, res) => {
    const employee = employees.find(emp => emp.id === parseInt(req.params.id));
    if (!employee) {
        return res.status(404).json({ error: 'Employee not found' });
    }
    const { name, position, salary } = req.body;
    employee.name = name || employee.name;
    employee.position = position || employee.position;
    employee.salary = salary || employee.salary;
    res.json(employee);
});


app.delete('/employees/:id', (req, res) => {
    const employeeIndex = employees.findIndex(emp => emp.id === parseInt(req.params.id));
    if (employeeIndex === -1) {
        return res.status(404).json({ error: 'Employee not found' });
    }
    employees.splice(employeeIndex, 1);
    res.status(204).send(); // No content to send back
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
