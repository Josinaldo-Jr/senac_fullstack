const lista = [];

function adicionar() {
    const entradaA = document.getElementById("entradaA").value;
    const entradaB = document.querySelector('input[name="entradaB"]:checked').value;
    const entradaC = document.getElementById("entradaC").value;
    const entradaD = document.getElementById("entradaD").value;

    const produto = {
        entradaA: entradaA,
        entradaB: entradaB,
        entradaC: entradaC,
        entradaD: entradaD,
    };

    if (entradaA.trim() !== "" && entradaB.trim() !== "" && entradaC.trim() !== "" && entradaD.trim() !== "") {
        lista.push(produto);
    }

    console.log(lista);
    console.log(produto);

    const result = document.getElementById("result");
    result.innerHTML = "";

    lista.forEach(function (item, indice) {
        result.innerHTML += `
                 <li id="tarefa-${indice}">
                     <span>${item.entradaA}</span>
                     <span>${item.entradaB}</span>
                     <span>${item.entradaC}</span>
                     <span>${item.entradaD}</span>
                     <button class="edit-button" onclick="editar(${indice})">Editar</button>
                     <button class="delete-button" onclick="deletar(${indice})">Deletar</button>
                 </li>
                `;
    });

    document.getElementById("entradaA").value = ""; 
    document.querySelector('input[name="entradaB"]:checked').value = ""; 
    document.getElementById("entradaC").value = "";
    document.getElementById("entradaD").value = ""; // Limpa o campo de entrada após adicionar uma tarefa.
}

function deletar(indice) {
    lista.splice(indice, 1);
    adicionar(); // Atualiza a lista após a exclusão.
}

function editar(indice) {
   
const entradaA = document.getElementById("entradaA").value = prompt("digite o valor para A: ");
    const entradaB = document.querySelector('input[name="entradaB"]:checked').value = prompt("digite o valor para B: ");
    const entradaC = document.getElementById("entradaC").value = prompt("digite o valor para C: ");
    const entradaD = document.getElementById("entradaD").value = prompt("digite o valor para D: ");

    const produtoNovo = {
        entradaA: entradaA,
        entradaB: entradaB,
        entradaC: entradaC,
        entradaD: entradaD,
    };

    lista.splice(indice, 1, produtoNovo);
    document.getElementById("entradaA").value = ""; 
    document.querySelector('input[name="entradaB"]:checked').value = ""; 
    document.getElementById("entradaC").value = "";
    document.getElementById("entradaD").value = "";
    
    adicionar();    
    
}