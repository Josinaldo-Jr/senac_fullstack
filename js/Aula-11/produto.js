let lista = [];

let form = document.getElementById('entrada');

function adicionar() {

    let nome = document.getElementById('nome').value;
    let categoria = document.querySelector('input[name="categoria"]:checked').value;
    let fornecedor = document.getElementById('fornecedor').value;
    // let estoque = parseInt(document.getElementById('estoque').value);

    let produto = {
    nome: nome,
    categoria: categoria,
    fornecedor: fornecedor
    // estoque:estoque,
    };

    lista.push(produto);

    

    const dadosUl = document.getElementById('result');
    dadosUl.innerHTML = "";
    
    lista.forEach(function (cliente, indice) {

        dadosUl.innerHTML +=
        `
        <div class="cliente" id="tarefa-${indice}">
            <h4 id="tarefa-${indice}">Produto ${indice + 1}</h4>
            <p id="tarefa-${indice}"><strong id="tarefa-${indice}">Nome do Produto:</strong> ${cliente.nome}</p>
            <p id="tarefa-${indice}"><strong id="tarefa-${indice}">Categoria:</strong> ${cliente.categoria}</p>
            <p id="tarefa-${indice}"><strong id="tarefa-${indice}">Fornecedor:</strong> ${cliente.fornecedor}</p>
          
            <button class="edit-button" onclick="editar(${indice})">Editar</button>
            <button class="delete-button" onclick="deletar(${indice})">Deletar</button>
            </div>
        `;
    })

   
    // clientes.forEach((cliente, indice) => {
       
    document.getElementById("entrada").value = "";
    document.getElementById('nome').value = "";
    document.querySelector('input[name="categoria"]:checked').value = "";
    document.getElementById('fornecedor').value = "";
    // document.getElementById('estoque').value = "";

    console.log(lista);

}

function deletar(indice) {

    lista.splice(indice, 1);
    adicionar();







    
    
}

// function editar(indice) {
//     const tarefa = document.getElementById(`tarefa-${indice}`);
//     const novoTexto = prompt("Editar tarefa:", tarefa.textContent);
//     if (novoTexto !== null) {
//         lista[indice] = novoTexto;
//         adicionar(); // Atualiza a lista após a edição.
//     }
// }


