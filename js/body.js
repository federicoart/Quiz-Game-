function setStatusClass(element, correct) {
  setTimeout(respFunc, 50);
  clearStatusClass(element);

  function respFunc() {
    if (correct) {
      clearTimeout(timeout);
      timer_on = 0;
      element.classList.add('bg-success');
    }
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct');
  element.classList.remove('wrong');
}
