//seleção de elementos
const frm = document.querySelector("form");
const respNome = document.querySelector("span");
const respLista = document.querySelector("pre");

const pacientes = []  //declaração de array global <recepciona os valores que o push(no eventos) vai enviar >

//eventos

frm.addEventListener("submit", (e) => { //submit do formulario para envio do nome do paciente e acrescentar em lista
    e.preventDefault();
    const nome = frm.inName.value;
    pacientes.push(nome);  //adiciona o valor do input para o final do array global pacientes[]

    let lista = ""  //string para concatenar as respostas

    for (let i = 0; i < pacientes.length; i++) { //for inicia em 0, enquanto menor que tamanho do array
        lista += `${i+1}. ${pacientes[i]}\n` //o [i] serve para apontar em qual posição do array está cada valor (nomes dos pacientes)
        // ou seja, ele ajuda na separação da recepção dos valores apartir do laço de repetição, i= 0, i= 1, i= 2, e assim vai...
        
    }
    respLista.innerText = lista;  //troca o conteúdo HTML string da tag <pre/>
    frm.inName.value= ""; //Após submit, limpa o valor do input inName
    frm.inName.focus(); //ao rodar todas as linhas acima com clareza, o mouse retorna para o input InName

})

//btn urgencia
frm.btUrgencia.addEventListener("click", () => {  //ouvinte para evento de click no button de urgencia

    if(!frm.checkValidity()) { //verifica se as validações do form estão ok... no caso PRECISA DO NOME DE UM PACIENTE PARA ADICIONÁ-LO A URGÊNCIA.
        alert("informe o nome do paciente a ser atendido em caráter de urgneica");  
        frm.inName.focus();  //Após o aviso de alert, é enviado o mouse novamente para o input inName
        return;  //retorna para a validação if
    }

    const nome = frm.inName.value; //pega o nome do paciente
    pacientes.unshift(nome); //adiciona o nome do paciente ao início do vetor (array)
    let lista = "" //string para concatenar pacientes


    //forEach()
    //itens da lista
    pacientes.forEach((paciente, i) => (lista += `${i + 1}. ${paciente}\n`));  //usa o forEach para percorrer o array pacientes e pegar a posição do "paciente no singular" que está na posição I que neste caso seria a 
    //posição unshift (inicio) do array (afinal é uma urgência)
    respLista.innerText = lista; //troca o conteúdo HTML string da tag <pre/> respeitando a lista de cima, porém, entrando na parte superior do html
    frm.inName.value=""
    frm.inName.focus()

})

//btn atender

frm.btAtender.addEventListener("click", () => { //seleciona o btn de atendimento
    if(pacientes.length == 0){   //se o array paciente não tiver nem um valor, ele alerta.
        alert("Não há pacientes na lista de espera");
        frm.inName.focus();
        return;
    }

    const atender = pacientes.shift();  //cria uma varial antender, vai até o array pacientes e remove o primeiro valor e colocar esse valor no corpo da varial "atender"

    respNome.innerText = atender;  //muda o conteudo html do respNome que é a tag H3 > SPAN
    let lista = "" //variavel para declarar uma nova lista atualizada
    pacientes.forEach((paciente, i) => (lista = lista + `${i + 1}. ${paciente}\n`)) //foreach para declatar uma nova lista atualizada na tag </pre> perceba que
    //não declaramos o [i] no final do ${paciente}, não se faz mais necessário pois não estamos atribuindo novos valores ao array mas sim removendo algum valor.
    //essa explicação tbm é valida para o foreach da linha 44. lá você não está removendo, mas está adicionando a frente de todos sem seguir a sequencia dos objetos.
    respLista.innerText = lista 
})

