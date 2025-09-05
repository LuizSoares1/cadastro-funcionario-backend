import { Router } from 'express'
import { criarFuncionario, listarFuncionarios } from '../controllers/funcionarioController'

// Cria uma instância do roteador
const router = Router()

// Definindo as rotas para funcionários
router.post('/', criarFuncionario)
router.get('/', listarFuncionarios)

export default router
