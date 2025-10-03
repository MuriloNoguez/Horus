// Utilitário para localStorage
const POSTS_KEY = 'horus_posts';
function getPostsFromStorage() {
  const data = localStorage.getItem(POSTS_KEY);
  if (!data) return [];
  try { return JSON.parse(data); } catch { return []; }
}
function savePostsToStorage(posts) {
  localStorage.setItem(POSTS_KEY, JSON.stringify(posts));
}
function isFutureOrToday(dateStr) {
  const today = new Date();
  const d = new Date(dateStr);
  today.setHours(0,0,0,0);
  d.setHours(0,0,0,0);
  return d >= today;
}

// Função para simular delay da API
export const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Simulação das operações de posts
export const postService = {
  // Buscar todas as publicações
  async getAllPosts() {
    await delay(100);
    return getPostsFromStorage().filter(post => isFutureOrToday(post.data));
  },

  // Buscar publicações por CPF do usuário
  async getPostsByUser(cpfUsuario) {
    await delay(50);
    return getPostsFromStorage().filter(post => post.cpfUsuario === cpfUsuario && isFutureOrToday(post.data));
  },

  // Criar nova publicação
  async createPost(postData) {
    await delay(100);
    const posts = getPostsFromStorage();
    const newPost = {
      id: posts.length + 1,
      participantes: 0,
      inscritos: [], // lista de cpfs
      ...postData
    };
    posts.push(newPost);
    savePostsToStorage(posts);
    return newPost;
  },

  // Participar de uma publicação
  async joinPost(postId, cpfUsuario) {
    await delay(50);
    const posts = getPostsFromStorage();
    const post = posts.find(p => p.id === postId);
    if (!post) return null;
    if (post.cpfUsuario === cpfUsuario) return null; // não pode inscrever no próprio post
    if (!isFutureOrToday(post.data)) return null; // não pode inscrever em post passado
    if (post.inscritos && post.inscritos.includes(cpfUsuario)) return null; // já inscrito
    if ((post.participantes || 0) >= post.vagas) return null; // lotado
    post.participantes = (post.participantes || 0) + 1;
    post.inscritos = post.inscritos || [];
    post.inscritos.push(cpfUsuario);
    savePostsToStorage(posts);
    return post;
  },

  // Atualizar publicação
  async updatePost(postId, updatedData) {
    await delay(50);
    const posts = getPostsFromStorage();
    const postIndex = posts.findIndex(p => p.id === postId);
    if (postIndex !== -1) {
      posts[postIndex] = { ...posts[postIndex], ...updatedData };
      savePostsToStorage(posts);
      return posts[postIndex];
    }
    return null;
  },

  // Filtrar publicações por termo de pesquisa
  async searchPosts(searchTerm) {
    await delay(50);
    const posts = getPostsFromStorage().filter(post => isFutureOrToday(post.data));
    if (!searchTerm) return posts;
    const term = searchTerm.toLowerCase();
    return posts.filter(post =>
      post.local.toLowerCase().includes(term) ||
      post.hora.toLowerCase().includes(term) ||
      post.esporte.toLowerCase().includes(term)
    );
  }
};