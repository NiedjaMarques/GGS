//Acontece quando a pagina é carregada
document.addEventListener("DOMContentLoaded", function () {
  // Esconder o carregamento e mostrar o conteúdo
  const carregamentoPagina = document.getElementById("carregamentoPagina");
  const conteudoPagina = document.getElementById("conteudoPagina");

  carregamentoPagina.style.display = "block";

  setTimeout(function () {
    carregamentoPagina.style.display = "none";
    conteudoPagina.style.display = "block";
  }, 350);
});

//Acontece quando o usuário rola a tela
document.addEventListener("scroll", function () {
  const header = document.getElementById("header");
  if (window.scrollY > 0) {
    header.classList.add("bg-white", "shadow-lg");
    header.style.height = "80px";
  } else {
    header.classList.remove("bg-white", "shadow-lg");
    header.style.height = "96px";
  }
});

//Fecha o menu de navegação
function closeNav() {    
    var menu = document.getElementById("myNav");
    var openIcon = document.getElementById("open-menu");
    var closeIcon = document.getElementById("close-menu");
    var nav = document.getElementById("nav");

    menu.style.width = "0";
    openIcon.style.display = "block";
    closeIcon.style.display = "none";
    // nav.style.backgroundColor = 'white ';//
    // nav.style.transition = "all 2s ease"
}

//Abre o menu de navegação
function openNav() {
    var menu = document.getElementById("myNav");
    var openIcon = document.getElementById("open-menu");
    var closeIcon = document.getElementById("close-menu");

    menu.style.width = "100%";
    openIcon.style.display = "none";
    closeIcon.style.display = "block";
}
