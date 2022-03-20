function resposta() {
    var resposta = prompt(`1. Enfrentá-los!
2. Se esconder embaixo da mesa.`)
    var contador = 1
    var tentativas = 10

    while(tentativas > contador){

        if(resposta == "2" || resposta == "2. Se esconder embaixo da mesa.") {
        window.location.href = "../fase 4/melgar-fase4.html";
        break

        }
        alert("Você toma a iniciativa de enfrentá-los. Mas, você não dura muito contra as flechas dos assassinos.")
        resposta = prompt(`Tente novamente. Você irá:
1. Enfrentá-los!
2. Se esconder embaixo da mesa.`)
        contador++
}
}