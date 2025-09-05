import { Request, Response } from "express"
import { db } from "../config/firebase"
import { Funcionario } from "../models/funcionario"
import { Timestamp } from "firebase-admin/firestore"

const collection = db.collection("funcionarios")

// Função auxiliar para gerar um ID numérico sequencial
export const gerarIdNumerico = async (): Promise<number> => {
  try {
    const snapshot = await collection.orderBy("id", "desc").limit(1).get()

    if (snapshot.empty) return 1

    const ultimo = snapshot.docs[0].data() as Funcionario
    const ultimoId = typeof ultimo.id === "number" ? ultimo.id : 0

    return ultimoId + 1
  } catch (error) {
    console.error("Erro ao gerar ID numérico:", error)
    return 1
  }
}

// Cria um novo funcionário
// só criei esta função para criar o login do admin para testes, no front não tem nada a respeito.
export const criarFuncionario = async (req: Request, res: Response) => {
    try {
        const funcionario: Funcionario = req.body

        if (funcionario.dataContratacao) {
            funcionario.dataContratacao = new Date(funcionario.dataContratacao)
        }

        const novoId = await gerarIdNumerico()
        funcionario.id = novoId

        await collection.add(funcionario)
        console.log("Funcionario criado", funcionario)

        res.status(201).json(funcionario)

    } catch (error) {
        console.error('Erro ao criar funcionario', error)
        res.status(500).json({ error: "Erro ao criar funcionário" })
    }
}

// Obtém todos os funcionários
// Converte o padrão timestamp do firebase no padrão Date e ainda nosso fuso horário brasileiro
export const listarFuncionarios = async (req: Request, res: Response) => {
    try {
        const snapshot = await collection.get()
        const funcionarios = snapshot.docs.map(doc => {
            const data = doc.data() as Funcionario
            if (data.dataContratacao instanceof Timestamp) {
                const date = data.dataContratacao.toDate()
                data.dataContratacao = date.toLocaleDateString("pt-BR") as any
            }
            return data
        })
        console.log("Funcionários recebidos do Firestore:", funcionarios)
        res.json(funcionarios)
    } catch (error) {
        console.error("Erro ao obter funcionários:", error)
        res.status(500).json({ error: "Erro ao obter funcionários" })
    }
}