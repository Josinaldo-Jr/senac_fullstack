let menu;

do {  
    menu = parseInt(prompt(`
    ---------
    Menu
    ----------
    Escolha uma operação:    
    0 - Sair
    1 - Média Geométrica
    2 - Média Ponderada
    3 - Média Aritmética`)); 

    if (menu === 0 ) {

        alert("Saindo do sistema!");

    } else if ((menu >= 1) && (menu <= 3)) {

        let x = parseInt(prompt("Digite um número positivo referente a x: "));
        let y = parseInt(prompt("Digite um número positivo referente a y: "));
        let z = parseInt(prompt("Digite um número positivo referente a z: "));

        switch (menu) {
            case 1:
                let mediaG = Math.pow(x * y * z, 1 / 3);
                alert(`A Média Geométrica é: ${mediaG.toFixed(1)}`);
                break;

            case 2:
                let mediaP = (x + y * 2 + z *3) / 6;
                alert(`A Média Ponderada é: ${mediaP.toFixed(1)}`);
                break;

            case 3:
                let mediaA = (x + y + z) / 3;
                alert(`A Média Aritmética é: ${mediaA.toFixed(1)}`);
                break;

            default:
                alert("Erro... Digite novamente!"); 
                break;
        }       

    } else {

        alert("Erro... Digite novamente!"); 

    }
} while (menu !== 0);


// let menu;

// do {    

//    menu = parseInt(prompt("---------\nMenu\n----------\nEscolha uma operação:\n\n0 - Sair\n1 - Média Geométrica\n2 - Média Ponderada\n3 - Média Aritmética\n"));  

//     if (menu === 1 ) {

//         alert("Escolha números referentes a x/y/z");

//         let x = parseInt(prompt("Digite um número positivo referente a x: "));
//         let y = parseInt(prompt("Digite um número positivo referente a y: "));
//         let z = parseInt(prompt("Digite um número positivo referente a z: "));

//         let mediaG = Math.pow(x * y * z, 1/3);
//         alert(`A Média Geométrica é: ${mediaG.toFixed(1)}`);

//     } else if (menu === 2) {

//         alert("Escolha números referentes a x/y/z");

//         let x = parseInt(prompt("Digite um número positivo referente a x: "));
//         let y = parseInt(prompt("Digite um número positivo referente a y: "));
//         let z = parseInt(prompt("Digite um número positivo referente a z: "));            

//         let mediaP = (x + y * 2 + z *3) / 6;
//         alert(`A Média Ponderada é: ${mediaP.toFixed(1)}`);

//     } else if (menu === 3) {

//         alert("Escolha números referentes a x/y/z");
    
//         let x = parseInt(prompt("Digite um número inteiro para x: "));
//         let y = parseInt(prompt("Digite um número inteiro para y: "));
//         let z = parseInt(prompt("Digite um número inteiro para z: "));
    
//         let mediaA = (x + y + z) / 3;
//         alert(`A Média Aritmética é: ${mediaA.toFixed(1)}`);

//     } else if (menu == 0) {

//         alert("Saindo do sistema!");

//     }else {

//         alert("Erro... Digite novamente!"); 

//     }
// } while (menu !== 0);