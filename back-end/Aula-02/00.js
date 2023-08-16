// 1-------------------------------
let idade = prompt("Digite a sua idade: ");

if (idade >= 51) {
    alert(`Idade igual a ${idade}. Você é da 3ª idade!`);
}

else if (idade >= 26 & idade <= 50){
    alert(`Idade igual a ${idade}. Você é um adulto!`);
}

else if (idade >= 18 & idade <= 25) {
    alert(`Idade igual a ${idade}. Você é um adulto em crescimento!`);
} 

else if (idade >= 11 & idade <=17){
    alert(`Idade igual a ${idade}. Você é um adolescente!`);
}

else if (idade >= 1 & idade <=10){
    alert(`Idade igual a ${idade}. Você é uma criança!`);
}

else {
    alert(`Idade igual a ${idade}. Você não nasceu ou digitou algo errado!`);
}

// --------------------------------
