let inputCep = document.getElementById('cep')


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