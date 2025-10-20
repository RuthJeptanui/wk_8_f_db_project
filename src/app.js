const express = require('express');
const app = express();
require('dotenv').config();





// Middleware
app.use(express.json()); // 👈 parses JSON bodies
app.use(express.urlencoded({ extended: true }));

const patientRoutes = require('./routes/patientsRoutes');
const appointmentRoutes = require('./routes/appointmentRoutes');





// Routes
app.use('/api/patients', patientRoutes);
app.use('/api/appointments', appointmentRoutes);

// Default route
app.get('/', (req, res) => res.send('PLP CRUD API is running 🚀'));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
