function resposta() {
    var resposta = prompt(`1. Ir atrás desse traste! 
2. Ficar bebendo e comprar outro alaúde depois.`)
    var contador = 1
    var tentativas = 10

    while (tentativas > contador) {

        if (resposta == "1" || resposta == "1. Ir atrás desse traste!") {
            window.location.href = "../fase 2/melgar-fase2.html";
            break

        } else if (resposta == "2" || resposta == "2. Ficar bebendo e comprar outro alaúde depois.") {
            alert("Você permanece bebendo e aproveitando a noite, depois de um tempo, quando a bebida faz efeito, você esquece completamente do homem encapuzado que havia lhe tirado do sério. No dia seguinte, após uma longa ressaca, você vai até o comerciante mais próximo a procura de outro alaúde. Assim o faz, mas fica com um gostinho de “não é a mesma coisa” na boca, e se pergunta: “O que será que aquele miserável fez com meu precioso alaúde?”. Pergunta essa que fica sem resposta...")
            resposta = prompt(`Tente novamente. Você vai: 
1. Ir atrás desse traste! 
2. Ficar bebendo e comprar outro alaúde depois.`)
            contador++
        } else if(resposta == null){
            var stop = confirm("Deseja cancelar?")
            if(stop == true){
                break
            }else{
            resposta = prompt(`Você vai: 
1. Ir atrás desse traste! 
2. Ficar bebendo e comprar outro alaúde depois.`)
            }
        } else {
            alert("Resposta inválida. Tente novamente.")
            resposta = prompt(`Tente novamente. Você vai: 
1. Ir atrás desse traste! 
2. Ficar bebendo e comprar outro alaúde depois.`)
        }
    }
}