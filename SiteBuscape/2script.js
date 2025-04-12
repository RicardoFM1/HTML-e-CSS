import { data } from "./data.js"
 
function carrinhoAdicionar(){
    const button = document.querySelector(".carrinho")
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
                  
            </ul>`)
    } 
})
}
carrinhoAdicionar()




