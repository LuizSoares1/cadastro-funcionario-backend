# Cadastro de Funcionário Backend

Este projeto é uma aplicação backend para o cadastro de funcionários, desenvolvida em TypeScript. Abaixo estão as instruções para instalação e uso.

## Estrutura

```   
src/
├── config/
│   └── firebase.ts           # Configuração do banco de dados utilizado.
│
├── controllers/              # Lógicas para funcionário e login
│   ├── funcionarioController.ts  # Lógica para cadastramento e listagem de funcionários.
│   └── loginController.ts        # Lógica para verificação de login e criação de login(utilize uma aplicações como postman ou insomnia para criar um login).
│
├── models/                   # Definição de tipos e interfaces
│   ├── funcionario.ts
│   └── usuario.ts
│
├── routes/                   # Definição de endpoints e mapeamento para controllers
│   ├── funcionario.routes.ts
│   └── login.routes.ts
│
├── app.ts                     # Configuração do Express, middlewares e registro de rotas
└── server.ts                  # Ponto de entrada da aplicação (inicializa o servidor)
```

## Instalação

1. Clone o repositório:
   ```
   git clone <URL_DO_REPOSITORIO>
   ```

2. Navegue até o diretório do projeto:
   ```
   cd cadastro-funcionario-backend
   ```

3. Instale as dependências:
   ```
   npm install
   ```

## Uso

Para iniciar o servidor, execute o seguinte comando:
```
npm run dev
```

## Tecnologias utilizadas

   "Cors, Express, Firebase, Firebase Admin e TypeScript"