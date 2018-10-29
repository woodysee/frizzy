export default function steppedNumberInput() {
  
  const steppedNumberInputGroupEls = document.querySelectorAll(`.fz-input-grp[data-fz-input-grp-variant="number__stepped"]`);
  
  function steppedNumberInputElEventListener (evt) {
    
  }
  
  function stepInputNumber (evt, type) {
    const steppedNumberInputEls = evt.target.parentNode.querySelectorAll("input.fz-input[type=number]");
    const stepDirectionMultiplier = type === 'decrement' ? -1 : 1;
    let step = stepDirectionMultiplier, currentValue, prospectiveValue, minAttributeExists, maxAttributeExists, stepAttributeExists, min, max;
    for (let i = 0; i < steppedNumberInputEls.length; i++) {
      if (stepAttributeExists) {
        step = parseFloat(steppedNumberInputEls[i].step) * stepDirectionMultiplier;
      }
      minAttributeExists = typeof steppedNumberInputEls[i].min !== "undefined";
      maxAttributeExists = typeof steppedNumberInputEls[i].max !== "undefined";
      stepAttributeExists = typeof steppedNumberInputEls[i].step !== "undefined";
      if (minAttributeExists) {
        min = parseFloat(steppedNumberInputEls[i].min);
      }
      if (maxAttributeExists) {
        max = parseFloat(steppedNumberInputEls[i].max);
      }
      currentValue = typeof parseFloat(steppedNumberInputEls[i].value) === "number" ? parseFloat(steppedNumberInputEls[i].value) : 0;
      // console.log(`prospectiveValue = currentValue + step`);
      prospectiveValue = currentValue + step;
      // console.log(`${prospectiveValue} = ${currentValue} + ${step}`);
      if (maxAttributeExists && prospectiveValue < max && type === 'increment' || minAttributeExists && prospectiveValue >= min && type === 'decrement') {
        steppedNumberInputEls[i].value = prospectiveValue;
      } else if (!maxAttributeExists && type === 'increment' || !minAttributeExists && type === 'decrement') {
        steppedNumberInputEls[i].value = prospectiveValue;
      } else if (maxAttributeExists && prospectiveValue >= max) {
        steppedNumberInputEls[i].value = max;
      } else {
        steppedNumberInputEls[i].value = min;
      }
    }
  }
  
  function steppedNumberIncrementElEventListener (evt) {
    stepInputNumber(evt, "increment");
  }
  
  function steppedNumberDecrementElEventListener (evt) {
    stepInputNumber(evt, "decrement");
  }
  
  let steppedNumberInputEls, steppedNumberIncrementEls, steppedNumberDecrementEls;
  
  for (let i = 0; i < steppedNumberInputGroupEls.length; i++) {
    
    steppedNumberInputEls = steppedNumberInputGroupEls[i].querySelectorAll("input.fz-input[type=number]");
    steppedNumberIncrementEls = steppedNumberInputGroupEls[i].querySelectorAll(".fz-input-aid[data-fz-input-aid-type=increment]");
    steppedNumberDecrementEls = steppedNumberInputGroupEls[i].querySelectorAll(".fz-input-aid[data-fz-input-aid-type=decrement]");
    
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
