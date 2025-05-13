import { registerPatient } from '../utils/api';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#patient-form');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const data = {
      fullName: form.fullName.value,
      email: form.email.value,
      phone: form.phone.value,
      city: form.city.value,
      note: form.note.value,
    };

    const result = await registerPatient(data);
    alert(result.message);
    if (result.patient) form.reset();
  });
});