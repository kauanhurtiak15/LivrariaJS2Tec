let precoLivros = [60, 50, 49, 100, 35, 90, 80];

let maisBarato = 0;

for (let atual = 0; atual < precoLivros.length; atual++){
    if (precoLivros[atual] < precoLivros[maisBarato]){
        maisBarato = atual;
    }
}

console.log(`O livro mais barato custa: ${precoLivros[maisBarato]} mangos`);