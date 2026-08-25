
//let titulo = document.getElement ById("titulo");

//console.log(titulo);






/*-----------------------------------------------------------

function alterarTitulo() {

    let titulo = document.getElementById("titulo");




    //titulo.innerText = "Olá, Alunos";


    titulo.style.color = "blue"


}

*/


/* DOM -----------------------------------------------------


function verificarIdade() {

    let idade = document.getElementById('idade');

    let resultado = document.getElementById('resultado');


    if(idade.value >= 18) {

        resultado.innerText = "Você é maior de idade";
    }
    
    else {
        resultado.innerText = "Você é menor de idade";

    } ------------------------------------------------------   */





/* DOM-LOGIN----------------------------------------------------------

function login() {

    let usuario = document.getElementById("usuario");

    let password = document.getElementById("password");

    let mensagem = document.getElementById("mensagem");


    if(usuario.value === "admin" && senha.value ==="1234") {

        mensagem.innerText = "Login realizado com sucesso!";
    }
    
    else {
        mensagem.innerText = "Usuário ou Senha incorretos.";

    }

}
    
*/


function entrar() {

    let usuario = document.getElementById("usuario");

    let password = document.getElementById("password");

    let mensagem = document.getElementById("mensagem");


    if(usuario.value === "admin" && senha.value ==="1234") {

        mensagem.innerText = "Login realizado com sucesso!";
    }
    
    else {
        mensagem.innerText = "Usuário ou Senha incorretos.";

    }

}

