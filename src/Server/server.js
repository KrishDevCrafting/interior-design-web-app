
// server.js (or index.js)

// Import necessary packages and modules
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const sendEmail = require('./sendEmail');

// Load environment variables from .env file
dotenv.config();

// Create an Express app
const app = express();

// Middleware to parse incoming request bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Example route for sending emails
app.post('/send-email', (req, res) => {
  // Call the sendEmail function
  sendEmail()
    .then(() => {
      res.status(200).send('Email sent successfully.');
    })
    .catch((error) => {
      res.status(500).send('Error sending email: ' + error.message);
    });
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
