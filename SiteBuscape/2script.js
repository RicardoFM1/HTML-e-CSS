import {data} from "./dataup.js"
let carrinho = []

function openCarrinho(){
    const button = document.querySelector(".carrinhobtn")
    button.addEventListener("click",()=>{
        console.log("carrinho")
        const ulcart = document.querySelector(".cartul")
        if(ulcart){
            console.log("if")
            ulcart.remove()
        }else{
            console.log("else")
            const header = document.querySelector("header")
            header.insertAdjacentHTML("beforeend",`
                <ul class="cartul">
                </ul>
            `)
            carrinho.forEach((cart)=>{
                const ulcart = document.querySelector(".cartul")
                ulcart.insertAdjacentHTML("beforeend",`
                
                <li>${cart.name}</li>
                
                `)
            })
        }
        
    })
}
openCarrinho()

function ColocarTextos(item) {
const textosContainer = document.getElementById(`textos${item.product.id}`)
        
            textosContainer.insertAdjacentHTML("beforeend", 
        `<div class="produto">
        <h2 class="titulo">${item.product.name}
        <button id="btnfav${item.product.id}" class="botaofav"><img id="imgfav${item.product.id}" src="./Botaofav/botaofav.png" alt="Botao_Favorito"></button>
        </h2>
        <span class="destaque">Melhor Preço</span>
        <p><span class="quantidade">${item.product.price.installments}x R$</span> <span class="preco">${item.product.price.installmentValue.toFixed(2)}</span></p>
        <p>ou  <span class="valoravista"> R$ ${item.product.price.value.toFixed(2)}</span> à vista</p>
        <button id="btnadd${item.product.id}" class="botaotexto">Adicionar ao carrinho<span class="seta">ㅤ></span> </button>
        </div>`
    )
        
    

}
function ColocarImagens(item) {
    const imagensPequenasContainer = document.getElementById(`imagensp${item.product.id}`);
    const imagensGrandesContainer = document.getElementById(`imagensg${item.product.id}`);
    let i = 0;

    item.product.images.forEach((img) => {
        if (i < 3) {
            imagensPequenasContainer.insertAdjacentHTML("beforeend", `
                <img class="imagens_pequenas" src="${img}">
            `);
        } else {
            imagensGrandesContainer.insertAdjacentHTML("beforeend", `
                <img class="imagemgrande" src="${img}">
            `);
        }
        i++;
    });
}




function montarLista() {
    const ulProdutos = document.querySelector(".produtos");

    data.items.forEach((item) => {
        ulProdutos.insertAdjacentHTML("beforeend", `
            <li>
                <div class="imagens_pequenas" id="imagensp${item.product.id}">
                    <img src="${item.product.images[0]}" />
                </div>
                <div class="imagens_grandes" id="imagensg${item.product.id}"></div>
                <div class="textos1" id="textos${item.product.id}"></div>
            </li>
        `);

        ColocarImagens(item);
        ColocarTextos(item);

        const btnadd = document.getElementById(`btnadd${item.product.id}`);
        btnadd.addEventListener("click", () => {
            console.log("add ao carrinho", item.product);
            carrinho.push(item.product);
        });
    });
}
montarLista()