# Portfólio React

Um portfólio moderno e responsivo desenvolvido em React com todas as funcionalidades solicitadas.

## 🚀 Funcionalidades

### ✅ Header
- Links externos para redes sociais (GitHub, LinkedIn)
- Links internos para seções da página
- Scroll suave ao clicar nos links internos
- Header desaparece ao rolar para baixo e aparece ao rolar para cima
- Animações suaves

### ✅ Landing Section
- Avatar (imagem)
- Nome
- Texto de bio

### ✅ Featured Projects
- Seção com 4 projetos
- Layout em grid 2x2 (responsivo: 1 coluna no mobile)
- Cards com título, descrição, imagem e link

### ✅ Contact Me
- Formulário funcional
- Campos: Nome, Email, Mensagem
- Validação completa:
  - Campos obrigatórios
  - Validação de email
  - Mensagens de erro
- Controlled components

## 📦 Instalação

1. Instale as dependências:
```bash
npm install
```

2. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

3. Abra o navegador em `http://localhost:5173`

## 🛠️ Build para Produção

```bash
npm run build
```

## 📝 Personalização

### Alterar informações pessoais:
- **LandingSection.jsx**: Edite o nome, avatar e bio
- **Header.jsx**: Altere os links das redes sociais
- **FeaturedProjects.jsx**: Modifique os projetos exibidos

### Cores e estilos:
Os estilos estão organizados em arquivos CSS separados para cada componente. As variáveis CSS estão definidas em `src/index.css`.

## 🧪 Testes

Antes de enviar, verifique:
- ✅ Links externos funcionam
- ✅ Scroll suave funciona
- ✅ Header aparece/desaparece corretamente
- ✅ Cards aparecem corretamente
- ✅ Validação do formulário funciona
- ✅ Animações estão suaves

