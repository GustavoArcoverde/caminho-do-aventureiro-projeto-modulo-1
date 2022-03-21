function resposta() {
    var resposta = prompt(`1. Encostar na árvore.
2. Observar a distância.`)
    var contador = 1
    var tentativas = 10

    while(tentativas > contador){

        if(resposta == "2" || resposta == "2. Observar a distância") {
        window.location.href = "../fase 3/logon-fase3.html";
        break

        }else if (resposta == "1" || resposta == "1. Encostar na árvore."){
        alert("Você encosta na árvore, apenas para sentir sua pele sendo cortada por algo que você desconhece. Em seguida, você sente que algo entrou em sua corrente sanguínea. Suas veias começam a ficar pretas e sua visão turva. Você tomba para trás e, antes de ficar inconsciente, você escuta uma risada maligna.")
        resposta = prompt(`Tente novamente. Você pretende:
1. Encostar na árvore.
2. Observar a distância.`)
        contador++
    }else{
        alert("Resposta inválida. Tente novamente.")
        resposta = prompt(`Tente novamente. Você pretende:
1. Encostar na árvore.
2. Observar a distância.`)
    }
}
}