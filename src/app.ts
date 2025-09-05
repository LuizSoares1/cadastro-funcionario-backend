import express from "express"
import cors from "cors"
import funcionarioRoutes from "./routes/funcionario.routes"
import loginRoutes from "./routes/login.routes"

// Cria uma instância do Express
const app = express()

// Middlewares para CORS e parsing de JSON
app.use(cors())
app.use(express.json())

// Rotas
app.use("/funcionarios", funcionarioRoutes)
app.use("/login", loginRoutes)

// Rota raiz para verificar se a API está rodando
app.get("/", (req, res) => {
    console.log("Rota raiz acessada");
    res.send("API de Cadastro de Funcionários está rodando!")
})

export default app


