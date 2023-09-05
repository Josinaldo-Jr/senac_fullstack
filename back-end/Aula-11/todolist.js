const lista = [];

function adicionar() {
    const entradaA = document.getElementById("entradaA").value;
    const entradaB = document.getElementById("entradaB").value;
    const entradaC = document.getElementById("entradaC").value;

    const produto = {
        entradaA: entradaA,
        entradaB: entradaB,
        entradaC: entradaC,
    };

    console.log(lista);
    console.log(produto);
    

    if (entradaA.trim() !== "" && entradaB.trim() !== "" && entradaC.trim() !== "") {
        lista.push(produto);
    }

    const result = document.getElementById("result");
    result.innerHTML = "";

    lista.forEach(function (item, indice) {
        result.innerHTML += `
                 <li id="tarefa-${indice}">
                     <span>${item.entradaA}</span>
                     <span>${item.entradaB}</span>
                     <span>${item.entradaC}</span>
                     <button class="edit-button" onclick="editar(${indice})">Editar</button>
                     <button class="delete-button" onclick="deletar(${indice})">Deletar</button>
                 </li>
                `;
    });

    document.getElementById("entradaA").value = ""; 
    document.getElementById("entradaB").value = ""; 
    document.getElementById("entradaC").value = ""; // Limpa o campo de entrada após adicionar uma tarefa.
}

function deletar(indice) {
    lista.splice(indice, 1);
    adicionar(); // Atualiza a lista após a exclusão.
}

function editar(indice) {


    document.getElementById("entradaA").value = prompt("digite o valor para A: ");
    document.getElementById("entradaB").value = prompt("digite o valor para B: ");
    document.getElementById("entradaC").value = prompt("digite o valor para C: ");
    // const tarefa = document.getElementById(`tarefa-${indice}`);
    // const novoTexto = prompt("Editar tarefa:", tarefa.textContent);

    const produto = {
        entradaA: entradaA,
        entradaB: entradaB,
        entradaC: entradaC,
    };
        adicionar();         
        deletar(indice);      
    
}