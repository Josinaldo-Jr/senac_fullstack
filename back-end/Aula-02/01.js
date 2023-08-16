
// let valorProduto = Number(prompt("Digite o valor do produto: "));
// let mediaMensal = Number(prompt("Digite o número da média mensal: "));

// let aumentoI = valorProduto * 0.1;
// let resultadoI = valorProduto + aumentoI;

// let aumentoII = valorProduto * 0.15;
// let resultadoII = valorProduto + aumentoII;
// parseFloat(resultadoII);

// let desconto = valorProduto * 0.2;
// let resultadoIII = valorProduto - desconto;

// if (mediaMensal < 500 & valorProduto < 30) {
//     alert("O produto recebeu o aumento de 10%. Ficando: " + resultadoI);
// } 
// else if (mediaMensal >= 500 & mediaMensal < 1200 & valorProduto >= 30 & valorProduto < 80) {
//     alert("O produto recebeu o aumento de 15%. Ficando: " + resultadoII);
// }
// else if (mediaMensal >= 1200 & valorProduto >= 80) {
//     alert("O produto recebeu o desconto de 20%. Ficando: " + resultadoIII);
// }
// else {
//     alert("O produto não será reajustado!");
// }


let valorProduto = Number(prompt("Digite o valor do produto: "));
let mediaMensal = Number(prompt("Digite o número da média mensal: "));

if (mediaMensal < 500 & valorProduto < 30) {
    valorProduto += valorProduto * 0.1;
    alert("O produto recebeu o aumento de 10%. Ficando: " + valorProduto);
} 
else if (mediaMensal < 1200 & valorProduto < 80) {
    valorProduto += valorProduto * 0.15;
    parseFloat(valorProduto);
    alert("O produto recebeu o aumento de 15%. Ficando: " + valorProduto);
}
else if (mediaMensal >= 1200) {
    valorProduto -= valorProduto * 0.2;    
    alert("O produto recebeu o desconto de 20%. Ficando: " + valorProduto);
}
else {
    alert("O produto não será reajustado!");
}

