export async function fakeLogin(email, senha) {
  const users = [
    {
      id: 1,
      email: "joao@wisify.com",
      nome: "João da Silva",
      cargo: "analista",
      tenant: "wisify"
    },
    {
      id: 2,
      email: "maria@teste.com",
      nome: "Maria Souza",
      cargo: "financeiro",
      tenant: "teste"
    }
  ];

  return users.find(u => u.email === email) || null;
}
