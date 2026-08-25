/* =====================================================
   PROJETO 05
   DROPDOWN
   ===================================================== */


/* =====================================================
   1. ENCONTRANDO OS ELEMENTOS
   ===================================================== */


/*
    Encontramos o botão.

    HTML:

        <button id="btnDropdown">
*/

const btnDropdown =
    document.querySelector("#btnDropdown");


/*
    Encontramos o conteúdo que queremos
    mostrar e esconder.

    HTML:

        <div id="dropdown">
*/

const dropdown =
    document.querySelector("#dropdown");



/*
    Encontramos também o ícone.

    Vamos utilizá-lo para fazer a seta
    girar quando o dropdown estiver aberto.
*/

const icone =
    document.querySelector("#icone");



/* =====================================================
   2. EVENTO DE CLIQUE
   ===================================================== */


/*
    Quando o usuário clicar no botão,
    a função será executada.
*/

btnDropdown.addEventListener(
    "click",
    function () {


        /* =================================================
           3. ABRIR / FECHAR O DROPDOWN
           ================================================= */


        /*
            classList.toggle()

            funciona como um interruptor.

            Se "ativo" não existe:

                adiciona.

            Se "ativo" já existe:

                remove.

            Portanto:

                fechado → aberto

                aberto → fechado
        */

        dropdown.classList.toggle(
            "ativo"
        );



        /* =================================================
           4. ALTERAR O BOTÃO
           ================================================= */


        /*
            Também adicionamos a classe
            "ativo" ao botão.

            Isso será utilizado pelo CSS
            para girar a seta.
        */

        btnDropdown.classList.toggle(
            "ativo"
        );



        /* =================================================
           5. VERIFICANDO O ESTADO
           ================================================= */


        /*
            contains() verifica se o elemento
            possui determinada classe.

            O resultado será:

                true
                    ou
                false
        */

        const aberto =
            dropdown.classList.contains("ativo");



        /* =================================================
           6. ALTERANDO O TEXTO DO BOTÃO
           ================================================= */


        /*
            Se o dropdown estiver aberto,
            mudamos o texto do botão.

            Caso contrário, voltamos
            ao texto original.
        */

        if (aberto) {

            btnDropdown.innerHTML =
                "Ocultar detalhes <span id='icone'>▲</span>";

        } else {

            btnDropdown.innerHTML =
                "Ver detalhes <span id='icone'>▼</span>";

        }



        /* =================================================
           7. ACESSIBILIDADE
           ================================================= */


        /*
            Atualizamos o atributo:

                aria-expanded

            true  → aberto

            false → fechado
        */

        btnDropdown.setAttribute(
            "aria-expanded",
            aberto
        );


    }
);