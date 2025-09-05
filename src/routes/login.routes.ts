import { Router } from "express"
import { login, cadastrarUsuario} from "../controllers/loginController"

// Cria uma instância do roteador
const router = Router()

// Definindo a rota para login
router.post("/", login)

// Se quiser criar um cadastro, fique a vontade.
router.post("/cadastro", cadastrarUsuario)

export default router