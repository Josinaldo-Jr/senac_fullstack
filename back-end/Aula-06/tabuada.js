document.getElementById("calcular").addEventListener("click", function () {
    let numero = parseInt(document.getElementById("numero").value);
    let tabuada = document.getElementById("tabuada");
    tabuada.innerHTML = "";

    for (let i = 1; i <= 10; i++) {
        let resultado = numero * i;
        tabuada.innerHTML += numero + " x " + i + " = " + resultado + "<br>";
    }
});
