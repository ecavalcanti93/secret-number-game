let numeroSecreto = numeroAleatorio();
let tentativas = 1;

function exibirTexto (tag, texto) {
    
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function msgInicial() {
    exibirTexto("h1", "Secret Number Game");
    exibirTexto("p", "Choose a number from 1 to 1000");
}
    msgInicial();

function verificarChute() {
    let chute = document.querySelector("input").value;

    if (chute == numeroSecreto) {
        exibirTexto("h1", "You did it!");
        let palavraTentativa = tentativas > 1 ? "attempts" : "attempts";
        let msgTentativas = `You guessed the secret number with ${tentativas} ${palavraTentativa}!`;
        exibirTexto("p", msgTentativas);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        if(chute > numeroSecreto){
            exibirTexto("p", "The secret number is smaller");
        } else {
            exibirTexto("p", "The secret number is greater");
        }
    tentativas++;
    limparCampo();
}
}

function numeroAleatorio() {
    return parseInt(Math.random() * 1000 + 1);
}

function limparCampo() {
    chute = document.querySelector("input");
    chute.value = " ";
}

function reiniciarJogo(){
    numeroSecreto = numeroAleatorio();
    limparCampo();
    tentativas = 1;
    msgInicial();
    document.getElementById("reiniciar").setAttribute("disabled", true);
}