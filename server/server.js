const express = require('express');
const dotenv = require('dotenv');
app.use('/api/students', require('./routes/studentRoutes'));
app.use('/api/patients', require('./routes/patientRoutes'));
const db = require('./config/db');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');

dotenv.config();

const app = express();
app.use(express.json());

app.use('/api/students', require('./routes/studentRoutes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Sunucu ${PORT} portunda çalışıyor`);
});