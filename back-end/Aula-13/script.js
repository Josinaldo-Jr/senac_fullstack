 // Palavras para o jogo
 const palavras = ["banana", "laranja", "melão", "uva", "abacaxi", "maçã"];

 // Selecionar uma palavra aleatória
 let palavraAleatoria = palavras[Math.floor(Math.random() * palavras.length)];
 
 // Inicialização de variáveis
 let letrasIncorretas = [];
 let letrasCorretas = [];
 let tentativasRestantes = 6;
 let tempo = 30; // Tempo em segundos
 
 // Elementos do DOM
 const palavraElement = document.getElementById("palavra");
 const letrasIncorretasElement = document.getElementById("letras-incorretas");
 const tentativasElement = document.getElementById("tentativas");
 const tempoElement = document.getElementById("tempo");
 
 // Função para atualizar a exibição do tempo
 function atualizarTempo() {
     tempoElement.textContent = `Tempo Restante: ${tempo} segundos`;
 }
 
 // Função para atualizar a exibição da palavra
 function atualizarPalavra() {
     let palavraExibida = "";
     for (const letra of palavraAleatoria) {
         if (letrasCorretas.includes(letra)) {
             palavraExibida += letra;
         } else {
             palavraExibida += "_";
         }
     }
     palavraElement.textContent = palavraExibida;
 }
 
 // Função para verificar se a letra está na palavra
 function verificarLetra(letra) {
     if (palavraAleatoria.includes(letra)) {
         letrasCorretas.push(letra);
     } else {
         letrasIncorretas.push(letra);
         tentativasRestantes--;
     }
     atualizarPalavra();
     atualizarLetrasIncorretas();
     atualizarTentativasRestantes();
     verificarFimDeJogo();
 }
 
 // Função para atualizar a exibição das letras incorretas
 function atualizarLetrasIncorretas() {
     letrasIncorretasElement.textContent = "Letras Incorretas: " + letrasIncorretas.join(", ");
 }
 
 // Função para atualizar a exibição das tentativas restantes
 function atualizarTentativasRestantes() {
     tentativasElement.textContent = "Tentativas Restantes: " + tentativasRestantes;
 }
 
 // Função para verificar o fim do jogo
 function verificarFimDeJogo() {
     if (tentativasRestantes === 0) {
         alert("Você perdeu! 😩 A palavra era: " + palavraAleatoria);
         salvarPalavraCorreta(palavraAleatoria);
         reiniciarJogo();
     } else if (!palavraElement.textContent.includes("_")) {
         alert("Parabéns! Você ganhou! ✌️ A palavra era: " + palavraAleatoria);
         salvarPalavraCorreta(palavraAleatoria);
         reiniciarJogo();
     }
 }
 
 
 // Função para carregar palavras corretas do localStorage
 function carregarPalavrasCorretas() {
     return JSON.parse(localStorage.getItem("palavrasCorretas")) || [];
 }
 
 // Função para salvar uma palavra correta no localStorage
 function salvarPalavraCorreta(palavra) {
     const palavrasCorretas = JSON.parse(localStorage.getItem("palavrasCorretas")) || [];
     palavrasCorretas.push(palavra);
     localStorage.setItem("palavrasCorretas", JSON.stringify(palavrasCorretas));
 }
 
 
 
 // Função para reiniciar o jogo
 function reiniciarJogo() {
     letrasIncorretas = [];
     letrasCorretas = [];
     tentativasRestantes = 6;
     palavraAleatoria = palavras[Math.floor(Math.random() * palavras.length)];
     atualizarPalavra();
     atualizarLetrasIncorretas();
     atualizarTentativasRestantes();
     // Reiniciar o tempo
     tempo = 30;
     atualizarTempo();
 }
 
 
 // Inicialização do jogo
 atualizarPalavra();
 atualizarLetrasIncorretas();
 atualizarTentativasRestantes();
 atualizarTempo(); // Inicializar o tempo
 
 const palavrasCorretas = carregarPalavrasCorretas();
 console.log("Palavras corretas armazenadas:", palavrasCorretas);
 
 // Event listener para teclas pressionadas
 // Event listener para teclas pressionadas
 document.addEventListener("keypress", function (event) {
     const letra = event.key.toLowerCase();
     if (!letrasCorretas.includes(letra) && !letrasIncorretas.includes(letra)) {
         verificarLetra(letra);
     }
 });
 
 
 // Contagem regressiva
 setInterval(function () {
     if (tempo > 0) {
         tempo--;
         atualizarTempo();
     } else {
         alert("Tempo esgotado!");
         reiniciarJogo();
     }
 }, 1000); // Atualizar a cada segundo