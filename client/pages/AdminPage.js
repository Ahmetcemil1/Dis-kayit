import { getStudents, getPatients } from '../utils/api.js';

const ADMIN_PASSWORD = 'disadmin123'; // İstersen env’den sunucudan da alabiliriz

document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('admin-login-form');
  const adminPanel = document.getElementById('admin-panel');
  const studentList = document.getElementById('student-list');
  const patientList = document.getElementById('patient-list');

  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const password = document.getElementById('admin-password').value;
    if (password === ADMIN_PASSWORD) {
      loginForm.style.display = 'none';
      adminPanel.style.display = 'block';
      loadData();
    } else {
      alert('Hatalı şifre!');
    }
  });

  async function loadData() {
    const students = await getStudents();
    const patients = await getPatients();

    studentList.innerHTML = students.map(s => `
      <li>
        ${s.fullName} - ${s.email}
        <small>ID: ${s._id}</small>
      </li>
    `).join('');

    patientList.innerHTML = patients.map(p => `
      <li>
        ${p.fullName} - ${p.email}
        <small>ID: ${p._id}</small>
      </li>
    `).join('');
  }

  document.getElementById('match-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const studentId = document.getElementById('studentId').value;
    const patientId = document.getElementById('patientId').value;

    alert(`Eşleştirme işlemi gönderildi:\nÖğrenci: ${studentId}\nHasta: ${patientId}`);
    // İsteğe göre buraya eşleştirme API isteği eklenebilir
  });
});