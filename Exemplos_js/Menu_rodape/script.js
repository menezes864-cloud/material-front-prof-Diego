/* =====================================================
   PROJETO 04
   INSERINDO CONTEÚDO COM JAVASCRIPT
   ===================================================== */


/* =====================================================
   1. ENCONTRANDO O LOCAL DO MENU
   ===================================================== */


/*
    No HTML temos:

        <div id="menu"></div>

    Esse elemento está vazio.

    Vamos encontrá-lo utilizando:

        document.querySelector()
*/

const menu =
    document.querySelector("#menu");



/* =====================================================
   2. INSERINDO HTML
   ===================================================== */


/*
    innerHTML permite colocar conteúdo HTML
    dentro de um elemento.

    Aqui estamos dizendo:

        "Coloque este HTML dentro
         do elemento menu."

    As crases ` permitem escrever
    várias linhas de HTML dentro
    de uma string.
*/

menu.innerHTML = `

    <header class="menu">

        <div class="menu-container">


            <a
                href="index.html"
                class="logo"
            >

                DevLab

            </a>


            <nav class="links">

                <a href="index.html">
                    Início
                </a>

                <a href="sobre.html">
                    Sobre
                </a>

            </nav>


        </div>

    </header>

`;



/* =====================================================
   3. ENCONTRANDO O LOCAL DO RODAPÉ
   ===================================================== */


/*
    Agora fazemos exatamente a mesma coisa
    com o rodapé.

    HTML:

        <div id="rodape"></div>
*/

const rodape =
    document.querySelector("#rodape");



/* =====================================================
   4. INSERINDO O RODAPÉ
   ===================================================== */


/*
    Colocamos HTML dentro do elemento
    que estava vazio.
*/

rodape.innerHTML = `

    <footer class="rodape">

        <div class="rodape-container">


            <p>

                DevLab - Laboratório JavaScript

            </p>


            <small>

                Projeto desenvolvido
                para fins educacionais.

            </small>


        </div>

    </footer>

`;