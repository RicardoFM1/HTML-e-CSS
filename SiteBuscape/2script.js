import {data} from "./dataup.js"
let carrinho = []


function openCarrinho(){
    const button = document.querySelector(".carrinhobtn")
    button.addEventListener("click",()=>{
        const ulcart = document.querySelector(".cartul")
        if(ulcart){
            ulcart.remove()
        }else{
            atualizarCarrinho()
        }
        })
        
        }
        openCarrinho()
        
 function removerItem() {
            const btnRemover = document.querySelectorAll(".btnremover")
            btnRemover.forEach((btn) => {
               
                btn.addEventListener("click",()=>{
                    console.log(btn.id)
                    const index = carrinho.findIndex((item) => item.id == btn.id)
                    console.log(index,carrinho)
                    carrinho.splice(index,1)
                    atualizarCarrinho()
                })
            
                

            })
                
            
                
            }
        
        
        
        function atualizarCarrinho(){
            ulcart = document.querySelector(".cartul")
            const header = document.querySelector("header")
            header.insertAdjacentHTML("beforeend",`
                <ul class="cartul">
                
                
                </ul>
                `)
                // somar as parcelas e valor de cada item e colocar aí em cima, como?
                const ulcart = document.querySelector(".cartul")
                carrinho.forEach((cart)=>{
                    ulcart.insertAdjacentHTML("beforeend",`
                        
                        
                        <li class="licart">
                        <div class="imgcart">
                        <img src="${cart.images[3]}">
                        </div>
                        <div class="produtoscart">
                        <p class="textocart">${cart.name}</p>
                        <p class="parcelacart"> ${cart.price.installments}x de R$ ${cart.price.installmentValue.toFixed(2)}</p>
                        <p class="valorcart">R$ ${cart.price.value.toFixed(2)} à vista </p>
                        </div>
                        <button class="btnremover" id=${cart.id}>X</button>
                        </li>
                        
                        
                        
                        
                        
                        `)
                        
                    })
                    if(carrinho.length > 0){
                        ulcart.insertAdjacentHTML("beforeend",`
                            <li class="subtotal>
                            <p class="subtotalparcelado">10x de R$ 0,00 </p> 
                            <p class="subtotalavista">ou R$ 0,00 à vista</p>
                            </li>
                        `)
                        }
                        removerItem()
                    }
                    
                    

        
        function ColocarTextos(item) {
            const textosContainer = document.getElementById(`textos${item.product.id}`)
            if (item.product.id )
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
        
        
        
        
        let numeroClicks = 1
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
                        carrinho.push(item.product);
                        if (numeroClicks <= 1){
                     alert("Foi adicionado " + numeroClicks + " item ao carrinho" )

                        }else{
                            alert("Foram adicionados " + numeroClicks + " itens ao carrinho" )
                        }
            numeroClicks++;
        })});
    };
    montarLista()
    

    
    
    
    
    
    
    
    
    // function BotaoFavorito() {
    //     const botaofav = document.querySelectorAll("[id='btnfav']");
        
    //     botaofav.forEach((botaofav) => {
    //         botaofav.addEventListener("click", () => {
    //             botaofav.classList.toggle("favorito");
    //             botaofav.classList.toggle("naofavorito");
    //         });
    //     });
    // }
    // BotaoFavorito();


    // o que falta: 
    // - fazer o botão de favorito funcionar (não tá funcionando)
    // - fazer o botão de remover do carrinho funcionar (não tá funcionando)
    // - fazer o subtotal dos produtos funcionar (não tá funcionando)
    // - colocar uma notificação de quantos itens tem no carrinho (não tá funcionando)