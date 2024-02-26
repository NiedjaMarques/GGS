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
    //header.style.height = "80px";
  } else {
    header.classList.remove("bg-white", "shadow-lg");
    //header.style.height = "96px";
  }
});

//Fecha o menu de navegação
function closeNav() {
  var menu = document.getElementById("showNave");
  var openIcon = document.getElementById("open-menu");
  var closeIcon = document.getElementById("close-menu");
  var myNav = document.getElementById("myNav");

  menu.style.width = "0";

  myNav.style.width = "0";
  myNav.style.transition = "all 1s";

  openIcon.style.display = "block";
  closeIcon.style.display = "none";
}

//Abre o menu de navegação
function openNav() {
  var menu = document.getElementById("showNave");
  var openIcon = document.getElementById("open-menu");
  var closeIcon = document.getElementById("close-menu");
  var myNav = document.getElementById("myNav");

  menu.style.width = "100%";

  setTimeout(function () {
    myNav.style.width = "280px";
  }, 500);

  openIcon.style.display = "none";
  closeIcon.style.opacity = "1";
  closeIcon.style.display = "block";
}

//Abrindo opções do submenu - PARAMETRO DINAMICO
function openOptions(id){
  let submenu = document.getElementById(id);

  if (submenu.style.display === 'none' || submenu.style.display === ''){
    submenu.style.display = "block";
  }else{
    submenu.style.display = "none";
  } 
  
}