// server/controllers/patientController.js

const db = require('../config/db'); // MySQL için db pool, MongoDB için mongoose

exports.registerPatient = async (req, res) => {
  const { name, email, phone, description } = req.body;
  try {
    // MySQL örneği (mysql2 kullanıyorsan):
    const [result] = await db.execute(
      'INSERT INTO patients (name, email, phone, description) VALUES (?, ?, ?, ?)',
      [name, email, phone, description]
    );
    res.status(201).json({ message: 'Hasta kaydedildi', patientId: result.insertId });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Kayıt sırasında hata oluştu' });
  }
};

exports.getPatients = async (req, res) => {
  try {
    const [rows] = await db.execute('SELECT * FROM patients');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Veri alınamadı' });
  }
};