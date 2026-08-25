/*alert("Olá, Estou aprendendo JavaScript!");

let nome= 'Maria';


//comentário de uma linha//


/*comentário de mutiplas linhas

let idade="18";
console.log(idade);

idade="19";
console.log(idade);


const data="40";
*/

//configurando os dados do usuário//


/*
const nome='joao';
let idade = 18;
console.log(nome);
console.log(typeof(nome))
console.log(idade);
console.log(typeof(nome))
alert('Bem vindo à aula de JavaScript!');

let numero1 = 10;
let numero2 = 3;
console.log(numero1+numero2);
console.log(numero1%numero2);
*/



/*

let produto ="teclado";
let preco =150;
let quantidade =2;

let total = preco * quantidade;

console.log("produto:",produto);
console.log("total:",total);

let nome = prompt("Digite seu nome:");
alert("Olá," + nome + "! Seja-bem-Vindo(a)!")

*/

/*

let idade = prompt("Qual é sua idade?")

if(idade >= 18) {
console.log('')
}
else {

}

*/
/*
let nota = 7;
if (nota <5) {
    console.log('Reprovado');
    }
    else if (nota <7) {
        console.log('Recuperação');
    }

    else {
        console.log('Aprovado')
    }
*/



/*
let nota = prompt ('Digite sua Nota');

if (nota <5) {
    alert('Reprovado');
    }

    else if (nota <7) {
        alert('Recuperação');
    }

    else {
        alert('Aprovado')
    }
  */



let nota1 = prompt("Digite a primeira nota")
let nota2 = prompt("Digite a segunda nota")
let nota3 = prompt("Digite a terceira nota")

let media = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3)) / 3


if (media >= 7) {
    alert ("Parbéns! Você foi aprovado com média:" + media.toFixed(2))
}
else if (media >= 5) {
    alert("Você está de recuperação com média:" + media.toFixed(2))
}
else {
    alert("Você foi reprovado com média:" + media.toFixed(2))
}