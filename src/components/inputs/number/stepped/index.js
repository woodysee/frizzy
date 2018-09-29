export default function steppedNumberInput() {
  
  const steppedNumberInputGroupEls = document.querySelectorAll(`.fz-input-grp[data-fz-input-grp-variant="number__stepped"]`);
  
  function steppedNumberInputElEventListener (evt) {
    const steppedNumberIncrementEls = evt.target.parentNode.querySelectorAll("fz-input-aid[data-fz-input-aid-type=increment]");
    for (let i = 0; i < steppedNumberIncrementEls.length; i++) {
      steppedNumberIncrementEls[i]
    }
  }
  
  function stepInputNumber (evt, type) {
    const steppedNumberInputEls = evt.target.parentNode.querySelectorAll("input.fz-input[type=number]");
    let stepValue = 1, discreteValue = parseFloat(steppedNumberInputEls[i].step) || 1;
    const minAttributeExists = typeof steppedNumberInputEls[i].min !== "undefined";
    const maxAttributeExists = typeof steppedNumberInputEls[i].max !== "undefined";
    const stepAttributeExists = typeof steppedNumberInputEls[i].step !== "undefined";
    switch (type) {
      case "decrement":
        stepDirectionMultiplier = -1;
        break;
      default:
        stepDirectionMultiplier = 0;
    }
    if (minAttributeExists) {
      min = parseFloat(steppedNumberInputEls[i].min);
    }
    if (maxAttributeExists) {
      max = parseFloat(steppedNumberInputEls[i].max);
    }
    if (stepAttributeExists) {
      step = parseFloat(steppedNumberInputEls[i].step);
    } else {
      step = 1;
    }
    let currentValue, prospectiveValue;
    for (let i = 0; i < steppedNumberInputEls.length; i++) {
      currentValue = steppedNumberInputEls[i].value;
      if (typeof steppedNumberInputEls[i].value !== "number") {
        currentValue = min;
      } else {
        currentValue = 0;
      }
      prospectiveValue = currentValue + step;
      if (maxAttributeExists && prospectiveValue < max && type === "increment") {
        // console.log("Preventing increment.");
        steppedNumberInputEls[i].value = prospectiveValue;
      }
      
      steppedNumberInputEls[i].value =+ discreteValue;
    }
  }
  
  function steppedNumberIncrementElEventListener (evt) {
    
  }
  
  function steppedNumberDecrementElEventListener (evt) {
    
  }
  
  let steppedNumberInputEls, steppedNumberIncrementEls, steppedNumberDecrementEls;
  
  for (let i = 0; i < steppedNumberInputGroupEls.length; i++) {
    steppedNumberInputEls = steppedNumberInputGroupEls[i].querySelector("input.fz-input[type=number]");
    steppedNumberIncrementEls = steppedNumberInputGroupEls[i].querySelector(".fz-input-aid[data-fz-input-aid-type=increment]");
    steppedNumberDecrementEls = steppedNumberInputGroupEls[i].querySelector(".fz-input-aid[data-fz-input-aid-type=decrement]");
    for (let j = 0; j < steppedNumberInputEls.length; j++) {
      steppedNumberInputEls[j].addEventListener("click", steppedNumberInputElEventListener);
    }
    for (let k = 0; k < steppedNumberInputEls.length; k++) {
      steppedNumberIncrementEls[k].addEventListener("click", steppedNumberIncrementElEventListener);
    }
    for (let l = 0; l < steppedNumberInputEls.length; l++) {
      steppedNumberDecrementEls[l].addEventListener("click", steppedNumberDecrementElEventListener);
    }
  }
}
