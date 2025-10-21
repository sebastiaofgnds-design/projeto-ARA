async function carregarSetor(setor) {
  const mainEl = document.getElementById('conteudo');
  mainEl.innerHTML = `<p>Carregando ${setor}...</p>`;

  switch (setor) {
    case 'admin':
      await import('./setores/admin.js').then(mod => mod.init(mainEl));
      break;
    case 'financeiro':
      await import('./setores/financeiro.js').then(mod => mod.init(mainEl));
      break;
    case 'analista':
      await import('./setores/analista.js').then(mod => mod.init(mainEl));
      break;
    default:
      mainEl.innerHTML = `<p>Setor desconhecido ou não autorizado.</p>`;
  }
}
