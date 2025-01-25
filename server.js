// Import necessary modules
const express = require('express');
const fs = require('fs');
const path = require('path');

// Create an Express app
const app = express();

// Specify the port
const PORT = 3000;

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Route to read and serve the file content
app.get('/file-content', (req, res) => {
  const filePath = path.join(__dirname, 'person1.txt'); // Replace with your file path

  // Read the file asynchronously
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Error reading the file');
      return;
    }
    res.send(data); // Send the file content as a response
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});