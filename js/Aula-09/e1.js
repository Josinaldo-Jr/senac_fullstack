let matriz = [];

console.table(matriz);

for (let i = 0; i<4; i++) {

    matriz.push([parseInt(Math.random() * (10 - 1) + 1), parseInt(Math.random() * (10 - 1) + 1), parseInt(Math.random() * (10 - 1) + 1), parseInt(Math.random() * (10 - 1) + 1)]);

    document.write(`<tr> <td>${i}</td>`);
    for (let j = 0; j<4; j++){

        document.write(`<td>${matriz[i][j]}</td>`);
        
    }
    document.write(`</tr>`);    
}






















// let matriz = [[1,2,3,4], [5,6,7,8], [9,10,11,12], [13,14,15,16]];

// console.table(matriz);

// for (let i = 0; i<4; i++) {

//     document.write(`<tr> <td>${i}</td>`);
//     for (let j = 0; j<4; j++){

//         document.write(`<td>${matriz[i][j]}</td>`);
        
//     }
//     document.write(`</tr>`);

    
// }