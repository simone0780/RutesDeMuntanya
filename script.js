document.addEventListener('DOMContentLoaded', () => {
  mostrarRellotge();
  setInterval(mostrarRellotge, 1000);

  const btn = document.getElementById('mode-btn');
  if (btn) {
    const tema = localStorage.getItem('tema') || 'dark';
    document.documentElement.setAttribute('data-bs-theme', tema);
    btn.textContent = tema === 'dark' ? '☀️' : '🌙';
    btn.addEventListener('click', () => {
      const actual = document.documentElement.getAttribute('data-bs-theme');
      const nou = actual === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-bs-theme', nou);
      localStorage.setItem('tema', nou);
      btn.textContent = nou === 'dark' ? '☀️' : '🌙';
    });
  }

  const modal = document.getElementById('modal');
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) tancarModal();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') tancarModal();
    });
  }
});

function mostrarRellotge() {
  const ara = new Date();
  const h = String(ara.getHours()).padStart(2,'0');
  const m = String(ara.getMinutes()).padStart(2,'0');
  const s = String(ara.getSeconds()).padStart(2,'0');
  const d = String(ara.getDate()).padStart(2,'0');
  const mes = String(ara.getMonth()+1).padStart(2,'0');
  const any = ara.getFullYear();
  const el = document.getElementById('rellotge');
  if (el) el.textContent = `${d}/${mes}/${any} ${h}:${m}:${s}`;
}

function obrirModal(icona, text) {
  const el = document.getElementById('modal');
  const ic = document.getElementById('modal-icon');
  const desc = document.getElementById('modal-desc');
  if (el && ic && desc) {
    ic.textContent = icona;
    desc.textContent = text;
    el.classList.add('visible');
  }
}

function tancarModal() {
  const el = document.getElementById('modal');
  if (el) el.classList.remove('visible');
}
