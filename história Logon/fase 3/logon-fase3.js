function resposta() {
    var resposta = prompt(`1. Correr para o mais longe que puder.
2. Tampar os ouvidos.`)
    var contador = 1
    var tentativas = 10

    while(tentativas > contador){

        if(resposta == "2" || resposta == "2. Tampar os ouvidos") {
        window.location.href = "../fase 4/logon-fase4.html";
        break

        }else if(resposta == "1" || resposta == "1. Correr para o mais longe que puder."){
        alert("Você tenta correr, mas o som te alcança sem muita dificuldade. Você então entra em um tipo de transe e sua vista escurece. Você nunca mais acorda.")
        resposta = prompt(`Tente novamente. Você vai:
1. Correr para o mais longe que puder.
2. Tampar os ouvidos.`)
        contador++
    } else if (resposta == null) {
        var stop = confirm("Deseja cancelar?")
        if (stop == true) {
            break
        } else {
            resposta = prompt(`Você vai:
1. Correr para o mais longe que puder.
2. Tampar os ouvidos.`)
        }
    }else{
        alert("Resposta inválida. Tente novamente.")
        resposta = prompt(`Tente novamente. Você vai:
1. Correr para o mais longe que puder.
2. Tampar os ouvidos.`)
    }
}
}