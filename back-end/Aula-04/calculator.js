// 1-------------------------------
function insert (value) {

    let display = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = display + value;
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

    if (display){
        document.getElementById('result').innerHTML = eval(display);
    }
    else {
        document.getElementById('result').innerHTML = "Erro..."        
    }    
}
// --------------------------------