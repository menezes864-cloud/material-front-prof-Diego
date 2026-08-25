function login() {

    let usuario = document.getElementById("usuario");
    let senha = document.getElementById("senha");

    let mensagem = document.getElementById("mensagem");

    if (usuario.value === "admin" && senha.value === "1234") {

        mensagem.innerText = "Login realizado com sucesso!";

    } else {

        mensagem.innerText = "Usuário ou senha incorretos.";

    }

}