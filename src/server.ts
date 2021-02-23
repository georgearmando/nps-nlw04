import express from "express";

const app = express();

// Criação de uma rota com o método http GET - Para Fazer uma Busca
app.get("/users", (request, response) => {
    return response.json({ message: "Helo World, I'm NLW - 04" });
});

app.post("/", (request, response) => {
    return response.json({ "message": "Os dados foram salvos com sucesso!" })
})

app.listen(3333, () => console.log("Server is running!!!"))