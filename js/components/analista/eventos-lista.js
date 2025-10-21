import { getEventos } from "../../services/supabase.js";

export async function renderEventosLista(container, user) {
  const { data, error } = await getEventos(user.tenant_id);

  if (error) {
    container.innerHTML = "<p>Erro ao carregar eventos</p>";
    return;
  }

  const html = data.map(e => `<li>${e.titulo} - ${e.data}</li>`).join("");
  container.innerHTML = `<h3>Eventos Recentes</h3><ul>${html}</ul>`;
}
