function classificarIdade(idade) {

    if (idade < 12) {

        return "Criança";

    } else if (idade < 18) {

        return "Adolescente";

    } else if (idade < 60) {

        return "Adulto";

    } else {

        return "Idoso";

    }

}

function iniciarClassificacao() {

    let idade = Number(prompt("Digite sua idade:"));

    let resultado = classificarIdade(idade);

    alert("Sua classificação é: " + resultado);

}