const mysql = require('mysql2/promise');
require('dotenv').config();
const fs = require('fs');
const path = require('path');

//configuring db
const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'Tech@1234',
    port: process.env.DB_PORT || 3306  ,
    multipleStatements: true,
};
 async function executesqlFile(filePath){
    try{
        //reading sql file content
        const sql = fs.readFileSync(path.join(__dirname, filePath), 'utf8');
        //establishing connection
        const connection = await mysql.createConnection(dbConfig);
        console.log('Connected to MySQL server');

        //executing sql queries
        console.log(`Executing SQL file: ${path.basename(filePath)}`);
        await connection.query(sql);
        console.log('SQL file executed successfully');

        //closing connection
        await connection.end();
        console.log('MySQL connection closed');
    }catch(error){
        console.error('Error executing SQL file:', error.message);
    }
 }
//execute the setup_db.sql file to create database and tables
 executesqlFile('setup_db.sql');

