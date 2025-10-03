# 📊 Dados Mockados - Horus

## 🎯 Visão Geral

Este projeto agora utiliza **dados mockados localmente** ao invés de uma API externa. Todos os dados são gerenciados na pasta `src/data/` e simulam operações de uma API real com delays para uma experiência mais realística.

## 📁 Estrutura dos Dados

```
src/data/
├── index.js          # Exportações centralizadas
├── users.js          # Dados e serviços de usuários
└── posts.js          # Dados e serviços de publicações
```

## 👥 Usuários Mockados

### Dados Disponíveis:
- **João Silva** (joao@example.com) - Senha: 123456
- **Maria Santos** (maria@example.com) - Senha: 123456  
- **Pedro Oliveira** (pedro@example.com) - Senha: 123456
- **Ana Costa** (ana@example.com) - Senha: 123456
- **Carlos Ferreira** (carlos@example.com) - Senha: 123456

### Serviços Disponíveis:
```javascript
import { userService } from '../data/users';

// Login
await userService.login(email, password)

// Criar usuário
await userService.createUser(userData)

// Buscar todos os usuários
await userService.getAllUsers()

// Buscar por CPF
await userService.getUserByCpf(cpf)

// Verificar se usuário existe
await userService.userExists(email, cpf)
```

## 📝 Publicações Mockadas

### Dados Disponíveis:
- **8 publicações** de diferentes esportes
- Futebol, Basquete, Vôlei, Corrida, Ciclismo, Natação, Tênis, CrossFit
- Locais diversos no Rio de Janeiro
- Diferentes horários, datas e número de vagas

### Serviços Disponíveis:
```javascript
import { postService } from '../data/posts';

// Buscar todas as publicações
await postService.getAllPosts()

// Criar nova publicação
await postService.createPost(postData)

// Participar de uma publicação
await postService.joinPost(postId)

// Buscar publicações por usuário
await postService.getPostsByUser(cpfUsuario)

// Pesquisar publicações
await postService.searchPosts(searchTerm)

// Atualizar publicação
await postService.updatePost(postId, updatedData)
```

## ⏱️ Simulação de API

Todos os serviços incluem delays realísticos:
- **Login**: 400ms
- **Buscar dados**: 500-600ms
- **Criar/Atualizar**: 400-500ms
- **Pesquisa**: 300ms

## 🔄 Funcionalidades

### ✅ Implementadas:
- [x] **Login/Logout** com validação
- [x] **Registro** de novos usuários
- [x] **Criação** de publicações
- [x] **Listagem** de publicações
- [x] **Participação** em eventos
- [x] **Pesquisa** por local, esporte ou horário
- [x] **Persistência** durante a sessão

### 💾 Persistência:
- Os dados são mantidos **apenas durante a sessão**
- Ao recarregar a página, os dados voltam ao estado inicial
- CPF do usuário logado é salvo no localStorage

## 🚀 Vantagens dos Dados Mockados

1. **Desenvolvimento Offline**: Não precisa de servidor externo
2. **Testes Consistentes**: Dados sempre iguais para testes
3. **Performance**: Sem latência de rede real
4. **Controle Total**: Fácil modificar dados para testes específicos
5. **Sem Dependências**: Não precisa configurar banco de dados

## 🛠️ Como Modificar os Dados

### Adicionar Novo Usuário:
```javascript
// Em src/data/users.js
const novoUsuario = {
  id: 6,
  email: "novo@example.com",
  password: "123456",
  nome: "Novo Usuário",
  cpf: "12312312312"
};
mockUsers.push(novoUsuario);
```

### Adicionar Nova Publicação:
```javascript
// Em src/data/posts.js
const novaPublicacao = {
  id: 9,
  esporte: "Surf",
  local: "Praia do Diabo",
  participantes: 0,
  vagas: 6,
  data: "2025-10-15",
  hora: "14:00",
  distancia: "2km",
  cpfUsuario: "12345678901"
};
mockPosts.push(novaPublicacao);
```

## 🎮 Como Testar

1. **Login**: Use qualquer email/senha dos usuários mockados
2. **Registro**: Crie um novo usuário com dados únicos
3. **Criar Post**: Faça login e clique em "Criar" na sidebar
4. **Participar**: Clique em "Participar" em qualquer publicação
5. **Pesquisar**: Use a barra de pesquisa na sidebar

## 🔧 Troubleshooting

### Erro ao fazer login:
- Verifique se está usando um email/senha válidos dos dados mockados
- Abra o console para ver logs de depuração

### Publicações não aparecem:
- Verifique o console para erros
- Os dados são carregados com delay simulado

### Pesquisa não funciona:
- A pesquisa funciona por local, esporte ou horário
- Aguarde o delay de 300ms da simulação