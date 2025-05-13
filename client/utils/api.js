const API_BASE = '/api';

export const registerStudent = async (data) => {
  const res = await fetch(`${API_BASE}/students/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return await res.json();
};

export const registerPatient = async (data) => {
  const res = await fetch(`${API_BASE}/patients/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return await res.json();
};

export const getStudents = async () => {
  const res = await fetch(`${API_BASE}/students`);
  return await res.json();
};

export const getPatients = async () => {
  const res = await fetch(`${API_BASE}/patients`);
  return await res.json();
};