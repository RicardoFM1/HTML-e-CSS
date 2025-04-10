// import { produtos } from "./data.js"
// const carrinho = []
// function montarProdutos(){
//     const ul = document.querySelector("ul")
//     produtos.forEach((produto)=>{
//         ul.insertAdjacentHTML("beforeend",`
//              <li>
//                 <p>${produto.name}</p>
//                 <p>${produto.price}</p>
//                 <p>${produto.descricao}</p>
//                 <button id="${produto.id}add">Adicionar ao carrinho</button>
//             </li>
//             `)
//         const button = document.getElementById(`${produto.id}add`)
//         button.addEventListener("click",()=>{
//             console.log("click",produto)
//             carrinho.push(produto)
//             montarCarrinho(carrinho)
//         })
//     })
// }
// montarProdutos()
// function montarCarrinho(carrinho=[]){
//     const ul = document.querySelector(".carrinho")
//     ul.innerHTML = ""
//     carrinho.forEach((produto)=>{
//         ul.insertAdjacentHTML("afterbegin",`
//             <li>
//                <p>${produto.name}</p>
//                <p>${produto.price}</p>
//                <p>${produto.descricao}</p>
//                <button id="${produto.id}cancel">Remover ao carrinho</button>
//            </li>
//            `)
//            const button = document.getElementById(`${produto.id}cancel`)
//            button.addEventListener("click",(e)=>{
//             console.log(e,"event")
//             removerItemDoCarrinho(produto)
//            })
//     })
    
// }
// function removerItemDoCarrinho(produto){
//     console.log(produto,"produto")
//     const index = carrinho.findIndex((cart)=>{
//         return cart.id === produto.id
//     })
//     carrinho.splice(index,1)
//     montarCarrinho(carrinho)
// }