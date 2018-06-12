(() => {
  const selectors = document.getElementsByName("binaryRadioInputs");
  const printTargetEl = document.getElementById("console--input-radio-binary");
  const wrapperEl = document.getElementById("demo-container--input-radio-binary");

  function printValueOfSelected () {
    for (let i = 0; i < selectors.length; i++) {
      if (selectors[i].checked) {
        printTargetEl.innerHTML = "&nbsp;&gt;&nbsp;" + selectors[i].value;
      }
    }
  }

  printValueOfSelected();
  
  wrapperEl.addEventListener("click", printValueOfSelected);
  
})();

(() => {
  const selectors = document.getElementsByName("multiRadioInputs");
  const printTargetEl = document.getElementById("console--input-radio-basic");
  const wrapperEl = document.getElementById("demo-container--input-radio-basic");

  function printValueOfSelected () {
    for (let i = 0; i < selectors.length; i++) {
      if (selectors[i].checked) {
        printTargetEl.innerHTML = "&nbsp;&gt;&nbsp;" + selectors[i].value;
      }
    }
  }

  printValueOfSelected();

  wrapperEl.addEventListener("click", printValueOfSelected);
})();
