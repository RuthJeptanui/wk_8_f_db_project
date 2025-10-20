const express = require('express');
const router = express.Router();
const controller = require('../controllers/patientController');

router.post('/', controller.createPatient);
router.get('/', controller.getAllPatients);
router.get('/:id', controller.getPatientById);
router.put('/:id', controller.updatePatientById);
router.delete('/:id', controller.deletePatientById);

module.exports = router;
