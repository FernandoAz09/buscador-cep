// let inputCep = document.getElementById('cep')

// function inputClear() {
//     //Limpa valores do formulário de cep.
//     document.getElementById('cep').value = ("")
//     document.getElementById('cep').value = ("")
//     document.getElementById('logradouro').value = ("")
//     document.getElementById('bairro').value = ("")
//     document.getElementById('localidade').value = ("")
// }

// function cep_Callback(result) {
//     if (!("erro" in result)) {
//         //Atualiza os campos com os valores.
//         document.getElementById('cep').value = (result.cep);
//         document.getElementById('logradouro').value = (result.logradouro);
//         document.getElementById('bairro').value = (result.bairro);
//         document.getElementById('localidade').value = (result.localidade);
//     }
//     else {
//         //CEP não Encontrado.
//         inputClear();
//         alert("CEP errado ou não encontrado.");
//     }
// }
// function inputClear() {
//     //Limpa valores do formulário de cep.
//     document.getElementById('cep').value=("");
// }

// function cep_Callback(result) {
//     if (!("erro" in result)) {
//         //Atualiza os campos com os valores.
//         document.getElementById('cep').value=(result.cep);
//         document.getElementById('logradouro').value=(result.logradouro);
//         document.getElementById('bairro').value=(result.bairro);
//         document.getElementById('localidade').value=(result.localidade);
//     } 
//     else {
//         //CEP não Encontrado.
//         limpa_formulário_cep();
//         alert("CEP errado ou não encontrado.");
//     }
// }


// const pesquisarCep = () => {
//     const cep = inputCep.value.replace(/\D/g, '')
//     const url = `viacep.com.br/ws/${cep}/json/ `
//     console.log(url)
//     if (cep === "") {
//         alert("Digite um cep para continuar.")
//         inputCep = ''
//     }
// }


// let subButton = document.getElementById('submit').addEventListener('click', pesquisarCep)


/* base de pesquisa*/

// function pesquisacep(valor) {


// const pesquisarCep = (value) => {
//     const cep = inputCep.value.replace(/\D/g, '')
//     const url = `viacep.com.br/ws/${cep}/json/ `
//     console.log(url)
//     if (cep != "") {

//         //Expressão regular para validar o CEP.
//         var validacep = /^[0-9]{8}$/;

//         if (validacep.test(cep)) {
//             //Cria um elemento javascript.
//             var script = document.createElement('script');

//             //Sincroniza com o callback.
//             script.src = 'https://viacep.com.br/ws/' + cep + '/json/?callback=cep_Callback';

//             //Insere script no documento e carrega o conteúdo.
//             document.body.appendChild(script);

//         }
//         else {
//             //cep é inválido.
//             inputClear();
//             alert("Formato de CEP inválido.");
//         }
//     }
//     else {
//         //cep sem valor, limpa formulário.
//         inputClear();
//     }
// }


// let subButton = document.getElementById('submit').addEventListener('click', pesquisarCep)






$(document).ready(function () {

    function limpa_formulário_cep() {
        // Limpa valores do formulário de cep.
        $("#cep").val("");
        $("#rua").val("");
        $("#bairro").val("");
        $("#cidade").val("");
        $("#uf").val("");
    }

    //Quando o campo cep perde o foco.
    $("#cep").blur( function () {

        //Nova variável "cep" somente com dígitos.
        var cep = $(this).val().replace(/\D/g, '');

        //Verifica se campo cep possui valor informado.
        if (cep != "") {

            //Expressão regular para validar o CEP.
            var validacep = /^[0-9]{8}$/;

            //Valida o formato do CEP.
            if (validacep.test(cep)) {

                

                //Consulta o webservice viacep.com.br/
                $.getJSON("https://viacep.com.br/ws/" + cep + "/json/?callback=?", function (dados) {

                    if (!("erro" in dados)) {
                        //Atualiza os campos com os valores da consulta.
                        $("#rua").val(dados.logradouro);
                        $("#bairro").val(dados.bairro);
                        $("#cidade").val(dados.localidade);
                        $("#uf").val(dados.uf);
                    } //end if.
                    else {
                        //CEP pesquisado não foi encontrado.
                        limpa_formulário_cep();
                        alert("CEP não encontrado.");
                    }
                });
            } //end if.
            else {
                //cep é inválido.
                limpa_formulário_cep();
                alert("Formato de CEP inválido.");
            }
        } //end if.
        else {
            //cep sem valor, limpa formulário.
            limpa_formulário_cep();
        }
    });
});
