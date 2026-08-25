/* =====================================================
   PROJETO 07
   FORMULÁRIO COM JAVASCRIPT
   ===================================================== */


/* =====================================================
   1. ENCONTRANDO O FORMULÁRIO
   ===================================================== */


/*
    No HTML temos:

        <form id="formulario">

    Vamos encontrar esse elemento
    utilizando querySelector().
*/

const formulario =
    document.querySelector("#formulario");



/* =====================================================
   2. ENCONTRANDO OS CAMPOS
   ===================================================== */


/*
    Nome
*/

const nome =
    document.querySelector("#nome");


/*
    E-mail
*/

const email =
    document.querySelector("#email");


/*
    Idade
*/

const idade =
    document.querySelector("#idade");


/*
    Curso
*/

const curso =
    document.querySelector("#curso");



/* =====================================================
   3. ENCONTRANDO AS MENSAGENS
   ===================================================== */


/*
    Cada campo possui uma pequena área
    para mostrar uma mensagem de erro.
*/

const erroNome =
    document.querySelector("#erroNome");


const erroEmail =
    document.querySelector("#erroEmail");


const erroIdade =
    document.querySelector("#erroIdade");


const erroCurso =
    document.querySelector("#erroCurso");



/* =====================================================
   4. RESULTADO
   ===================================================== */

const resultado =
    document.querySelector("#resultado");



/* =====================================================
   5. EVENTO DO FORMULÁRIO
   ===================================================== */


/*
    Aqui temos um conceito muito importante.

    Em vez de colocar:

        onclick

    no botão, estamos observando
    o envio do formulário.

    O evento utilizado é:

        submit
*/

formulario.addEventListener(
    "submit",
    function (evento) {


        /* =================================================
           6. IMPEDIR O COMPORTAMENTO PADRÃO
           ================================================= */


        /*
            Normalmente, quando um formulário
            é enviado, o navegador recarrega
            a página.

            preventDefault()
            impede esse comportamento.

            Assim podemos controlar o formulário
            utilizando JavaScript.
        */

        evento.preventDefault();



        /* =================================================
           7. PEGANDO OS VALORES
           ================================================= */


        /*
            .value pega o conteúdo digitado
            pelo usuário.

            Exemplo:

                Se o usuário digitar:

                    Diego

                então:

                    nome.value

                terá:

                    "Diego"
        */

        const nomeDigitado =
            nome.value;


        const emailDigitado =
            email.value;


        const idadeDigitada =
            idade.value;


        const cursoSelecionado =
            curso.value;



        /* =================================================
           8. LIMPAR MENSAGENS ANTERIORES
           ================================================= */


        /*
            Antes de fazer uma nova verificação,
            apagamos mensagens antigas.
        */

        erroNome.textContent = "";

        erroEmail.textContent = "";

        erroIdade.textContent = "";

        erroCurso.textContent = "";

        resultado.textContent = "";

        resultado.classList.remove(
            "sucesso"
        );



        /* =================================================
           9. VARIÁVEL PARA CONTROLAR OS ERROS
           ================================================= */


        /*
            Começamos assumindo que
            não existe nenhum erro.

            false = não existem erros.
        */

        let formularioValido = true;



        /* =================================================
           10. VERIFICANDO O NOME
           ================================================= */


        /*
            trim() remove espaços desnecessários
            no começo e no final do texto.

            Exemplo:

                "   Diego   "

            se transforma em:

                "Diego"
        */

        if (
            nomeDigitado.trim() === ""
        ) {


            erroNome.textContent =
                "Digite seu nome.";

            formularioValido = false;

        }



        /* =================================================
           11. VERIFICANDO O E-MAIL
           ================================================= */


        if (
            emailDigitado.trim() === ""
        ) {


            erroEmail.textContent =
                "Digite seu e-mail.";

            formularioValido = false;

        }



        /* =================================================
           12. VERIFICANDO A IDADE
           ================================================= */


        /*
            Aqui utilizamos Number()
            para transformar o valor
            em número.

            Os valores vindos de inputs
            normalmente são textos.
        */

        const idadeNumero =
            Number(idadeDigitada);


        if (
            idadeDigitada === ""
        ) {


            erroIdade.textContent =
                "Digite sua idade.";

            formularioValido = false;


        } else if (
            idadeNumero < 16
        ) {


            erroIdade.textContent =
                "A idade mínima é 16 anos.";

            formularioValido = false;

        }



        /* =================================================
           13. VERIFICANDO O CURSO
           ================================================= */


        /*
            O primeiro option possui:

                value=""

            Portanto, quando o usuário
            não escolher um curso,
            cursoSelecionado será vazio.
        */

        if (
            cursoSelecionado === ""
        ) {


            erroCurso.textContent =
                "Selecione um curso.";

            formularioValido = false;

        }



        /* =================================================
           14. RESULTADO
           ================================================= */


        /*
            Depois de todas as verificações,
            analisamos nossa variável.

            Se ela continuar como:

                true

            significa que nenhum erro
            foi encontrado.
        */

        if (
            formularioValido === true
        ) {


            resultado.textContent =
                "Inscrição realizada com sucesso!";

            resultado.classList.add(
                "sucesso"
            );


            /*
                Podemos limpar o formulário
                depois de realizar a inscrição.
            */

            formulario.reset();


        }


    }
);