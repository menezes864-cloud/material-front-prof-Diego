
function classificarIdade(idade) {
    if(idade < 12){
        return "Criança";
    }     
    else if (idade < 18){
        return "adolescente";
    }
    else if (idade <60){
        return "adulto";
    }
    else {
        return "Idoso";
}
}

function iniciarClassificacao() {

    let idade = Number(prompt("Digite sua Idade"));

    let resultado = classificarIdade(idade);

    alert("Sua classificação é " +resultado);

}