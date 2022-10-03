/**
 * It takes the event object as an argument, and then it gets the selected button, and then it gets the
 * correct answer, and then it loops through all the buttons and sets the status class, and then it
 * checks if the answer is correct, and if it is, it checks if there are more questions, and if there
 * are, it increments the current question index and the question number, and then it calls the new
 * question function, and then it calls the start count function, and if there aren't more questions,
 * it sets the title to "Congratulations, you won!", and then it sets the question item to "I lost, it
 * wasn't supposed to go like this... here's your prize!", and then it adds the hide class to the
 * answer buttons, and then it replaces the hide class with the show class on the retry button, and if
 * the answer isn't correct, it sets the title to "you're wrong!", and then it sets the initial text
 * @param e - the event object
 */
function selectAnswer(e) {
  const selectedButton = e.target;
  const corretta = selectedButton.dataset.corretta;

  Array.from(btnRisposte.children).forEach((button) => {
    setStatusClass(button, button.dataset.corretta);
  });

  if (corretta) {
    if (domandeRandom.length > currentQuestionIndex + 1) {
      if (currentQuestionIndex < 9) {
        currentQuestionIndex++;
        numeroDomanda++;
        titolo.innerText = `Domanda ${numeroDomanda} su 10`;
        nuovaDomanda();
        startCount();
      }
    } else {
      /* se hai rispossto a tutte */
      titolo.innerText = 'Congratulazioni Hai vinto!';

      itemDomanda.innerText =
        'Mi Hai Sconfitto, non doveva andare cosi... ecco a te il montepremi ! ';
      btnRisposte.classList.add('nascondi');
      btnRiprova.classList.replace('nascondi', 'mostra');
      document.getElementById("counter").classList.add('nascondi')
    }
  } else {
    /* se non corretta */
    titolo.innerText = 'hai sbagliato!';
    textiniziale.innerText = 'Ci vuoi riprovare?';
    btnRiprova.classList.replace('nascondi', 'mostra');
    itemDomanda.innerText =
      'Ci hai provato ma questo non é un quiz come gli altri, puo tentarci ancora fai click su riprova per battere il Boss... che sarei io!   ';
    btnRisposte.classList.add('nascondi');
    btnStart.classList.replace('mostra', 'nascondi');
    document.getElementById("counter").classList.add('nascondi')
  }
}
