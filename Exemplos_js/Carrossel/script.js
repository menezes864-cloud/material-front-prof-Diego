/* =====================================================
   PROJETO 06
   CARROSSEL
   ===================================================== */


/* =====================================================
   1. ENCONTRANDO OS SLIDES
   ===================================================== */


/*
    Diferentemente dos projetos anteriores,
    agora temos vários elementos iguais.

    Todos os slides possuem:

        class="slide"

    Por isso utilizamos:

        querySelectorAll()

    em vez de:

        querySelector()

    querySelector()
        → encontra UM elemento

    querySelectorAll()
        → encontra VÁRIOS elementos
*/

const slides =
    document.querySelectorAll(".slide");



/* =====================================================
   2. ENCONTRANDO OS BOTÕES
   ===================================================== */

const btnAnterior =
    document.querySelector("#btnAnterior");


const btnProximo =
    document.querySelector("#btnProximo");



/* =====================================================
   3. ENCONTRANDO OS INDICADORES
   ===================================================== */


/*
    Também temos vários indicadores.

    Portanto utilizamos novamente:

        querySelectorAll()
*/

const indicadores =
    document.querySelectorAll(".indicador");



/* =====================================================
   4. CONTROLANDO O SLIDE ATUAL
   ===================================================== */


/*
    Essa variável vai guardar
    qual slide está sendo exibido.

    Lembre-se:

        JavaScript começa a contar
        posições a partir do zero.

    Portanto:

        Slide 1 → 0
        Slide 2 → 1
        Slide 3 → 2
*/

let slideAtual = 0;



/* =====================================================
   5. FUNÇÃO PARA MOSTRAR O SLIDE
   ===================================================== */


/*
    Vamos criar uma função chamada:

        mostrarSlide()

    Ela recebe como parâmetro
    a posição do slide que queremos mostrar.
*/

function mostrarSlide(numero) {


    /* =================================================
       6. ESCONDER TODOS OS SLIDES
       ================================================= */


    /*
        forEach()

        permite percorrer todos os elementos
        encontrados pelo querySelectorAll().
    */

    slides.forEach(
        function (slide) {


            /*
                Primeiro removemos a classe "ativo"
                de todos os slides.

                Assim todos ficam escondidos.
            */

            slide.classList.remove(
                "ativo"
            );


        }
    );



    /* =================================================
       7. MOSTRAR O SLIDE ESCOLHIDO
       ================================================= */


    /*
        Agora acessamos um slide
        utilizando sua posição.

        Exemplo:

            slides[0]

        representa o primeiro slide.

        slides[1]

        representa o segundo.

        slides[2]

        representa o terceiro.
    */

    slides[numero].classList.add(
        "ativo"
    );



    /* =================================================
       8. ATUALIZAR OS INDICADORES
       ================================================= */


    /*
        Primeiro removemos "ativo"
        de todos os indicadores.
    */

    indicadores.forEach(
        function (indicador) {

            indicador.classList.remove(
                "ativo"
            );

        }
    );


    /*
        Depois adicionamos "ativo"
        somente ao indicador correspondente
        ao slide atual.
    */

    indicadores[numero].classList.add(
        "ativo"
    );



    /* =================================================
       9. ATUALIZAR A VARIÁVEL
       ================================================= */


    /*
        Guardamos o número do slide
        que está atualmente sendo exibido.
    */

    slideAtual = numero;

}



/* =====================================================
   10. BOTÃO PRÓXIMO
   ================================================= */


/*
    Quando o usuário clicar em:

        Próximo →

    precisamos avançar uma posição.
*/

btnProximo.addEventListener(
    "click",
    function () {


        /*
            Primeiro aumentamos o índice.

            Exemplo:

                0 → 1
                1 → 2
        */

        slideAtual++;



        /*
            Mas existe um problema.

            Temos apenas três slides:

                0
                1
                2

            Se estivermos no slide 2
            e fizermos:

                slideAtual++

            teremos:

                3

            Mas o slide 3 não existe.

            Por isso verificamos se chegamos
            ao final.
        */

        if (
            slideAtual >= slides.length
        ) {


            /*
                Se chegamos ao final,
                voltamos para o primeiro slide.

                    3 → 0
            */

            slideAtual = 0;

        }



        /*
            Agora mostramos o slide
            correspondente à posição atual.
        */

        mostrarSlide(slideAtual);


    }
);



/* =====================================================
   11. BOTÃO ANTERIOR
   ===================================================== */


btnAnterior.addEventListener(
    "click",
    function () {


        /*
            Diminuímos uma posição.

            Exemplo:

                2 → 1
                1 → 0
        */

        slideAtual--;



        /*
            Se estivermos no primeiro slide:

                0

            e diminuirmos:

                -1

            Essa posição não existe.

            Então voltamos para o último slide.
        */

        if (
            slideAtual < 0
        ) {


            slideAtual =
                slides.length - 1;

        }



        /*
            Mostramos o slide correspondente.
        */

        mostrarSlide(slideAtual);


    }
);