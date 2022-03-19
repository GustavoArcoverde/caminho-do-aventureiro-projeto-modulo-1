function resposta() {
    var resposta = prompt(`1. Procurar uma oportunidade para fugir e tentar destruir o covil com magia.
2. Acender a dinamite e explodir tudo HAHAHA!`)
    var contador = 1
    var tentativas = 10

    while(tentativas > contador){

        if(resposta == "1" || resposta == "1. Procurar uma oportunidade para fugir e tentar destruir o covil com magia.") {
        window.location.href = "../fase final/fimDaHistoria.html";
        break

        }
        alert("Você acende a banana de dinamite, que por sinal parecia ser uma ótima ideia, a não ser pelo fato de você esquecer de calcular sua fuga. A dinamite explode, o fogo toma conta de tudo e, por causa de suas curtas pernas, você não escapa das chamas que se expandem por todo o esconderijo. Você morre queimado.")
        resposta = prompt("Tente novamente.")
        contador++
}
}