const lista = [];

function adicionar() {
    const entrada = document.getElementById("entrada").value;

    if (entrada.trim() !== "") {
        lista.push(entrada);
    }

    const result = document.getElementById("result");
    result.innerHTML = "";

    lista.forEach(function (item, indice) {
        result.innerHTML += `
                 <li>
                     <span id="tarefa-${indice}">${item}</span>
                     <button class="edit-button" onclick="editar(${indice})">Editar</button>
                     <button class="delete-button" onclick="deletar(${indice})">Deletar</button>
                 </li>
                `;
    });

    document.getElementById("entrada").value = ""; // Limpa o campo de entrada após adicionar uma tarefa.
}

function deletar(indice) {
    lista.splice(indice, 1);
    adicionar(); // Atualiza a lista após a exclusão.
}

function editar(indice) {
    const tarefa = document.getElementById(`tarefa-${indice}`);
    const novoTexto = prompt("Editar tarefa:", tarefa.textContent);
    if (novoTexto !== null) {
        lista[indice] = novoTexto;
        adicionar(); // Atualiza a lista após a edição.
    }
}

