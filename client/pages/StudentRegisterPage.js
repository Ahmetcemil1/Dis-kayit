import { registerStudent } from '../utils/api';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#student-form');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const data = {
      fullName: form.fullName.value,
      email: form.email.value,
      phone: form.phone.value,
      university: form.university.value,
      department: form.department.value,
      bio: form.bio.value,
    };

    const result = await registerStudent(data);
    alert(result.message);
    if (result.student) form.reset();
  });
});