/* Menu mobile desaparecer e aparecer*/

document.getElementById("openMenu").onclick = function () {
  document.getElementById("mobileMenu").classList.add("open");
};
document.getElementById("closeMenu").onclick = function () {
  document.getElementById("mobileMenu").classList.remove("open");
};

/*galeria de produtos*/

const miniaturas = document.querySelectorAll(".miniatura");
const imagemGrande = document.getElementById("imagem-grande");

miniaturas.forEach((miniatura) => {
  miniatura.addEventListener("click", function () {
    // Troca a imagem principal
    imagemGrande.src = this.getAttribute("data-imagem");
    // Remove a classe 'selecionada' de todas as miniaturas
    miniaturas.forEach((m) => m.classList.remove("selecionada"));
    // Adiciona a classe 'selecionada' na miniatura clicada
    this.classList.add("selecionada");
  });
});

/* Controle de quantidade do carrinho */

const btnDiminuir = document.getElementById("diminuir");
const btnAumentar = document.getElementById("aumentar");
const spanQuantidade = document.getElementById("quantidade-itens");

let quantidade = 0;
spanQuantidade.textContent = quantidade;

btnDiminuir.addEventListener("click", function () {
  if (quantidade > 0) {
    quantidade--;
    spanQuantidade.textContent = quantidade;
  }
});

btnAumentar.addEventListener("click", function () {
  if (quantidade < 10) {
    quantidade++;
    spanQuantidade.textContent = quantidade;
  }
});

// Lógica do pop-up do carrinho
const btnAddToCart = document.querySelector(".adicionar-carrinho");
const cartPopup = document.getElementById("cart-popup");
const cartPopupQtd = document.getElementById("cart-popup-qtd");
const cartPopupTotal = document.getElementById("cart-popup-total");
const cartPopupDelete = document.getElementById("cart-popup-delete");

// Badge de quantidade no carrinho
const cartBadge = document.getElementById("cart-badge");
const cartIcon = document.getElementById("cartIcon");
let quantidadeNoCarrinho = 0;

btnAddToCart.addEventListener("click", function () {
  if (quantidade > 0) {
    quantidadeNoCarrinho += quantidade;
    if (quantidadeNoCarrinho > 10) quantidadeNoCarrinho = 10;
    cartBadge.textContent = quantidadeNoCarrinho;
    cartBadge.style.display = "flex";
    quantidade = 0;
    spanQuantidade.textContent = quantidade;
  }
});

cartIcon.addEventListener("click", function () {
  if (quantidadeNoCarrinho > 0) {
    cartPopupQtd.textContent = quantidadeNoCarrinho;
    const total = quantidadeNoCarrinho * 125;
    cartPopupTotal.textContent = `R$ ${total.toFixed(2).replace(".", ",")}`;
    cartPopup.classList.add("show");
  }
});

cartPopupDelete.addEventListener("click", function () {
  cartPopup.classList.remove("show");
  quantidadeNoCarrinho = 0;
  cartBadge.textContent = 0;
  cartBadge.style.display = "none";
  spanQuantidade.textContent = 0;
});

// Esconde o pop-up se a quantidade no carrinho voltar a 0
btnDiminuir.addEventListener("click", function () {
  if (quantidadeNoCarrinho === 0) {
    cartPopup.classList.remove("show");
  }
});
