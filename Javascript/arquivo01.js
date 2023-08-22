function MenuNavBar() {
    const menu = document.getElementById("menu")
    let lista = document.getElementById("lista")

    if (window.getComputedStyle(lista).display === 'none') { // Se o menu não estiver sendo exibido...
        lista.style.display = 'block' // ...quando for clicado ele mostra as opções
        
     }else{
        lista.style.display = 'none'; // ...quando clicado novamente, esconde as opções
    }
 }







// function MenuNavBar(e) { //função chamada
//     const menu = document.getElementById('menu') // Pega o elemento com ID "menu" e armazena na variavel

//     // Verifica se o menu esta oculto no HTML usando a função "window.getComputedStyle(menu)"
//     if (window.getComputedStyle(menu).display === 'none') { // Se o menu não estiver sendo exibido...
//         menu.style.display = 'block' // ...quando for clicado ele mostra as opções

        
//        //menu.style.flexDirection = 'column'; // Adiciona a classe "flex-col" para exibir como coluna
//         //menu.classList.remove('hidden'); // Remove a classe "hidden" para tornar o menu visível


//     } else {
//         menu.style.display = 'none'; // ...quando clicado novamente, esconde as opções
//     }
// }

