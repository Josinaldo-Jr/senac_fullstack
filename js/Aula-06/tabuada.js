document.getElementById("calcular").addEventListener("click", function(){
    let numero  = parseInt(document.getElementById("numero").value);
    let tabuada = document.getElementById("tabuada").innerHTML = ""; 

    for (let i = 0; i <= 10; i++) {
       let resultado = numero * i;

       document.getElementById("tabuada").innerHTML += `${numero} x ${i} = ${resultado} <br>`;        
    }
})