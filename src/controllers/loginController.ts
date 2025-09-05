import { Request, Response } from "express"
import { Usuario } from "../models/usuario"
import { db } from "../config/firebase"

const collection = db.collection("usuarios")

// Função para login
export const login = async (req: Request, res: Response) => {
    const { username, password } = req.body
    try {
        const snapshot = await collection.where("username", "==", username).where("password", "==", password).get()
        if (snapshot.empty) {
            return res.status(401).json({ message: "Credenciais inválidas" })
        }
        const user = snapshot.docs[0].data() as Usuario;
        res.json({ message: "Login bem-sucedido", user })
    } catch (error) {
        res.status(500).json({ error: "Erro ao processar login" })
    }
}

// Função para cadastrar um novo usuário
export const cadastrarUsuario = async (req: Request, res: Response) => {
    const { username, password } = req.body;
    try {
        const novoUsuario = { username, password };
        const docRef = await collection.add(novoUsuario);
        res.status(201).json({ id: docRef.id, ...novoUsuario });
    } catch (error) {
        res.status(500).json({ error: "Erro ao cadastrar usuário" });
    }
}

