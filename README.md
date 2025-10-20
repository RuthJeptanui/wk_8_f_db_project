🏥 wk_8_f_db_project — Patient Management CRUD API

A simple Node.js (Express) + MySQL application demonstrating CRUD operations (Create, Read, Update, Delete) for Patients and Appointments.

This project allows you to:

🧍‍♂️ Create and manage patients

🗓️ Schedule and manage appointments

🗄️ Connect to a MySQL database

🧪 Test API endpoints using Postman

🚀 Features

RESTful API using Express.js

MySQL database connection with mysql2/promise

Environment variables handled via dotenv

Clean and modular structure (controllers, routes, config)

Database seed script for inserting sample data

🛠️ Technologies Used
Category	Technology
Backend	Node.js, Express.js
Database	MySQL
ORM/Driver	mysql2
Tools	Postman, dotenv
📂 Project Structure
wk_8_f_db_project/
│
├── src/
│   ├── app.js                     # Main server entry point
│   ├── config/
│   │   └── db.js                  # Database connection file
│   ├── controllers/
│   │   ├── patientsController.js
│   │   └── appointmentsController.js
│   ├── routes/
│   │   ├── patientsRoutes.js
│   │   └── appointmentRoutes.js
│
├── sql/
│   ├── setup_db.sql               # SQL script to create database and tables
│   ├── setup_db.js                # Logic to set up database
│   ├── seed.sql                   # SQL script to seed data
│   └── seed.js                    # Logic to insert sample data programmatically
│
├── .env
├── package.json
└── README.md

⚙️ Setup Instructions
1️⃣ Clone the repository
git clone https://github.com/your-username/wk_8_f_db_project.git
cd wk_8_f_db_project

2️⃣ Install dependencies
npm install

3️⃣ Configure your .env file

Create a .env file in the root directory and add:

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=my_plp_db
PORT=5000

4️⃣ Create the database and tables

In MySQL, run:

SOURCE sql/setup_db.sql;

5️⃣ (Optional) Seed the database

Option 1 — via Node:

node src/seed.js


Option 2 — directly in MySQL:

SOURCE sql/seed.sql;

6️⃣ Start the server
node src/app.js


Your server will start at:

http://localhost:5000

🧪 API Endpoints
Method	Endpoint	Description
POST	/api/patients	Create a new patient
GET	/api/patients	Get all patients
GET	/api/patients/:id	Get patient by ID
PUT	/api/patients/:id	Update patient by ID
DELETE	/api/patients/:id	Delete patient by ID
POST	/api/appointments	Create a new appointment
GET	/api/appointments	Get all appointments
🧭 Example Request (using Postman)
POST /api/patients
Headers:
Content-Type: application/json

Body (raw JSON):
{
  "first_name": "Ruth",
  "last_name": "Jeptanui",
  "gender": "Female",
  "date_of_birth": "1995-05-20",
  "contact_number": "0712345678",
  "email": "ruth.jeptanui@example.com",
  "address": "Tatu City"
}

🧰 Scripts
Command	Description
npm start	Start the Express server
node src/seed.js	Seed the database with sample data
👩‍💻 Author

Ruth Jeptanui
Frontend & Full-stack Developer
📍 Kenya