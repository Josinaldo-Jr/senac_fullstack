// 1-------------------------------
// let dia = Number(prompt("Digite um número em relação ao dia da semana: "));

function diaSemana() {

    const dia = Number(document.getElementById("number").value);

    switch (dia) {
        case 1:
            alert("É Domingo!");
            break;
        case 2:
            alert("É Segunda!");
            break;
        case 3:
            alert("É Terça!");
            break;
        case 4:
            alert("É Quarta!");
            break;
        case 5:
            alert("É Quinta!");
            break;
        case 6:
            alert("É Sexta!");
            break;
        case 7:
            alert("É Sábado!");
            break;
        default:
            alert("Erro! Digite novamente...");
    }
}
// --------------------------------


