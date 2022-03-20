function resposta() {
    var resposta = prompt(`1. Você fica e luta contra o segundo ogro.
2. Você tenta atrair o ogro para longe do garoto.`)
    var contador = 1
    var tentativas = 10

    while(tentativas > contador){

        if(resposta == "2" || resposta == "2. Você tenta atrair o ogro para longe do garoto.") {
        window.location.href = "../fase4/john-fase4.html";
        break

        }
        alert("Você decide ficar e lutar, porém, você já gastou muita energia ao lidar com o primeiro ogro e, você percebe tarde demais, o segundo ogro é definitivamente mais forte que o primeiro. Ele lhe acerta, de cima para baixo, quebrando todos os ossos do seu corpo. Você fica semiconsciente, apenas por tempo o suficiente para ver ele erguer a clava e, então, desferir um ataque fatal contra você.")
        resposta = prompt(`Tente novamente. O que você vai fazer?
1. Você fica e luta contra o segundo ogro.
2. Você tenta atrair o ogro para longe do garoto.`)
        contador++
}
}