export default function multiStepFormLayout() {

  const stepsContentEls = document.getElementsByClassName('fz-content-steps');
  const stepContentEls = document.getElementsByClassName('fz-content-step');
  const stepTitleEls = document.getElementsByClassName('fz-step-title');
  
  const airfrovTealColour = '#65beb9';
  
  function toggleStepContent (evt) {
    // console.log(" " + evt.target.parentNode.dataset.stepsId + "-" + evt.target.dataset.stepNr);
    let el = evt.target;
    let parentEl = el.parentNode;
    let selectedBlock = parentEl.dataset.stepsId;
    while (typeof selectedBlock === 'undefined') {
      if (parentEl.getElementsByClassName('fz-steps-select').length > 0) {
        selectedBlock = parentEl.getElementsByClassName('fz-steps-select')[0].dataset.stepsId;
        break;
      }
      parentEl = parentEl.parentNode;
    }
    
    let selectedStep = el.dataset.stepNr;
    while (typeof el.dataset === 'undefined' || typeof selectedStep === 'undefined') {
      if (typeof el.dataset !== 'undefined' && typeof el.dataset.stepNr !== 'undefined') {
        selectedStep = el.dataset.stepNr;
        break;
      }
      el = el.parentNode;
    }
    
    if (typeof selectedBlock !== 'undefined' || typeof selectedStep !== 'undefined') {
      // hide other blocks
      // console.log("selectedStep", selectedStep, "for", selectedBlock);
      styliseSelectedStepTitle(selectedBlock, selectedStep);
      toggleSelectedStepContent(selectedBlock, selectedStep);
      setStepIndicatorValues(selectedBlock, selectedStep);
    }
  }

  function styliseSelectedStepTitle (currentBlock, selectedStep) {
    let stepNrDiscEls, stepNrCopyTitleEls;
    for (let i = 0; i < stepTitleEls.length; i++) {
      // default style is unselected
      if (stepTitleEls[i].parentNode.dataset.stepsId !== currentBlock) {
        break;
      }
      stepNrDiscEls = stepTitleEls[i].getElementsByClassName("fz-step-nr-disc");
      stepNrCopyTitleEls = stepTitleEls[i].getElementsByClassName("fz-step-title__name");
      if (stepTitleEls[i].dataset.stepNr === selectedStep) {
        // show the selected step
        stepTitleEls[i].style.backgroundColor = "#ffff";
        if (stepNrDiscEls.length > 0) {
          for (let j = 0; j < stepNrDiscEls.length; j++) {
            stepNrDiscEls[j].style.borderColor = airfrovTealColour;
            stepNrDiscEls[j].style.color = airfrovTealColour;
          }
        }
        if (stepNrCopyTitleEls.length > 0) {
          for (let j = 0; j < stepNrCopyTitleEls.length; j++) {
            stepNrCopyTitleEls[j].style.borderColor = stepNrCopyTitleEls[j].style.color = airfrovTealColour;
          }
        }
      } else {
        stepTitleEls[i].style.backgroundColor = "#fafafa";
        if (stepNrDiscEls.length > 0) {
          for (let j = 0; j < stepNrDiscEls.length; j++) {
            stepNrDiscEls[j].style.removeProperty('borderColor');
            // Removed script-invoked style declaration to restore styles, especially hover styles from stylesheet
            if (stepNrDiscEls[j].style.removeProperty) {
              stepNrDiscEls[j].style.removeProperty('border-color');
            } else {
              // Retrospective support for IE9
              stepNrDiscEls[j].style.removeAttribute('borderColor');
            }
            if (stepNrDiscEls[j].style.removeProperty) {
              stepNrDiscEls[j].style.removeProperty('color');
            } else {
              // Retrospective support for IE9
              stepNrDiscEls[j].style.removeAttribute('color');
            }
          }
        }
        if (stepNrCopyTitleEls.length > 0) {
          for (let j = 0; j < stepNrCopyTitleEls.length; j++) {
            // Removed script-invoked style declaration to restore styles, especially hover styles from stylesheet
            if (stepNrCopyTitleEls[j].style.removeProperty) {
              stepNrCopyTitleEls[j].style.removeProperty('border-color');
              stepNrCopyTitleEls[j].style.removeProperty('color');
            } else {
              // Retrospective support for IE9
              stepNrCopyTitleEls[j].style.removeAttribute('borderColor');
              stepNrCopyTitleEls[j].style.removeAttribute('color');
            }
          }
        }
      }
    }
  }
  
  function setStepIndicatorValues (currentBlock, selectedStep) {
    if (typeof currentBlock === 'undefined' || typeof selectedStep === 'undefined') {
      return;
    }
    let actualSteps;
    for (let i = 0; i < stepContentEls.length; i++) {
      if (typeof stepsContentEls[i].dataset.stepsId === 'undefined') {
        break;
      }
      if (stepsContentEls[i].dataset.stepsId === currentBlock) {
        actualSteps = stepsContentEls[i].getElementsByClassName('fz-content-step');
        if (actualSteps.length > 0) {
          stepsContentEls[i].getElementsByClassName('fz-step-indicator__current')[0].innerHTML = selectedStep;
          stepsContentEls[i].getElementsByClassName('fz-step-indicator__total')[0].innerHTML = actualSteps.length;
          break;
        }
      }
    }
  }

  function toggleSelectedStepContent (currentBlock, selectedStep) {
    for (let i = 0; i < stepContentEls.length; i++) {
      if (stepContentEls[i].parentNode.dataset.stepsId !== currentBlock) {
        break;
      }
      // default style is unselected
      if (stepContentEls[i].dataset.stepNr === selectedStep) {
        stepContentEls[i].style.display = "block";
      } else {
        stepContentEls[i].style.display = "none";
      }
    }
  }
  
  const stepsSelectEls = document.getElementsByClassName("fz-steps-select");
  let stepsBlock, selectedStep;
  
  if (typeof stepsSelectEls !== 'undefined') {
    for (let i = 0; i < stepsSelectEls.length; i++) {
      stepsBlock = stepsSelectEls[i].dataset.stepsId;
      selectedStep = stepsSelectEls[i].dataset.stepNr;
      stepsSelectEls[i].addEventListener('click', toggleStepContent, false);
      styliseSelectedStepTitle(stepsBlock, selectedStep);
      toggleSelectedStepContent(stepsBlock, selectedStep);
      setStepIndicatorValues(stepsBlock, selectedStep);
    }
  }
  
  return;
  
}
