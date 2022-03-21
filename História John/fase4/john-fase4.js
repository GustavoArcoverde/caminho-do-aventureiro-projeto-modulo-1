function resposta() {
    var resposta = prompt(`1. Emboscar o ogro.
2. Você se esconde e reza para seu deus mais uma vez`)
    var contador = 1
    var tentativas = 10

    while (tentativas > contador) {

        if (resposta == "1" || resposta == "1. Emboscar o ogro") {
            window.location.href = "../faseFinal/john-fase-final.html";
            break

        } else if (resposta == "2" || resposta == "2. Você se esconde e reza para seu deus mais uma vez") {
            alert(" Você encontra um bom lugar, atrás de uma pedra, para poder fazer uma breve prece a seu deus, porém, você já havia gastado muita energia divina no milagre de mais cedo. Você fecha os olhos e tenta novamente, então, sente uma respiração forte e, quando abre os olhos, vê apenas o grande ogro na sua frente, com a clava na mão. O ogro pisa em você antes que você consiga erguer seu escudo e, com apenas força bruta e ferocidade, ele esmaga seu peito.")
            resposta = prompt(`Tente novamente. Você vai:
1. Emboscar o ogro.
2. Você se esconde e reza para seu deus mais uma vez`)
            contador++
        } else if (resposta == null) {
            var stop = confirm("Deseja cancelar?")
            if (stop == true) {
                break
            } else {
                resposta = prompt(`O que você faz?:
1. Emboscar o ogro.
2. Você se esconde e reza para seu deus mais uma vez`)
            }
        } else {
            alert("Resposta inválida. Tente novamente.")
            resposta = prompt(`Tente novamente. Você vai:
1. Emboscar o ogro.
2. Você se esconde e reza para seu deus mais uma vez`)
        }
    }
}