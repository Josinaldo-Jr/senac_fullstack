// function calcular() {
//     const num1 = parseFloat(document.getElementById("num1").value);
//     const num2 = parseFloat(document.getElementById("num2").value);
//     const operacao = document.getElementById("operacao").value;
//     let resultado;

//     switch (operacao) {
//       case "somar":
//         resultado = num1 + num2;
//         break;
//       case "subtrair":
//         resultado = num1 - num2;
//         break;
//       case "multiplicar":
//         resultado = num1 * num2;
//         break;
//       case "sectionidir":
//         resultado = num1 / num2;
//         break;
//       default:
//         resultado = "Operação inválida";
//     }

//     document.getElementById("resultado").innerHTML = `Resultado: ${resultado}`;
//   }

function calculadora() {
    const numA = parseFloat(document.getElementById("numA").value);
    const numB = parseFloat(document.getElementById("numB").value);
    const operar = document.getElementById("operar").value;
    let result;

    switch (operar) {
        case "somar":
            result = numA + numB;
            alert(numA + numB)
            break;

        case "subtrair":
            result = numA - numB;
            alert(numA - numB)
            break;


        case "multiplicar":
            result = numA * numB;
            alert(numA * numB)
            break;

        case "dividir":
            result = numA / numB;
            alert(numA / numB)
            break;

        default:
            alert("Erro! Digite novamente...")
            break;
    }

    document.getElementById('resultado').innerHTML = "Resultado: " + result;
}