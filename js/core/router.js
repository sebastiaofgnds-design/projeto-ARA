import { getTenantFromURL } from "./tenancy.js";

const routes = {
  analista: () => import("../setores/analista.js"),
};

const user = {
  name: "João",
  role: "analista",
  tenant_id: "empresa-xyz"
};

const setor = getTenantFromURL();

routes[setor]?.().then(module => {
  const container = document.getElementById("main-container");
  module.init(container, user);
}).catch(() => {
  document.body.innerHTML = "<h1>Setor não encontrado</h1>";
});
