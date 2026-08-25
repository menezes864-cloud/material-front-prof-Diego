function fazerLogin() {

    let usuario = prompt("Digite seu usuário:");

    let senha = prompt("Digite sua senha:");

    if (usuario === "admin" && senha === "1234") {

        alert("✅ Acesso permitido!");

    } else if (usuario !== "admin") {

        alert("❌ Usuário incorreto!");

    } else if (senha !== "1234") {

        alert("❌ Senha incorreta!");

    } else {

        alert("❌ Usuário e senha incorretos!");

    }

}