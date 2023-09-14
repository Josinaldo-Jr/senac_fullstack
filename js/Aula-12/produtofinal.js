const lista = [];


function adicionar() {
    const entradaA = document.getElementById("entradaA").value;
    const entradaB = document.getElementById("entradaB").value;
    const entradaC = document.getElementById("entradaC").value;

    const produto = {
        entradaA: entradaA,
        entradaB: entradaB,
        entradaC: entradaC
    };





    if (localStorage.getItem('items') === null) {
        // Adicionando um array com um objeto no localstorage
        localStorage.setItem('items', JSON.stringify([produto]));
      } else {
        // Copiando o array existente no localstorage e adicionando o novo objeto ao final.
        localStorage.setItem(
          'items',
          // O JSON.parse transforma a string em JSON novamente, o inverso do JSON.strigify
          JSON.stringify([
            ...JSON.parse(localStorage.getItem('items')),
            produto
          ])
        );
      }
      
    






    if (entradaA.trim() !== "" && entradaB.trim() !== "" && entradaC.trim() !== "") {
        lista.push(produto);
    }

    const result = document.getElementById("result");
    result.innerHTML = "";

    lista.forEach(function (item, indice) {
        result.innerHTML += `
                 <div class="tarefa" id="tarefa-${indice}">
                     <header>Título: ${item.entradaA}</header>
                     <h3>Descrição:</h3>
                     <p>${item.entradaB}</p>
                     <footer>Data de Entrega: ${item.entradaC}</footer>
                     <div class="testebotao">
                     <button class="edit-button" onclick="editar(${indice})">Editar</button>
                     <button class="delete-button" onclick="deletar(${indice})">Deletar</button></div>
                 </div>
                `;
    });

    document.getElementById("entradaA").value = ""; 
    document.getElementById("entradaB").value = "";  
    document.getElementById("entradaC").value = "";

    renderItem(produto);
    
}

function deletar(indice) {
    lista.splice(indice, 1);
    adicionar(); // Atualiza a lista após a exclusão.
}

function editar(indice) {
   
const entradaA = document.getElementById("entradaA").value = prompt("Digite o título da nota: ");
    const entradaB = document.getElementById("entradaB").value = prompt("Digite o conteúdo da nota: ");
    const entradaC = document.getElementById("entradaC").value = prompt("Digite a data de entrega da nota: ");
    
    const produtoNovo = {
        entradaA: entradaA,
        entradaB: entradaB,
        entradaC: entradaC
    };

    lista.splice(indice, 1, produtoNovo);
    document.getElementById("entradaA").value = ""; 
    document.getElementById("entradaB").value = ""; 
    document.getElementById("entradaC").value = "";
    
    adicionar();    
    
}


function renderItem(item) {
    // Adicionando uma div com o item e a quantidade na div .items
    $('.items').append(`
    <div class="list-group-item">
      <strong>${item.entradaA}</strong> : ${item.entradaB} : ${item.entradaC}
    </div>`);
  }



  function getItems() {
    // Pegando o array do localstorage
    const items = JSON.parse(localStorage.getItem('items'));

    // Para cada item do array, é renderizado no html
    items.forEach(item => renderItem(item));
  }

  getItems();