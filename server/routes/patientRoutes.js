// server/routes/patientRoutes.js

const express = require('express');
const router = express.Router();
const patientController = require('../controllers/patientController');

// Hasta kayıt endpoint’i
// POST http://localhost:PORT/api/patients/register
router.post('/register', patientController.registerPatient);

// Tüm hastaları listeleme (isteğe bağlı)
router.get('/', patientController.getPatients);

module.exports = router;