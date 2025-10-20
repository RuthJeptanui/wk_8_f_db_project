const fs = require('fs');
const mysql = require('mysql2/promise');
require('dotenv').config();

(async () => {
  try {
    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'Tech@1234',
      database: 'my_plp_db'
    });

    // Read SQL file
    const sql = fs.readFileSync('./sql/seed.sql', 'utf8');

    // Run SQL commands
    await connection.query(sql);
    console.log('✅ Database seeded successfully');

    await connection.end();
  } catch (err) {
    console.error('❌ Error seeding database:', err.message);
  }
})();
