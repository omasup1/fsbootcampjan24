// Import the express module
var express = require('express');

// Create an instance of Express application
var app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Initialize users array for storing user data
var users = [];

// Sample array of customers
var customers = [
    { id: 1, name: "Pro" },
    { id: 2, name: "Test" },
    { id: 3, name: "Sam" },
];

// Route to display a message
app.get('/', (request, response) => {
    response.send('This is another message');
});

// Route to get all customers
app.get('/customers', (request, response) => {
    response.send(customers);
});

// Route to get a customer by ID
app.get('/customers/:id', (request, response) => {
    // Find the customer with the given ID
    var customer = customers.find(x => x.id == request.params.id);
    // If customer is not found, send 404 status with error message
    if (!customer) return response.status(404).send('Customer not found');
    // If customer is found, send the customer object
    response.send(customer);
});

// Route to add a new customer
app.post('/customers', (request, response) => {
    // Check if customer name is provided
    if (!request.body.name) return response.status(400).send('Please provide a customer name');

    // Create a new customer object
    var customer = {
        id: customers.length + 1,
        name: request.body.name
    };
    // Add the new customer to the array
    customers.push(customer);
    // Send the new customer object as response
    response.send(customer);
});

// Route to update a customer by ID
app.put('/customers/:id', (request, response) => {
    // Find the customer with the given ID
    var customer = customers.find(x => x.id == request.params.id);
    // If customer is not found, send 404 status with error message
    if (!customer) return response.status(404).send('Customer not found');
    // If customer name is not provided, send 400 status with error message
    if (!request.body.name) return response.status(400).send('Please provide a customer name');

    // Update the customer name
    customer.name = request.body.name;
    // Send the updated customer object as response
    response.send(customer);
});

// Route to delete a customer by ID
app.delete('/customers/:id', (request, response) => {
    // Find the customer with the given ID
    var customer = customers.find(x => x.id == request.params.id);
    // If customer is not found, send 404 status with error message
    if (!customer) return response.status(404).send('Customer not found');

    // Find the index of the customer in the array
    var index = customers.indexOf(customer);
    // Remove the customer from the array
    customers.splice(index, 1);
    // Send success message as response
    response.send('Customer deleted successfully');
});

// POST Method Route Handler for user registration
var users = [];

app.post('/register', (request, response) => {
    const { name, email, password } = request.body; // Extract name, email, and password from request body
     // Check for missing fields
     if (!name) {
        return response.status(400).send('Please provide the name field');
    }
    if (!email) {
        return response.status(400).send('Please provide the email field');
    }
    if (!password) {
        return response.status(400).send('Please provide the password field');
    }

    // Create a new user object
    const newUser = {
        name: name,
        email: email,
        password: password
    };

    // Add the new user to the users array
    users.push(newUser);

    // Send the new user object as response with 201 status (resource created)
    response.status(201).send(newUser);
});
    
// Route for all other requests
app.all('*', (request, response) => {
    response.send("Invalid Request");
});

// Start the server and listen on port 3000
// Server listening
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
