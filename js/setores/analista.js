export async function init(container) {
  container.innerHTML = `
    <h2>Painel do Analista de Eventos</h2>
    <p>Área para criar e acompanhar eventos.</p>
    <button id="btn-cotacao">Criar Cotação</button>
    <div id="cotacaoArea"></div>
  `;

  document.getElementById('btn-cotacao').onclick = () => {
    document.getElementById('cotacaoArea').innerHTML = '<p>Cotação criada (exemplo)</p>';
  };

  // 🛠️ AQUI VOCÊ PODE ESCREVER FUNÇÕES DO ANALISTA
}
