import inquirer from 'inquirer';
import express, { urlencoded, json } from 'express';
// Import and require mysql2
import { createConnection } from 'mysql2';

const PORT = process.env.PORT || 3301;
const app = express();

// Express middleware
app.use(urlencoded({ extended: false }));
app.use(json());

// Connect to database
const db = createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // MySQL password
    password: 'password',
    database: 'employee_db'
  },
  console.log(`Connected to the employee_db database.`)
);

// Query database
db.query('SELECT * FROM employee', function (err, results) {
  console.log(results);
});

// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
