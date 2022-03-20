function resposta() {
    var resposta = prompt(`1. Ajudar o garoto.
2. Não se envolver`)
    var contador = 1
    var tentativas = 10

    while(tentativas > contador){

        if(resposta == "1" || resposta == "1. Ajudar o garoto") {
        window.location.href = "../fase 2/logon-fase2.html";
        break

        }
        alert("Você pede desculpas ao garoto, mas diz que não pode se envolver, e decide seguir seu rumo, mesmo ficando com um gosto ruim na boca por abandonar um garoto em necessidade.")
        resposta = prompt(`Tente novamente. Você vai:
1. Ajudar o garoto.
2. Não se envolver`)
        contador++
}
}