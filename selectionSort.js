let livros = require('./listaLivros');
let menorValor = require('./menorValor');

for (let atual = 0; atual < livros.length; atual++){
    let menor = menorValor(livros, atual);

    let livroAtual = livros[atual];
    console.log("Posição Atual ", atual);
    console.log("Livro Atual ", livros[atual]);

    let  livroMenorPreco = livros[menor];

    console.log("Livro com menor preço:", livro[menor]);

    livros[atual] = livroMenorPreco;
    livros[menor] = livroAtual;
}
console.log(livros)