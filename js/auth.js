// Autenticação fake para fins de exemplo
async function getUserInfo() {
  // Para testes, altere o setor para 'admin', 'financeiro' ou 'analista'
  return {
    id: 'usuario123',
    setor: 'financeiro'
  };
}

async function initSistema() {
  const user = await getUserInfo();
  if (!user) {
    window.location.href = 'index.html';
    return;
  }
  construirSidebar(user.setor);
  carregarSetor(user.setor);
}
