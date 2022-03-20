function resposta() {
    var resposta = prompt(`1. Invocar as forças da natureza ao seu auxílio.
2. Tentar atacá-la com seu cajado, na tentativa de atordoá-la.`)
    var contador = 1
    var tentativas = 10

    while(tentativas > contador){

        if(resposta == "1" || resposta == "1. Invocar as forças da natureza ao seu auxílio.") {
        window.location.href = "../fase 5/logon-fase5.html";
        break

        }
        alert("Você ergue o cajado e avança, porém, a criatura é mais rápida. Antes que você pudesse abaixar o cajado em um ataque, sua garganta já fora cortada pelas afiadas garras da criatura. Você morreu.")
        resposta = prompt(`Tente novamente. Você irá:
1. Invocar as forças da natureza ao seu auxílio.
2. Tentar atacá-la com seu cajado, na tentativa de atordoá-la.`)
        contador++
}
}