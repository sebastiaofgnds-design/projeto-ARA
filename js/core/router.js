import { getTenantFromPath } from "./tenancy.js";
import { renderSidebar } from "../components/comuns/sidebar.js";

const user = JSON.parse(localStorage.getItem("user"));
const tenant = getTenantFromPath();

if (!user || user.tenant !== tenant) {
  document.body.innerHTML = "<h1>Acesso não autorizado</h1>";
  throw new Error("Tenant inválido para o usuário logado");
}

const routes = {
  analista: () => import("../setores/analista.js"),
  financeiro: () => import("../setores/financeiro.js"),
};

const setorModule = routes[user.cargo];

if (setorModule) {
  setorModule().then(module => {
    renderSidebar(document.getElementById("sidebar"), user);
    module.init(document.getElementById("main-container"), user);
  });
} else {
  document.body.innerHTML = "<h1>Cargo não autorizado</h1>";
}
