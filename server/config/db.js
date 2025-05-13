const mysql = require('mysql2/promise');
const dotenv = require('dotenv');

dotenv.config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = pool;
// Bu dosya, MySQL veritabanı bağlantısını yönetir.
// dotenv ile çevresel değişkenleri yükler ve mysql2/promise ile havuz bağlantısı oluşturur.
// Havuz bağlantısı, veritabanı bağlantılarını yönetir ve performansı artırır.
// Veritabanı bağlantısı için gerekli bilgileri .env dosyasından alır.
// Bu dosya, diğer modüller tarafından kullanılmak üzere dışa aktarılır.