function timedCount() {
  document.getElementById("counter").innerHTML = ` ${counter}`;
  if (counter <= 0) {
    clearTimeout(timeout)
    document.getElementById("counter").classList.add('text-danger')
    alertFunc()
  }
  if (counter === -1) {
    document.getElementById("counter").classList.add('nascondi')
  }
  if (counter > 10 && counter <= 20) {
    document.getElementById("counter").classList.remove('text-warning')
    document.getElementById("counter").classList.remove('text-danger')
    document.getElementById("counter").classList.add('text-black')
  } else if (counter < 10) {
    document.getElementById("counter").classList.remove('text-black')
    document.getElementById("counter").classList.add('text-warning')
  }
  if (counter < 5) {
    document.getElementById("counter").classList.remove('text-warning')
    document.getElementById("counter").classList.add('text-danger')
  }
  if (counter <= 20) {
    document.getElementById("counter").classList.replace('nascondi', 'mostra')
  }
  counter--;
  timeout = setTimeout(timedCount, 1000);
}
function startCount() {
  if (!timer_on) {
    timer_on = 0;
    timedCount();
  }
}
function alertFunc() {
  clearTimeout(timeout)
  titolo.innerText = 'hai finito il tempo!'
  textiniziale.innerText = 'Ci vuoi riprovare?'
  btnRiprova.classList.replace('nascondi', 'mostra')
  btnRisposte.classList.add('nascondi')
  btnStart.classList.replace('mostra', 'nascondi')
  document.getElementById("counter").innerText = ` oops!`; itemDomanda.innerText = 'Il tempo passa per tutti anche per questo quiz!  '
}