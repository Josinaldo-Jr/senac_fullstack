

   
let a = [1,2,3,2,2,2,5,7,9,2,4,6,3,5,7];
let b = [];

let soma = 0;

for(let i = 0; i < a.length; i++) {

    soma+= a[i];
    if( (i+1) % 3 === 0) {
        let adicionar = b.push(soma/3);
        soma = 0;
    }
}

document.write(b);
