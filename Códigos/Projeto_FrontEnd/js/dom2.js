function verificarIdade() {

    let idade = document.getElementById("idade");

    let resultado = document.getElementById("resultado");

    if (idade.value >= 18) {

        resultado.innerText = "Você é maior de idade.";

    } else {

        resultado.innerText = "Você é menor de idade.";

    }

}