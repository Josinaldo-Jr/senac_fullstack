// 1-------------------------------
function insert(value) {
    let display = document.getElementById('result').innerHTML;
    
    // Verificar se o último caractere é um operador
    let lastChar = display.charAt(display.length - 1);
    let operators = "+-*/.x";
    
    if (display.includes("Erro...")) {

        display = value;

    } else if (operators.includes(lastChar) && operators.includes(value)) {
        // Substituir o último operador pelo novo
        display = display.slice(0, -1) + value;
    } 
    else {
        display += value;
    }
    
    document.getElementById('result').innerHTML = display;
}

function clean() {

    document.getElementById('result').innerHTML = "";
}

function back() {

    let display = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = display.slice(0, -1);
}

function calculate() {
    let display = document.getElementById('result').innerHTML;

    if (display) {
        if (display.includes("/0")) {
            document.getElementById('result').innerHTML = "Erro: Divisão por zero";
        } else {
                       
            document.getElementById('result').innerHTML = eval(display.replace("x", "*"));
            
        }
    } else {
        document.getElementById('result').innerHTML = "Erro...";        
    }
}
// --------------------------------