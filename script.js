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
let indiceAtual = 0; // Índice da imagem atual

// Array com as imagens das miniaturas
const imagens = [
  "imagens/image-product-1.jpg",
  "imagens/image-product-2.jpg",
  "imagens/image-product-3.jpg",
  "imagens/image-product-4.jpg"
];

// Função para atualizar a imagem principal e miniatura selecionada
function atualizarImagem(indice) {
  imagemGrande.src = imagens[indice];
  // Remove a classe 'selecionada' de todas as miniaturas
  miniaturas.forEach((m) => m.classList.remove("selecionada"));
  // Adiciona a classe 'selecionada' na miniatura correspondente
  miniaturas[indice].classList.add("selecionada");
  indiceAtual = indice;
}

// Clique nas miniaturas
miniaturas.forEach((miniatura, index) => {
  miniatura.addEventListener("click", function () {
    atualizarImagem(index);
  });
});

// Navegação por setas (mobile)
const setaAnterior = document.querySelector(".seta-anterior");
const setaProxima = document.querySelector(".seta-proxima");

setaAnterior.addEventListener("click", function () {
  indiceAtual = indiceAtual > 0 ? indiceAtual - 1 : imagens.length - 1;
  atualizarImagem(indiceAtual);
});

setaProxima.addEventListener("click", function () {
  indiceAtual = indiceAtual < imagens.length - 1 ? indiceAtual + 1 : 0;
  atualizarImagem(indiceAtual);
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
    cartPopupTotal.textContent = `US$ ${total.toFixed(2)}`;
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