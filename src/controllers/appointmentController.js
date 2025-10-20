const pool = require('../config/db');

//Create appointment
exports.createAppointment = async (req, res) => {
  try {
    const { patient_id, appointment_date, reason } = req.body;
    const [result] = await pool.query(
      `INSERT INTO appointments (patient_id, appointment_date, reason)
       VALUES (?, ?, ?)`,
      [patient_id, appointment_date, reason]
    );
    res.status(201).json({ message: 'Appointment created', appointmentId: result.insertId });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all appointments
exports.getAppointments = async (req, res) => {
  try {
    const [rows] = await pool.query(
      `SELECT a.*, p.first_name, p.last_name 
       FROM appointments a 
       JOIN patients p ON a.patient_id = p.id`
    );
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete appointment
exports.deleteAppointment = async (req, res) => {
  try {
    await pool.query('DELETE FROM appointments WHERE id=?', [req.params.id]);
    res.json({ message: 'Appointment deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
