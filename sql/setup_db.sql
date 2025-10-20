CREATE DATABASE IF NOT EXISTS my_plp_db;
USE my_plp_db;

CREATE TABLE IF NOT EXISTS patients (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    gender VARCHAR(10) NOT NULL,
    date_of_birth DATE NOT NULL,
    contact_number VARCHAR(15),
    email VARCHAR(100),
    address VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS appointments (
   `id` INT AUTO_INCREMENT PRIMARY KEY,
    patient_id INT,
    appointment_date DATETIME NOT NULL,
    reason VARCHAR(255),
    FOREIGN KEY (patient_id) REFERENCES patients(id)

);

