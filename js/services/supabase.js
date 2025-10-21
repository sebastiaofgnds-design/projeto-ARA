export async function getEventos(tenant_id) {
  // Simula delay e resposta do Supabase
  await new Promise(r => setTimeout(r, 300));

  return {
    data: [
      { id: 1, titulo: "Reunião com cliente", data: "2025-10-10" },
      { id: 2, titulo: "Treinamento interno", data: "2025-10-12" },
    ],
    error: null
  };
}
