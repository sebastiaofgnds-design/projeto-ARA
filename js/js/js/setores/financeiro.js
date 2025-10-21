export async function init(container) {
  container.innerHTML = `
    <h2>Painel Financeiro</h2>
    <p>Seja bem-vindo à área financeira.</p>
    <button id="btn-relatorio">Gerar Relatório</button>
    <div id="relatorioArea"></div>
  `;

  document.getElementById('btn-relatorio').onclick = async () => {
    document.getElementById('relatorioArea').innerHTML = '<p>Relatório gerado (exemplo)</p>';
  };

  // 🛠️ AQUI VOCÊ PODE ESCREVER FUNÇÕES DO SETOR FINANCEIRO
}
