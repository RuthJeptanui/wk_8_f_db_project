USE my_plp_db;

-- 👩‍⚕️ Insert sample patients
INSERT INTO patients (first_name, last_name, gender, date_of_birth, contact_number, email, address)
VALUES
('Ruth', 'Jeptanui', 'Female', '1995-05-20', '0712345678', 'ruth.jeptanui@example.com', 'Tatu City, Kiambu County'),
('James', 'Mwangi', 'Male', '1988-03-15', '0722456789', 'james.mwangi@example.com', 'Nairobi, Kenya'),
('Mary', 'Njeri', 'Female', '1992-10-10', '0700345678', 'mary.njeri@example.com', 'Nakuru, Kenya'),
('Peter', 'Ochieng', 'Male', '1985-12-02', '0733456789', 'peter.ochieng@example.com', 'Kisumu, Kenya'),
('Ann', 'Kiptoo', 'Female', '1990-08-25', '0799456789', 'ann.kiptoo@example.com', 'Eldoret, Kenya');

-- 📅 Insert sample appointments
INSERT INTO appointments (patient_id, appointment_date, reason)
VALUES
(1, '2025-10-25 10:30:00', 'Routine check-up'),
(2, '2025-10-26 14:00:00', 'Follow-up for blood pressure'),
(3, '2025-10-27 09:15:00', 'General consultation'),
(4, '2025-10-28 11:45:00', 'Lab results discussion'),
(5, '2025-10-29 16:00:00', 'Vaccination appointment');


