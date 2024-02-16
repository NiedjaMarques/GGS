const livroJSON = [
    {
        "titulo": "O Senhor dos Anéis",
        "autor": "J.R.R. Tolkien",
        "anoPublicacao": 1954,
        "genero": "Fantasia",
        "paginas": 1178,
        "editora": "HarperCollins"
    },

    {
        "titulo": "Narnia",
        "autor": "J.R.R. Tolkien",
        "anoPublicacao": 1954,
        "genero": "Fantasia",
        "paginas": 2372,
        "editora": "HarperCollins"
    }
]

//converter objeto para json
let jsonData = JSON.stringify(livroJSON);
console.log(jsonData);

//convertendo Json para objeto
let objdata = JSON.parse(jsonData);
console.log(objdata);

//metodo de percorrer arrays de um objeto
objdata.map((livros) => {
    console.log(livros.titulo);
    console.log(livros.paginas);

})
