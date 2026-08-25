const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const idade = document.getElementById("idade").value;

    const mensagem = document.getElementById("mensagem");

    if (nome === "") {

        mensagem.textContent = "Digite seu nome.";

    } else if (email === "") {

        mensagem.textContent = "Digite seu e-mail.";

    } else if (idade === "") {

        mensagem.textContent = "Digite sua idade.";

    } else {

        mensagem.textContent = "Cadastro realizado com sucesso!";

    }

});