// backend/index.js
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());

// Connect to AWS RDS
const db = mysql.createConnection({
  host: 'your-rds-endpoint', // e.g., mydbinstance.c9akciq32.rds.amazonaws.com
  user: 'your-db-username',
  password: 'your-db-password',
  database: 'your-database-name'
});

// Test the connection and create table if it doesn't exist
db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database');

  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS expenses (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      salary INT NOT NULL,
      rent INT NOT NULL,
      groceries INT NOT NULL,
      electricityBill INT NOT NULL,
      waterBill INT NOT NULL
    )
  `;

  db.query(createTableQuery, (err, result) => {
    if (err) {
      console.error('Error creating table:', err);
      return;
    }
    console.log('Table created or already exists');
  });
});

// Create endpoint to handle form submissions
app.post('/api/data', (req, res) => {
  const { Name, salary, rent, groceries, electricityBill, waterBill } = req.body;

  // Ensure all numeric fields are integers
  const parsedSalary = parseInt(salary, 10);
  const parsedRent = parseInt(rent, 10);
  const parsedGroceries = parseInt(groceries, 10);
  const parsedElectricityBill = parseInt(electricityBill, 10);
  const parsedWaterBill = parseInt(waterBill, 10);

  if (isNaN(parsedSalary) || isNaN(parsedRent) || isNaN(parsedGroceries) || isNaN(parsedElectricityBill) || isNaN(parsedWaterBill)) {
    res.status(400).json({ error: 'All financial fields must be integers' });
    return;
  }

  const query = 'INSERT INTO expenses (name, salary, rent, groceries, electricityBill, waterBill) VALUES (?, ?, ?, ?, ?, ?)';
  db.query(query, [Name, parsedSalary, parsedRent, parsedGroceries, parsedElectricityBill, parsedWaterBill], (err, result) => {
    if (err) {
      console.error('Error inserting data:', err);
      res.status(500).json({ error: 'Failed to insert data' });
      return;
    }
    res.status(200).json({ message: 'Data inserted successfully' });
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
