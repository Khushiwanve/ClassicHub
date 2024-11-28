// backend/db.js

const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'your_username',      // Replace with your MySQL username
    password: 'your_password',  // Replace with your MySQL password
    database: 'your_database_name' // Replace with your database name
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL database.');
});

module.exports = connection; // Export the connection for use in other files
