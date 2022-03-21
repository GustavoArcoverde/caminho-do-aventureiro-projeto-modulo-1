function resposta() {
    var resposta = prompt(`1. Esquerda.
2. Direita.`)
    var contador = 1
    var tentativas = 10

    while (tentativas > contador) {

        if (resposta == "2" || resposta == "2. Direita") {
            window.location.href = "../fase 3/melgar-fase3.html";
            break

        } else if (resposta == "1" || resposta == "1. Esquerda.") {
            alert("Você chega a uma sala completamente vazia, estranhamente limpa, mas vazia. De repente, a porta se fecha e tranca quando você entra e um gás começa a ser expelido pelos cantos da sala. Em minutos, você já não consegue mais respirar.")
            resposta = prompt(`Tente novamente. Você irá para:
1. Esquerda.
2. Direita.`)
            contador++
        } else if (resposta == null) {
            var stop = confirm("Deseja cancelar?")
            if (stop == true) {
                break
            } else {
                resposta = prompt(`Você irá para:
1. Esquerda.
2. Direita.`)
            }
        } else {
            alert("Resposta inválida. Tente novamente.")
            resposta = prompt(`Tente novamente. Você irá para:
1. Esquerda.
2. Direita.`)
        }
    }
}