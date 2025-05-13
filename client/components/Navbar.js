export function renderNavbar() {
    const nav = document.querySelector('nav');
    nav.innerHTML = `
      <a href="/">Ana Sayfa</a>
      <a href="/student-register.html">Öğrenci Kayıt</a>
      <a href="/patient-register.html">Hasta Kayıt</a>
      <a href="/admin.html" class="btn-secondary">Admin</a>
    `;
  }