import { initializeApp, cert, getApps, App, ServiceAccount } from "firebase-admin/app"
import { getFirestore } from "firebase-admin/firestore"
import { getAuth } from "firebase-admin/auth"
import * as fs from "fs"

// Função para obter as credenciais do Firebase
const getCredentials = (): ServiceAccount => {
    // Verifica se as variáveis de ambiente estão definidas (para produção)
    if (process.env.FIREBASE_PROJECT_ID && 
        process.env.FIREBASE_CLIENT_EMAIL && 
        process.env.FIREBASE_PRIVATE_KEY
    ) {
        // Ajusta a chave privada para substituir as quebras de linha corretamente
        return {
                projectId: process.env.FIREBASE_PROJECT_ID,
                clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
                privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n"),
        }
    }
    // Lê o arquivo localmente (para desenvolvimento)
    return JSON.parse(fs.readFileSync("serviceAccountKey.json", "utf8")) as ServiceAccount
}

// Inicializa o app do Firebase
const app: App = getApps()[0] ?? initializeApp({
    credential: cert(getCredentials())
})

// Exporta o Firestore e Auth para serem usados em outras partes do projeto
export const db = getFirestore(app)
export const auth = getAuth(app)