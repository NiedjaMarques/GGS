//Acontece quando a pagina é carregada
document.addEventListener("DOMContentLoaded", function(){
    // Esconder o carregamento e mostrar o conteúdo
    const carregamentoPagina = document.getElementById("carregamentoPagina");
    const conteudoPagina = document.getElementById("conteudoPagina");

    carregamentoPagina.style.display = "block";
    
    setTimeout(function(){
        carregamentoPagina.style.display = "none";
        conteudoPagina.style.display = "block";
    }, 450);
});

//Acontece quando o usuário rola a tela 
window.addEventListener('scroll', function(){
    const header = document.querySelector('#header');
    if (window.scrollY > 0) {
        addClass(header, ['bg-white', 'shadow-lg']); // Adiciona classes usando função
    } else {
        removeClass(header, ['bg-white', 'shadow-lg']); // Remove classes usando função
    }
});

// Abre o menu de navegação
function openNav() {
    document.querySelector("#myNav").style.width = "100%";
    // document.querySelector("#open-btn").style.display = "none";
}

// Fecha o menu de navegação
function closeNav() {
    document.querySelector("#myNav").style.width = "0";
}