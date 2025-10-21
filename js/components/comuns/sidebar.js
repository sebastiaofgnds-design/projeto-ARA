export function renderSidebar(container, user) {
  container.innerHTML = `
    <aside>
      <h2>Bem-vindo, ${user.name}</h2>
      <nav>
        <ul>
          <li><a href="?setor=analista">Dashboard</a></li>
        </ul>
      </nav>
    </aside>
  `;
}
