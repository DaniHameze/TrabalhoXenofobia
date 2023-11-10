function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }
  
  /*Escolha das palavras e aleatorização */
  const words = ['chuvoso', 'nevasca', 'tempestoso', 'nublado', 'ensolarado'];
  let selectedWord = words[Math.floor(Math.random() * words.length)]; //math.random aleatorializa e  * words.lenght multiplica pela quantidade de palavras
  let guessedWord = Array(selectedWord.length).fill('_');
  let attempts = 6;
  let guessedLetters = [];
  
  /*Definem variáveis que fazem referência ao HTML usando o método .getElementById e exibem informações durante o jogo */
  const wordDisplay = document.getElementById('word-display');
  const remainingAttempts = document.getElementById('remaining-attempts');
  const guessedLettersDisplay = document.getElementById('guessed-letters');
  const guessInput = document.getElementById('guess-input');
  const guessWordInput = document.getElementById('guess-word');
  
  /*Função para adivinhar a palavra */
  function guessWord() {
    const guess = guessWordInput.value.toLowerCase();
  
    if (guess === selectedWord) {
      alert('Você acertou! A palavra era: ' + selectedWord);
      resetGame();
    } else {
      alert('Você errou! Tente novamente.');
    }
    guessWordInput.value = '';
  }
  
  /*Atualiza e exibe na tela as informações do jogo, como a palavra a ser adivinhada, as tentativas restantes e as letras adivinhadas */
  function updateDisplay() {
      wordDisplay.textContent = guessedWord.join(' ');
      remainingAttempts.textContent = attempts;
      guessedLettersDisplay.textContent = guessedLetters.join(', ');
  }
  
  /*Reinicia o jogo, selecionando uma nova palavra aleatória, redefine a variável guessedWord, restaura o número de tentativas e 
  limpa as letras adivinhadas, depois chama updateDisplay para refletir essas alterações na tela */
  function resetGame() {
      selectedWord = words[Math.floor(Math.random() * words.length)];
      guessedWord = Array(selectedWord.length).fill('_');
      attempts = 6;
      guessedLetters = [];
      guessWordInput.value = ''; //Limpa o campo de adivinhar a palavra
      updateDisplay();
  }
  updateDisplay();
  
  /*Evento para botão de reiniciar executa um código para adivinhar a letra e chama updateDisplay para atualizar a tela. Quando o botão 
  de reinício é clicado, ele chama a função resetGame para reiniciar o jogo */
  document.getElementById('guess-button').addEventListener('click', function() {
      const guess = guessInput.value.toLowerCase();
        
    if (guess.length !== 1 || !guess.match(/[a-z]/)) {
      alert('Por favor, insira uma única letra válida.');
    } else if (guessedLetters.includes(guess)) {
      alert('Você já tentou essa letra.');
    } else if (selectedWord.includes(guess)) {
      for (let i = 0; i < selectedWord.length; i++) { //Faz aparecer a quantidade de traços de acordo com o tamanho da palavra 
        if (selectedWord[i] === guess) {
          guessedWord[i] = guess;
        }
      }
    } else {
      attempts--;
      guessedLetters.push(guess);
      uploadPic() //Parte que tava dando erro e custou cerca de 4hrs seguidas do dia da Dani 
    }
  
    guessInput.value = '';
    updateDisplay();
  
    if (guessedWord.join('') === selectedWord) {
      alert('Parabéns! Você venceu!');
    } else if (attempts === 0) {
      alert('Fim de jogo. A palavra correta era: ' + selectedWord);
    }
  });
  
  /*Botão de reset */
  document.getElementById('reset-button').addEventListener('click', function() {
    resetGame();
  });
  resetGame();

  /*Casos de erro */
  function uploadPic(){
    switch(attempts){
        case 5:
            document.getElementById("pic").style.background  = "url('./img/forca01.png')"; 
            break;
        case 4:
            document.getElementById("pic").style.background  = "url('./img/forca02.png')";
            break;
        case 3:
            document.getElementById("pic").style.background  = "url('./img/forca03.png')";
            break;
        case 2:
            document.getElementById("pic").style.background  = "url('./img/forca04.png')";
            break;
        case 1:
            document.getElementById("pic").style.background  = "url('./img/forca05.png')";
            break;
        case 0:
            document.getElementById("pic").style.background  = "url('./img/forca06.png')";
            break;
        default:
            document.getElementById("pic").style.background  = "url('./img/forca.png')";
            break;
    }
}
    uploadPic();

/*selectedWord - palavra sorteada */
/*guessedWord - palavra  *
/*guessedLetters - letra chutada pelo jogador */
/* */
/* */
/* */
/* */
/* */