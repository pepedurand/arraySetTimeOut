const codProduto = []
for (let i = 1; codProduto.length <= 10; i++) {
    codProduto.push(i)
}
console.log (codProduto);

let produtos = ['banana', 'maçã', 'uva', 'pêra', 'tangerina', 'melancia', 'morango', 'melão', 'mamão', 'kiwi']
console.log(produtos);

let preco = [4, 4, 8, 5, 8, 4, 5, 4, 6, 10]
console.log(preco);

var precoBRL = preco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

console.log(precoBRL)

const codProdutoPreco = []

for (let i=0; codProdutoPreco.length < produtos.length; i++) {
    codProdutoPreco.push(
        {
            codigo: i<9 ? "00"+ codProduto[i] : "0" + codProduto[i],
            produto: produtos[i],
            precoProduto: preco[i].toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}),
        }
    )
}

codProdutoPreco.forEach((name, i) => {
    setTimeout(() => {
      console.log(name);
    }, i*3000);
  });




