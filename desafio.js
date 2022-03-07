const codProduto = []

for (let i = 0; codProduto.length <= 9; i++) {
    codProduto.push(i)
}

console.log (codProduto);

let produtos = ['banana', 'maçã', 'uva', 'pêra', 'tangerina', 'melancia', 'morango', 'melão', 'mamão', 'kiwi']
console.log(produtos);

let preco = ['R$ 4,00','R$ 4,00','R$ 8,00','R$ 5,00','R$ 8,00','R$ 4,00','R$ 5,00','R$ 4,00','R$ 6,00','R$ 10,00']
console.log(preco);

//var precoBRL = preco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}); -> pensei em colocar os valores em BRL, mas mantive assim por agora.

const codProdutoPreco = []

for (let i=0; codProdutoPreco.length < produtos.length; i++) {
    codProdutoPreco.push(
        {
            codigo: codProduto[i],
            produto: produtos[i],
            precoProduto: preco[i],
        }
    )
}

codProdutoPreco.forEach((name, i) => {
    setTimeout(() => {
      console.log(name);
    }, i*3000);
  });




