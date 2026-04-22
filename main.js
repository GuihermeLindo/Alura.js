// Seleciona todos os botões e todos os textos das abas
const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

// Percorre cada botão para adicionar o evento de clique
for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function () {

        // Remove a classe "ativo" de todos os botões antes de adicionar ao clicado
        for (let j = 0; j < botoes.length; j++) {
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }

        // Adiciona a classe "ativo" ao botão e ao texto correspondente
        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    }
}