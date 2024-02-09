//acontece quando a pagina é carregada
document.addEventListener("DOMContentLoaded", function(){
    // Esconder o loader e mostrar o conteúdo
    document.getElementById("loader-wrapper").style.display = "block";

    setTimeout(function(){
        document.getElementById("loader-wrapper").style.display = "none";
        document.getElementById("page-wrapper").style.display = "block";
    }, 750);     
});

//acontece quando o usuario rola a tela 
window.addEventListener('scroll', function(){
    let header = document.querySelector('#header');
    if (window.scrollY > 0) {
        header.classList.add('bg-white');
        header.classList.add('shadow-lg');       
    } else {
        header.classList.remove('bg-white');
        header.classList.remove('shadow-lg'); 
    }
})


function openNav() {
    document.querySelector("#myNav").style.width = "100%";
  }
  
  function closeNav() {
    document.querySelector("#myNav").style.width = "0";
  }






// //COMANDO DE INTERAÇÃO COM MEU MENU
// let header = document.getElementById('header');
// let navigationHeader = document.getElementById('navegation_header');
// let content = document.getElementById('content');
// let showSidebar = false; //interruptor

// function alternarBarraLateral(){
//     showSidebar = !showSidebar;
//     if (showSidebar) {
//         navigationHeader.classList.remove('translate-x-[-100vw]');
//         navigationHeader.classList.add('translate-x[-10vw]');


//     }else{
//         navigationHeader.classList.remove('translate-x[-10vw]');
//         navigationHeader.classList.add('translate-x-[-100vw]');
//     }
// }


//quando passo o mouse em cima da ul principal, minha lista de opções apareça
//pensar na vertical e horizontal