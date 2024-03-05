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

//função carrossel com imagens
// const imgs = document.getElementById("img"); //div geral
// const img = document.querySelectorAll("#img img"); //div imagens

// let índiceImg = 0;

// function carrossel(){
//   índiceImg++;

//   if (índiceImg >= img.length) {
//     índiceImg = 0; 
//   }

//   // Calcula a posição de translação
//   const translateValue = índiceImg * img[0].clientWidth;

//   console.log(índiceImg , translateValue);

//   //Existe um padrão que pula de 105 em 105   

//   imgs.style.transform = `translateX(${translateValue}px)`;

//   if (índiceImg === img.length / 2) {

//    setTimeout(() => {
    
//       imgs.style.transition = "none"; // Remove a transição
//       índiceImg = 0;
//       imgs.style.transform = `translate-x-full`;

//       setTimeout(() => {
//         imgs.style.transition = "transform 0.8s ease"; // Restaura a transição
//       }, 50); // Pequeno atraso para garantir que a transição seja aplicada corretamente
//     }, 800); // Espera 0.8s para que a última imagem seja exibida completamente antes de reiniciar
//   }
// }

// setInterval(carrossel, 2000);


  new Glide('.glide').mount();