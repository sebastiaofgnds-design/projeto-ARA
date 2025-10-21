function construirSidebar(setor) {
  const sidebarEl = document.getElementById('sidebar');
  let html = '';
  switch (setor) {
    case 'admin':
      html = `
        <ul>
          <li><a href="#" data-sect="admin">Início Admin</a></li>
          <li><a href="#" data-sect="admin">Usuários</a></li>
          <li><a href="#" data-sect="admin">Relatórios</a></li>
        </ul>
      `;
      break;
    case 'financeiro':
      html = `
        <ul>
          <li><a href="#" data-sect="financeiro">Dashboard Financeiro</a></li>
          <li><a href="#" data-sect="financeiro">Faturas</a></li>
        </ul>
      `;
      break;
    case 'analista':
      html = `
        <ul>
          <li><a href="#" data-sect="analista">Dashboard Analista</a></li>
          <li><a href="#" data-sect="analista">Criar Evento</a></li>
        </ul>
      `;
      break;
    default:
      html = `<p>Setor não identificado</p>`;
  }
  sidebarEl.innerHTML = html;

  sidebarEl.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', (evt) => {
      evt.preventDefault();
      const s = a.getAttribute('data-sect');
      carregarSetor(s);
    });
  });
}
