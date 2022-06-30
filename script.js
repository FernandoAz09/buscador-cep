let inputCep = document.getElementById('cep')

function inputClear() {
    //Limpa valores do formulário de cep.
    document.getElementById('cep').value=("");
}

function cep_Callback(result) {
    if (!("erro" in result)) {
        //Atualiza os campos com os valores.
        document.getElementById('cep').value=(result.cep);
        document.getElementById('logradouro').value=(result.logradouro);
        document.getElementById('bairro').value=(result.bairro);
        document.getElementById('localidade').value=(result.localidade);
    } 
    else {
        //CEP não Encontrado.
        limpa_formulário_cep();
        alert("CEP errado ou não encontrado.");
    }
}


const pesquisarCep = () => {
    const cep = inputCep.value.replace(/\D/g, '')
    const url = `viacep.com.br/ws/${cep}/json/ `
    console.log(url)
    if (cep === "") {
        alert("Digite um cep para continuar.")
        inputCep = ''
    }
}


let subButton = document.getElementById('submit').addEventListener('click', pesquisarCep)


/* base de pesquisa*/

// function pesquisacep(valor) {

//     //Nova variável "cep" somente com dígitos.
//     var cep = valor.replace(/\D/g, '');

//     //Verifica se campo cep possui valor informado.
//     if (cep != "") {

//         //Expressão regular para validar o CEP.
//         var validacep = /^[0-9]{8}$/;

//         //Valida o formato do CEP.
//         if(validacep.test(cep)) {

//             //Preenche os campos com "..." enquanto consulta webservice.
//             document.getElementById('rua').value="...";
//             document.getElementById('bairro').value="...";
//             document.getElementById('cidade').value="...";
//             document.getElementById('uf').value="...";
//             document.getElementById('ibge').value="...";

//             //Cria um elemento javascript.
//             var script = document.createElement('script');

//             //Sincroniza com o callback.
//             script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=meu_callback';

//             //Insere script no documento e carrega o conteúdo.
//             document.body.appendChild(script);

//         } //end if.
//         else {
//             //cep é inválido.
//             limpa_formulário_cep();
//             alert("Formato de CEP inválido.");
//         }
//     } //end if.
//     else {
//         //cep sem valor, limpa formulário.
//         limpa_formulário_cep();
//     }
// };