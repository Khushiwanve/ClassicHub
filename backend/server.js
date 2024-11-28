// backend/server.js
// backend/server.js

const express = require('express');
const connection = require('./db'); // Import the database connection

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Example route to get movies (this is just a placeholder; you'll need to adjust it)
app.get('/api/movies', (req, res) => {
    connection.query('SELECT * FROM movies', (error, results) => {
        if (error) {
            return res.status(500).send(error);
        }
        res.json(results);
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
