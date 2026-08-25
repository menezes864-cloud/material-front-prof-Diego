function realizarLogin() {

    // Encontrando os elementos do HTML

    let usuario = document.getElementById("usuario");
    let senha = document.getElementById("senha");

    let erroUsuario = document.getElementById("erroUsuario");
    let erroSenha = document.getElementById("erroSenha");

    let mensagem = document.getElementById("mensagem");


    // Limpando mensagens anteriores

    erroUsuario.innerText = "";
    erroSenha.innerText = "";
    mensagem.innerText = "";


    // Pegando os valores digitados

    let nomeUsuario = usuario.value;
    let senhaDigitada = senha.value;


    // Verificando o usuário

    if (nomeUsuario === "") {

        erroUsuario.innerText = "Digite seu usuário.";

        return;
    }


    // Verificando a senha

    if (senhaDigitada === "") {

        erroSenha.innerText = "Digite sua senha.";

        return;
    }


    // Verificando tamanho da senha

    if (senhaDigitada.length < 4) {

        erroSenha.innerText =
            "A senha deve ter pelo menos 4 caracteres.";

        return;
    }


    // Verificando usuário e senha

    if (
        nomeUsuario === "admin" &&
        senhaDigitada === "1234"
    ) {

        mensagem.innerText =
            "Login realizado com sucesso!";

        mensagem.style.color = "green";

    } else {

        mensagem.innerText =
            "Usuário ou senha incorretos.";

        mensagem.style.color = "red";
    }

}