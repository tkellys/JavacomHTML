
// transformando um html collection em um ARRAY da forma mais facil so colocar [...]

const lista = [...document.getElementById("lista").children];

lista.forEach((item) => {
    item.onclick = concluir

});

function concluir(evento) {

    console.log(evento.target) 
    evento.target.classList.toggle("concluido")
}