import { data } from "./dataup.js";
let carrinho = [];

function openCarrinho() {
  const button = document.querySelector(".carrinhobtn");
  button.addEventListener("click", () => {
    const ulcart = document.querySelector(".cartul");
    if (ulcart) {
      ulcart.remove();
    } else {
      const header = document.querySelector("header");
      header.insertAdjacentHTML(
        "beforeend",
        `
                <ul class="cartul">
                </ul>
                `
      );
      atualizarCarrinho();
    }
  });
}
openCarrinho();

function removerItem() {
    const btnRemover = document.querySelectorAll(".btnremover");
    btnRemover.forEach((btn) => {
      btn.addEventListener("click", () => {
        const index = carrinho.findIndex((produto) => produto.id == btn.id);
        carrinho.splice(index, 1); 
          const div = document.querySelector(".notificacao");
          const p = document.createElement("p");
          div.append(p)
          div.innerHTML = carrinho.length;
        atualizarCarrinho(); 
      });
    });
  }

  function atualizarCarrinho() {
    const ulcart = document.querySelector(".cartul");
    ulcart.innerHTML = ""; 
  
    
    carrinho.forEach((produto) => {
      ulcart.insertAdjacentHTML(
        "beforeend",
        `
                          <li class="licart">
                          <div class="imgcart">
                          <img src="${produto.images[3]}">
                          </div>
                          <div class="produtoscart">
                          <p class="textocart">${produto.name}</p>
                          <p class="parcelacart">${produto.price.installments}x de R$ ${produto.price.installmentValue.toFixed(2)}</p>
                          <p class="valorcart">R$ ${produto.price.value.toFixed(2)} à vista</p>
                          </div>
                          <button class="btnremover" id=${produto.id}>X</button>
                          </li>
                          `
      );
    });
  
    if (!document.querySelector(".subtotal")) {
      ulcart.insertAdjacentHTML(
        "beforeend",
        `
                              <li class="subtotal" style="background-color:#daaf00; height: 140px";>
                                  <p class="subtotaltexto">Subtotal</p>
                                  <p class="subtotalparcelado">0x de R$ 0,00</p>
                                  <p class="subtotalavista">ou R$ 0,00 à vista</p>
                              </li>
                          `
      );
    }
  
    somarSubtotal();
    removerItem();
    
   
  }

function somarSubtotal() {
  const subtotalParcelado = document.querySelector(".subtotalparcelado");
  const subtotalAVista = document.querySelector(".subtotalavista");

  if (carrinho.length === 0) {
    subtotalParcelado.innerText = "0x de R$ 0,00";
    subtotalAVista.innerText = "ou R$ 0,00 à vista";
    return;
  }
  const totalAVista = carrinho.reduce((acc, produto) => acc + produto.price.value, 0);
  const totalParcelado = totalAVista / 10;
  const numeroParcelas = 10;

  subtotalParcelado.textContent = `${numeroParcelas}x de R$ ${totalParcelado.toFixed(2)}`;
  subtotalAVista.textContent = `ou R$ ${totalAVista.toFixed(2)} à vista`;
}

function ColocarTextos() {
    data.items.forEach((produto) => {
      const textosContainer = document.getElementById(`textos${produto.product.id}`);
      if (produto.product.id) {
        textosContainer.insertAdjacentHTML(
          "beforeend",
          `<div class="produto">
          <h2 class="titulo">${produto.product.name}
          <button id="btnfav${produto.product.id}" class="botaofav"><img id="imgfav${produto.product.id}" src="./IMAGENS/Botaofav/botaofav.png" alt="Botao_Favorito"></button>
          </h2>
          <span class="destaque">Melhor Preço</span>
          <p><span class="quantidade">${produto.product.price.installments}x R$</span> <span class="preco">${produto.product.price.installmentValue.toFixed(2)}</span></p>
          <p>ou  <span class="valoravista"> R$ ${produto.product.price.value.toFixed(2)}</span> à vista</p>
          <button id="btnadd${produto.product.id}" class="botaotexto">Adicionar ao carrinho<span class="seta">ㅤ></span> </button>
          </div>`
        );
  
        const btnadd = document.getElementById(`btnadd${produto.product.id}`);
        btnadd.addEventListener("click", () => {
          carrinho.push(produto.product); 
          mostrarMensagem("Você adicionou esse item ao carrinho!");
          const div = document.querySelector(".notificacao");
          const p = document.createElement("p");
          div.append(p)
          div.innerHTML = carrinho.length;
          
          atualizarCarrinho(); 
        });
      }
    });
  }

function ColocarImagens() {
  data.items.forEach((produto) => {
    const imagensPequenasContainer = document.getElementById(`imagensp${produto.product.id}`);
    const imagensGrandesContainer = document.getElementById(`imagensg${produto.product.id}`);
    let i = 0;

    produto.product.images.forEach((img) => {
      if (i < 3) {
        imagensPequenasContainer.insertAdjacentHTML(
          "beforeend",
          `<img class="imagens_pequenas" src="${img}">`
        );
      } else {
        imagensGrandesContainer.insertAdjacentHTML(
          "beforeend",
          `<img class="imagemgrande" src="${img}">`
        );
      }
      i++;
    });
  });
}

function montarLista() {
  const ulProdutos = document.querySelector(".produtos");

  data.items.forEach((produto) => {
    ulProdutos.insertAdjacentHTML(
      "beforeend",
      `
                    <li>
                    <div class="imagens_pequenas" id="imagensp${produto.product.id}">
                    <img src="${produto.product.images[0]}" />
                    </div>
                    <div class="imagens_grandes" id="imagensg${produto.product.id}"></div>
                    <div class="textos1" id="textos${produto.product.id}"></div>
                    </li>
                    `
    );
  });

  ColocarImagens();
  ColocarTextos();
}

function mostrarMensagem(mensagem) {
  let mensagemContainer = document.querySelector(".mensagem-temporaria");
  if (!mensagemContainer) {
    mensagemContainer = document.createElement("div");
    mensagemContainer.className = "mensagem-temporaria";
    document.body.appendChild(mensagemContainer);
  }

  mensagemContainer.textContent = mensagem;

  mensagemContainer.style.display = "block";
  setTimeout(() => {
    mensagemContainer.style.display = "none";
  }, 3000);
}

montarLista();

function btnFav(){
    data.items.forEach((produto) => {
        const btnFav = document.getElementById(`btnfav${produto.product.id}`);
        const imgFav = document.getElementById(`imgfav${produto.product.id}`);
        let éFavorito = false;
    
        btnFav.addEventListener("click", () => {
        if (éFavorito) {
            imgFav.src = "./IMAGENS/Botaofav/botaofav.png";
            mostrarMensagem("Você removeu esse item dos favoritos!");
        } else {
            imgFav.src = "./IMAGENS/Botaofav/botaofav2.png";
            mostrarMensagem("Você adicionou esse item aos favoritos!");
        }
        éFavorito = !éFavorito;
        });
    });
}
btnFav()


