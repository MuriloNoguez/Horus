
// Utilitário para localStorage
const USERS_KEY = 'horus_users';
function getUsersFromStorage() {
  const data = localStorage.getItem(USERS_KEY);
  if (!data) return [];
  try { return JSON.parse(data); } catch { return []; }
}
function saveUsersToStorage(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

// Função para simular delay da API
export const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Simulação das operações de usuário
export const userService = {
  async getAllUsers() {
    await delay(100);
    return getUsersFromStorage();
  },
  async getUserByCpf(cpf) {
    await delay(50);
    return getUsersFromStorage().find(user => user.cpf === cpf) || null;
  },
  async createUser(userData) {
    await delay(100);
    const users = getUsersFromStorage();
    const exists = users.some(u => u.email === userData.email || u.cpf === userData.cpf);
    if (exists) throw new Error('Usuário já existe');
    const newUser = { id: users.length + 1, ...userData };
    users.push(newUser);
    saveUsersToStorage(users);
    return newUser;
  },
  async userExists(email, cpf) {
    await delay(50);
    return getUsersFromStorage().some(user => user.email === email || user.cpf === cpf);
  },
  async login(email, password) {
    await delay(50);
    return getUsersFromStorage().find(user => user.email === email && user.password === password) || null;
  }
};