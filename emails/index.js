import express from 'express';
import { sendMail } from './sendemail.js'; // Assuming sendMail is a named export

const app = express();

// Define a route for the root URL
app.get('/', (req, res) => {
  res.send('I am a server');
});

// Define a route for sending email
app.get('/mail', sendMail);

// Start the server
const start = async () => {
  try {
    app.listen(5000, () => {
      console.log("Server running at http://localhost:5000");
    });
  } catch (e) {
    console.error('Failed to start server', e); // Improved error logging
  }
};

// Call the start function to run the server
start();
