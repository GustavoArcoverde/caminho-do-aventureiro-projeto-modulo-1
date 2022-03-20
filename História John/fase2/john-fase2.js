function resposta() {
    var resposta = prompt(`1. Puxar sua espada e pedir ajuda a seu deus.
2. Tentar libertar o garoto furtivamente.`)
    var contador = 1
    var tentativas = 10

    while(tentativas > contador){

        if(resposta == "1" || resposta == "1.  Puxar sua espada e pedir ajuda a seu deus.") {
        window.location.href = "../fase3/john-fase3.html";
        break

        }
        alert("Você tenta se esgueirar entre os arbustos para soltar o garoto, porém, sua armadura prateada faz muito barulho enquanto você se move. Um dos ogros te agarra com as duas mãos, antes que você possa reagir, e te aperta com muita força, fazendo você perder a consciência. A última coisa que você consegue ouvir dos ogros antes de desmaiar, é: “Ei, cunseguimo mais um petiscu, i essi é dus grandi!”")
        resposta = prompt(`Tente novamente. Você vai:
1. Puxar sua espada e pedir ajuda a seu deus.
2. Tentar libertar o garoto furtivamente.`)
        contador++
}
}