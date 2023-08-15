// 1-Calcule o preço total de um produto após aplicar um desconto de 20%
// 2-Converta uma temperatura em Celsius para Fahrenheit.
// 3-Calcule o perímetro e a área de um retângulo.
// 4-Calcule e apresente a idade a partir do ano de nascimento.


// 1-------------------------------
let valor = 100;
let desconto = valor * 0.2;
let valorFinal = valor - desconto;

console.log("\nO valor com desconto é:", valorFinal);
// --------------------------------

// 2-------------------------------
let cel = 100;
let fah = (cel * 1.8) + 32

console.log("\nA temperatura em Celsius convertida em Fahrenheit é:", fah);
// --------------------------------

// 3-------------------------------
let lados = 10;
let perimetro = lados * 3
let base = lados;
let h = (lados * Math.sqrt(3)) / 2
let area = (base * h ) / 2

area = parseInt(area)

console.log("\nO perímetro do triangulo é:", perimetro);
console.log("O Área do triangulo é:", area);
// --------------------------------

// 4-------------------------------
let anoNascimento = 1991;
let anoAtual = 2023;
let idade = anoAtual - anoNascimento

console.log("\nA idade do usuário é:", idade, "\n")
// --------------------------------



