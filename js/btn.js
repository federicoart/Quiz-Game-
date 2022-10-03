function nuovaDomanda() {
  resetState();
  counter = 20;
  showQuestion(domandeRandom[currentQuestionIndex]);
}
function resetState() {
  /* rimuove i figli di btnRisposte. */
  while (btnRisposte.firstChild) {
    btnRisposte.removeChild(btnRisposte.firstChild);
  }
}
function showQuestion(domande) {
  itemDomanda.innerText = domande.domanda;
  domande.risposte.forEach(risposta => {
    const button = document.createElement('button')
    button.innerText = risposta.testo;
    button.classList.add('btn');
    button.classList.add('btn-info');
    button.classList.add('btn-lg');
    button.classList.add('text-center');
    button.classList.add('m-2');
    if (risposta.corretta) {
      button.dataset.corretta = risposta.corretta;
    }
    /* Adding an event listener to the button, and when the button is clicked, it will call the
    function selectAnswer. */
    button.addEventListener('click', selectAnswer)
    btnRisposte.appendChild(button)
  })
}









