let carrinho = [];
let total = 0;

function adicionarCarrinho(nome, preco) {

    carrinho.push({
        nome: nome,
        preco: preco
    });

    total += preco;

    atualizarCarrinho();
}

function atualizarCarrinho() {

    const lista = document.getElementById("lista-carrinho");

    lista.innerHTML = "";

    carrinho.forEach(produto => {

        let item = document.createElement("li");

        item.textContent =
            produto.nome + " - R$ " + produto.preco.toFixed(2);
            let carrinho = [];
            let total = 0;
            
            function adicionarCarrinho(nome, preco){
            
                carrinho.push({
                    nome,
                    preco
                });
            
                total += preco;
            
                atualizarCarrinho();
            
            }
            
            function atualizarCarrinho(){
            
                let lista = document.getElementById("lista-carrinho");
            
                lista.innerHTML = "";
            
                carrinho.forEach((produto,index)=>{
            
                    let item = document.createElement("li");
            
                    item.innerHTML = `
                        ${produto.nome}
                        <br>
                        R$ ${produto.preco.toFixed(2)}
                    `;
            
                    lista.appendChild(item);
            
                });
            
                document.getElementById("total").textContent =
                total.toFixed(2);
            
            }
            
            function finalizarCompra(){
            
                if(carrinho.length==0){
            
                    alert("Seu carrinho está vazio!");
            
                    return;
            
                }
            
                alert("Compra realizada!\n\nTotal: R$ " + total.toFixed(2));
            
                carrinho=[];
            
                total=0;
            
                atualizarCarrinho();
            
            }
        lista.appendChild(item);

    });

    document.getElementById("total").textContent =
        total.toFixed(2);
}

function finalizarCompra() {

    if (carrinho.length === 0) {
        alert("Seu carrinho está vazio!");
        return;
    }

    alert(
        "Compra realizada!\nTotal: R$ " +
        total.toFixed(2)
    );

    carrinho = [];
    total = 0;

    atualizarCarrinho();
}
