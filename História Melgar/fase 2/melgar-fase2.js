function resposta() {
    var resposta = prompt(`1. Esquerda.
2. Direita.`)
    var contador = 1
    var tentativas = 10

    while(tentativas > contador){

        if(resposta == "2" || resposta == "2. Direita") {
        window.location.href = "../fase 3/melgar-fase3.html";
        break

        }
        alert("Você chega a uma sala completamente vazia, estranhamente limpa, mas vazia. De repente, a porta se fecha e tranca quando você entra e um gás começa a ser expelido pelos cantos da sala. Em minutos, você já não consegue mais respirar.")
        resposta = prompt(`Tente novamente. Você irá para:
1. Esquerda.
2. Direita.`)
        contador++
}
}