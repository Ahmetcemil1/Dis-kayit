const express = require('express');
const router = express.Router();

// Admin girişi
router.post('/login', (req, res) => {
  // Admin kontrolü
  res.send('Admin girişi başarılı.');
});

// Bekleyen hasta/öğrenci eşleştirme onayı
router.post('/approve', (req, res) => {
  res.send('Eşleştirme onaylandı.');
});

module.exports = router;
