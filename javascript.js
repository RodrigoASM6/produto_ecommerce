
/* Menu mobile desaparecer e aparecer*/ 

document.getElementById('openMenu').onclick = function() {
  document.getElementById('mobileMenu').classList.add('open');
};
document.getElementById('closeMenu').onclick = function() {
  document.getElementById('mobileMenu').classList.remove('open');
};


/*galeria de produtos*/

const miniaturas = document.querySelectorAll('.miniatura');
const imagemGrande = document.getElementById('imagem-grande');

miniaturas.forEach(miniatura => {
  miniatura.addEventListener('click', function() {
    // Troca a imagem principal
    imagemGrande.src = this.getAttribute('data-imagem');
    // Remove a classe 'selecionada' de todas as miniaturas
    miniaturas.forEach(m => m.classList.remove('selecionada'));
    // Adiciona a classe 'selecionada' na miniatura clicada
    this.classList.add('selecionada');
  });
});