const frase = document.querySelector('#frase');
const textiniziale = document.querySelector('#textiniziale');
const btnRiprova = document.querySelector('#restart');
const tempo = document.querySelector('#tempo');
const domandeC = document.querySelector('#contenitoreD');
const istruzioni = document.querySelector('#istruzioni');
const info = document.querySelector('#info');
const btnStart = document.querySelector('#inizia');
const titolo = document.querySelector('.titolo');
const itemDomanda = document.querySelector('#domanda');
const btnRisposte = document.querySelector('#risposte');
const primaParte = document.querySelector('#start');
let numeroDomanda = 1;
let domandeRandom, currentQuestionIndex;
let counter = 3;
let timeout;
let timer_on = 0;

fetch('./../json/domande.json')
  .then((response) => response.json())
  .then((json) => {
    // giobali
  const domande = json;

    // evento istruzioni
    istruzioni.addEventListener('click', istruzioniContent);
    function istruzioniContent() {
      if (info.classList == 'nascondi') {
        info.classList.replace('nascondi', 'mostra');
      } else {
        info.classList.replace('mostra', 'nascondi');
      }
    }

    // evento start
    btnStart.addEventListener('click', () => {
      startGame();
      startCount();
    });
    function startGame() {
      btnStart.classList.add('nascondi');
      frase.classList.add('nascondi');
      textiniziale.classList.add('nascondi');
      tempo.classList.replace('nascondi', 'mostra');
      domandeRandom = domande.sort(() => Math.random() - 0.5);
      currentQuestionIndex = 0;
      domandeC.classList.remove('nascondi');
      nuovaDomanda();
    }
    // evento riprova
    btnRiprova.addEventListener('click', reload);
    function reload() {
      window.location.reload();
    }

  }).catch((error) => {
    console.error('Error:', message);
  });
