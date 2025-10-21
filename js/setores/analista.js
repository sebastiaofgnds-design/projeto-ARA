import { renderSidebar } from "../components/comuns/sidebar.js";
import { renderEventosLista } from "../components/analista/eventos-lista.js";

export async function init(container, user) {
  renderSidebar(document.getElementById("sidebar"), user);
  renderEventosLista(container, user);
}
