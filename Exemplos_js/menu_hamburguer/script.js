/* =====================================================
   PROJETO 03
   MENU HAMBÚRGUER
   ================================================= */


/* =====================================================
   1. ENCONTRANDO OS ELEMENTOS
   ================================================= */


/*
    Primeiro encontramos o botão.

    HTML:

        <button id="btnMenu">

    Como estamos procurando um ID,
    utilizamos "#".
*/

const btnMenu =
    document.querySelector("#btnMenu");


/*
    Agora encontramos o menu.

    HTML:

        <nav id="menu">

    Esse elemento será mostrado
    ou escondido pelo JavaScript.
*/

const menu =
    document.querySelector("#menu");



/* =====================================================
   2. EVENTO DE CLIQUE
   ===================================================== */


/*
    addEventListener()

    permite que o JavaScript fique
    observando um evento.

    Neste caso:

        "click"

    significa:

        "Quando o usuário clicar..."
*/

btnMenu.addEventListener(
    "click",
    function () {


        /* =================================================
           3. ADICIONANDO / REMOVENDO UMA CLASSE
           ================================================= */


        /*
            classList.toggle()

            é muito útil para situações
            de abrir e fechar elementos.

            Se a classe NÃO existir:

                adiciona.

            Se a classe JÁ existir:

                remove.

            Portanto:

                fechado → aberto
                aberto  → fechado
        */

        menu.classList.toggle("ativo");


        /*
            Fazemos a mesma coisa no botão.

            Isso permite que o CSS transforme
            o ícone de ☰ para um X.
        */

        btnMenu.classList.toggle("ativo");


        /* =================================================
           4. ACESSIBILIDADE
           ================================================= */


        /*
            aria-expanded informa aos leitores
            de tela se o menu está aberto ou fechado.

            Primeiro verificamos se o menu
            possui a classe "ativo".
        */

        const menuAberto =
            menu.classList.contains("ativo");


        /*
            Agora atualizamos o atributo:

                aria-expanded="true"

            quando o menu estiver aberto.

            E:

                aria-expanded="false"

            quando estiver fechado.
        */

        btnMenu.setAttribute(
            "aria-expanded",
            menuAberto
        );


    }
);