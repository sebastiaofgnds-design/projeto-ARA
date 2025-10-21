export async function init(container, user) {
  container.innerHTML = `<h2>Olá ${user.nome} do financeiro!</h2>
  <p>Área de controle financeiro.</p>`;
}
