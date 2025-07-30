//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let nomesAmigos = [];

function adicionarAmigo(){
    const campo = document.getElementById ('amigo');
    const nome = campo.value.trim();
    
    if (nome !== "") {
        nomesAmigos.push (nome);
        campo.value = "" ;//para limpar o campo
        listarAmigos();
    } 
    
    alert ('Por favor, insira um nome.');
}
