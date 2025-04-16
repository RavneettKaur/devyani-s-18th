const express = require('express');
const path = require('path');

const app = express();
const port = 3000; // You can change this to any port you prefer

// Serve static files (like HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to handle requests
app.use(express.urlencoded({ extended: true })); // For form submissions
app.use(express.json()); // For JSON requests

// Route for the login page
app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

// Route for the landing page
app.get('/index', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Handle any other routes
app.get('*', (req, res) => {
  res.redirect('/login'); // Redirect to login if the route doesn't exist
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
