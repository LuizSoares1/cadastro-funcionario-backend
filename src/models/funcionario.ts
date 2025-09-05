// Responsavel por definir a estrutura de um funcionário
export interface Funcionario {
    id: number
    ativo: boolean
    foto: string
    nome: string
    email: string
    dataContratacao: Date | string
    cpf: string
    endereco: {
        rua: string
        cep: string
        bairro: string
        cidade: string
        estado: string
    }
}
