import {data} from "./data.js"

function carrinhoAbrir(){
    const button = document.querySelector(".carrinhobtn")
    button.addEventListener("click", ()=>{
        console.log("click")
    const ulcart = document.querySelector(".cartul") 
    if(ulcart){
        ulcart.remove()
    }else{
        const header = document.querySelector("header")
        console.log(header)
        header.insertAdjacentHTML("beforeend", `
            <ul class="cartul">
                <li></li>
                <li></li>
                 criar uma nova li que aparece os preços,
                 mas fora do forEach?
                  
            </ul>`)
         } 
      }    
  )
}
carrinhoAbrir()


function ColocarTextos() {
    const textosContainer = document.querySelector(".textos1")
    data.forEach((item) => {
        if (item.productCelular){
            textosContainer.insertAdjacentHTML("beforeend", 
        `<div class="produto">
        <h2 class="titulo">${item.productCelular.nameCelular}<span class="botaofav"><button></button></span></h2>
        <span class="destaque">Melhor Preço</span>
        <p><span class="quantidade">${item.productCelular.priceCelular.installmentsCelular}x R$</span> <span class="preco">${item.productCelular.priceCelular.installmentValueCelular.toFixed(2)}</span></p>
        <p>ou  <span class="valoravista"> R$ ${item.productCelular.priceCelular.valueCelular.toFixed(2)}</span> à vista</p>
        <button class="botaotexto">Adicionar ao carrinho<span class="seta">ㅤ></span> </button>
        </div>`
    )
        }
    }
  )
}
ColocarTextos()
    
function ColocarTextos2() {
    const textosContainer2 = document.querySelector(".textos2");
    data.forEach((item) => {
        if (item.productTv) {
            textosContainer2.insertAdjacentHTML(
                "beforeend",
                `<div class="produto">
                    
                        <h2 class="titulo">${item.productTv.nameTv}<span class="botaofav"><button></button></span></h2>
                        <span class="destaque">Melhor Preço</span>
                        <p><span class="quantidade">${item.productTv.priceTv.installmentsTv}x R$</span> <span class="preco">${item.productTv.priceTv.installmentValueTv.toFixed(2)}</span></p>
                        <p>ou  <span class="valoravista"> R$ ${item.productTv.priceTv.valueTv.toFixed(2)}</span> à vista</p>
                        <button class="botaotexto">Adicionar ao carrinho<span class="seta">ㅤ></span></button>
                </div>`
            );
        }
    });
}
ColocarTextos2();
