const db = require('../config/db');

exports.registerStudent = async (req, res) => {
  const { name, email, university } = req.body;
  try {
    const [result] = await db.execute(
      'INSERT INTO students (name, email, university) VALUES (?, ?, ?)',
      [name, email, university]
    );
    res.status(201).json({ message: 'Öğrenci kaydedildi', studentId: result.insertId });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Kayıt sırasında hata oluştu' });
  }
};

exports.getStudents = async (req, res) => {
  try {
    const [rows] = await db.execute('SELECT * FROM students');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Veri alınamadı' });
  }
};