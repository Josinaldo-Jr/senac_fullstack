function enviar() {

const cliente = {
    nome: " ",
    email: " ",
    nascimento: " ",
    sexo: " ",
    estado: " "
};

let nomeCadastro = document.getElementById("nome").value;
let emailCadastro = document.getElementById("email").value;
let nascimentoCadastro = document.getElementById("nascimento").value;
let sexoCadastro = document.querySelector('input[name="sexo"]:checked').value;
let estadoCadastro = document.getElementById("estado").value;

cliente.nome = nomeCadastro;
cliente.email = emailCadastro;
cliente.nascimento = nascimentoCadastro;
cliente.sexo = sexoCadastro;
cliente.estado = estadoCadastro;

alert(`
${cliente.nome} 
${cliente.email} 
${cliente.nascimento}
${cliente.sexo}
${cliente.estado}
`);

const exibir = document.getElementById("tr");

exibir.innerHTML = `
<tr>

<td>${cliente.nome}</td> 
<td>${cliente.email}</td> 
<td>${cliente.nascimento}</td> 
<td>${cliente.sexo}</td> 
<td>${cliente.estado}</td> 

</tr>

`;}


// const clientes = JSON.parse(localStorage.getItem('clientes')) || []
// const exibir = document.getElementById("tb");

// clientes.forEach(cliente => {
//     exibir.innerHTML += `
//     <tr>
//         <td>${cliente.nome}</td> 
//         <td>${cliente.email}</td> 
//         <td>${cliente.nascimento}</td> 
//         <td>${cliente.sexo}</td> 
//         <td>${cliente.estado}</td>
//     </tr>
//     `;
// });

// const form = document.querySelector('form')
// form.addEventListener('submit', (event) => {
//     event.preventDefault()
    
//     let nome = document.getElementById("nome").value;
//     let email = document.getElementById("email").value;
//     let nascimento = document.getElementById("nascimento").value;
//     let sexo = document.getElementById("sexo").value;
//     let estado = document.getElementById("estado").value;
    
//     const cliente = {
//         nome,
//         email,
//         nascimento,
//         sexo,
//         estado
//     };
    

//     clientes.push(cliente)
//     localStorage.setItem('clientes', JSON.stringify(clientes))
    
//     exibir.innerHTML += `
//     <tr>
//         <td>${cliente.nome}</td> 
//         <td>${cliente.email}</td> 
//         <td>${cliente.nascimento}</td> 
//         <td>${cliente.sexo}</td> 
//         <td>${cliente.estado}</td>
//     </tr>
//     `;
// })
