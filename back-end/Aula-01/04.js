// 1-Calcule o preço total de um produto após aplicar um desconto de 20%
// 2-Converta uma temperatura em Celsius para Fahrenheit.
// 3-Calcule o perímetro e a área de um retângulo.
// 4-Calcule e apresente a idade a partir do ano de nascimento.


// 1-------------------------------
let valor = prompt("Digite o valor do produto: ");
let desconto = valor * 0.2;
let valorFinal = valor - desconto;

alert("O valor com desconto é: " + valorFinal);
// --------------------------------

// 2-------------------------------
let cel = prompt("Digite o valor da temperatura em Celsius: ");
let fah = (cel * 1.8) + 32

alert("A temperatura em Celsius convertida em Fahrenheit é: " + fah);
// --------------------------------

// 3-------------------------------
let base = prompt("Digite o valor da base do retângulo: ");
let altura = prompt("Digite o valor da altura do retângulo: ");
let perimetro = (base + altura) * 2
let area = base * altura

alert("O perímetro do retângulo é: " + perimetro);
alert("O Área do retângulo é: " + area);
// --------------------------------

// 4-------------------------------
let anoNascimento = prompt("Digite o ano do seu nascimento: ");
let anoAtual = 2023;
let idade = anoAtual - anoNascimento

alert("A idade do usuário é: " + idade)
// --------------------------------