import app from "./app"

// Porta do Server
const PORT = process.env.PORT || 3000

// Sinalizar o servidor que está rodando na tal porta
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
})