// criar um vetor com nome lista

// função para "adicionar" e dentro dela:

// variavel para receber "entrada"

// condicional para saber se "entrada" não está vazia + trim para cortar espaços vazios na string

// entrando na condicional, entrada entra na lista

// variavel para receber "result"
// aplicando o valor de result para o html = ""

// aplicar um foreach na "lista" com function (item, indice):
// variavel result soma e recebe a lista ao html
// fecha a foreach

// limpar o document "entrada" com valor vazio

// fecha a função adicionar
// --------------------------------------------

// função deletar(valor do indice)
// lista com slice(indice, 1) valor indice e 1 item deletado
// chama a função adcionar para atualizar a lista
// fecha a função deletar
// --------------------------------------------

// função editar(valor indice)

// variavel (nome) para acessar o documento e a id tarefa(foi criada) + indice

// variavel para o novo item (solicitando em prompt, dentro chamar a variavel.textContent (mostrar o conteúdo que será editado))

// condicional

const lista = [];

function adicionar() {

    let entrada = document.getElementById("entrada").value;

    if(entrada.trim() !== ""){
        lista.push(entrada);
    }

    let result = document.getElementById("result");
    result.innerHTML = "";

    lista.forEach(function (item, indice){
        result.innerHTML+=   
    `<li>
        <span id="tarefa-${indice}">${item}</span>
        <button class="edit-button" onclick="editar(${indice})">Editar</button>
        <button class="delete-button" onclick="deletar(${indice})">Deletar</button>
    </li>
    `;        

    });

    document.getElementById("entrada").value = ""; 
}

function deletar (indice) {
    lista.splice(indice, 1);
    adicionar();
}

