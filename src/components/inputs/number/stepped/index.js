function changeInputNumberByStep (evt, type) {
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

function steppedNumberIncrementElEventListener(evt) {
  changeInputNumberByStep(evt, "increment");
}

function steppedNumberDecrementElEventListener(evt) {
  changeInputNumberByStep(evt, "decrement");
}

export default class SteppedNumberInput {
  constructor() {
    this.changeInputNumberByStep = changeInputNumberByStep;
    this.steppedNumberIncrementElEventListener = steppedNumberIncrementElEventListener;
    this.steppedNumberDecrementElEventListener = steppedNumberDecrementElEventListener;
  }
  init(props) {
    let steppedNumberInputGroupSelectors = [];
    if (props && props.els && typeof props.els === 'object' && props.els.length > 0) {
      steppedNumberInputGroupSelectors = props.els;
    } else {
      if (props && typeof props.els !== 'object') {
        console.warn('Frizzy: "els" property must be an array of appropriate stepped number input group selectors. Defaulting to all input group selectors: .fz-input-grp[data-fz-input-grp-variant="number__stepped"]');
      }
      steppedNumberInputGroupSelectors = ['.fz-input-grp[data-fz-input-grp-variant="number__stepped"]'];
    }
    
    let steppedNumberInputGroupEls, steppedNumberInputEls, steppedNumberIncrementEls, steppedNumberDecrementEls;
    
    steppedNumberInputGroupSelectors.forEach((selector) => {
      
      steppedNumberInputGroupEls = document.querySelectorAll(selector);
      
      steppedNumberInputGroupEls.forEach((groupEl) => {
        
        steppedNumberInputEls = groupEl.querySelectorAll("input.fz-input[type=number]");
        steppedNumberIncrementEls = groupEl.querySelectorAll(".fz-input-aid[data-fz-input-aid-type=increment]");
        steppedNumberDecrementEls = groupEl.querySelectorAll(".fz-input-aid[data-fz-input-aid-type=decrement]");
        
        steppedNumberInputEls.forEach((el) => {
          el.addEventListener("click", this.steppedNumberInputElEventListener);
        });
        
        steppedNumberIncrementEls.forEach((el) => {
          el.addEventListener("click", this.steppedNumberIncrementElEventListener);
        });
        
        steppedNumberDecrementEls.forEach((el) => {
          el.addEventListener("click", this.steppedNumberDecrementElEventListener);
        });
        
      });
      
    });
    
  }
}
