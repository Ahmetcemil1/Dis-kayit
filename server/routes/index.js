const express = require('express');
const router = express.Router();

const studentRoutes = require('./studentRoutes');
const patientRoutes = require('./patientRoutes');
// Admin route varsa:
const adminRoutes = require('./adminRoutes');

router.use('/students', studentRoutes);
router.use('/patients', patientRoutes);
router.use('/admin', adminRoutes);

module.exports = router;