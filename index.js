const express = require("express");
const app = express();

//Estou dizendo para o Express usar o EJS como View Engine
app.set('view engine','ejs');
app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/",(req,res) =>{
    res.render("index");
})

app.get("/perguntar",(req,res) =>{
    res.render("perguntar");
})

app.post("/salvarpergunta",(req,res) =>{
    var titulo = req.body.titulo;
    var descricao = req.body.descricao;
    res.send("Formulário recebido! Titulo: " + titulo + " Descricao:" + descricao);
})

app.listen(8080,()=>{
    console.log("App rodando!");
})