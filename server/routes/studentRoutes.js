const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');

router.post('/register', studentController.registerStudent);
router.get('/', studentController.getStudents);

module.exports = router;
// Bu dosya, öğrenci kayıt ve listeleme işlemleri için rotaları tanımlar.
// express.Router() ile yeni bir yönlendirici oluşturur.    