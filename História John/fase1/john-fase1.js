function resposta() {
    var resposta = prompt(`1. Seguir o som.
2. Seguir o rastro.`)
    var contador = 1
    var tentativas = 10

    while(tentativas > contador){

        if(resposta == "2" || resposta == "2. Seguir o rastro.") {
        window.location.href = "../fase2/john-fase2.html";
        break

        }
        alert(`Você decide seguir o som. Pede para que Lisa avise aos guardas da cidade sobre o que aconteceu, enquanto ele busca pelo garoto perdido. Você entra na floresta, porém, depois de um certo tempo, o som para completamente. E você não sabe como retornar. Você se perdeu.
        Para sua infelicidade, enquanto tentava encontrar o caminho de volta, você tropeça em uma pedra e cai em um longo buraco, quebrando sua perna no processo. Você pede por socorro, mas ninguém vem. Você morre alguns dias depois, de inanição.`)
        resposta = prompt(`Tente novamente. Você irá:
1. Seguir o som.
2. Seguir o rastro.`)
        contador++
}
}