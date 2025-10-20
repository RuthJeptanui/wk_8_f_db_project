const mysql = require('mysql2/promise');
require('dotenv').config();

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Tech@1234',
  database: 'my_plp_db',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

pool.getConnection()
  .then(() => console.log('✅ MySQL connected successfully'))
  .catch(err => {
    console.error('❌ MySQL connection failed:', err.message);
    process.exit(1);
  });

module.exports = pool;
