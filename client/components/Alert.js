export function showAlert(message, type = 'success') {
    const alertBox = document.createElement('div');
    alertBox.textContent = message;
    alertBox.className = `alert ${type}`;
    document.body.appendChild(alertBox);
  
    setTimeout(() => alertBox.remove(), 3000);
  }