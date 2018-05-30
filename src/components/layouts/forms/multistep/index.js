import './index.css';

export default function multiStepFormLayout() {

  const stepsContentEls = document.getElementsByClassName('fz-content-steps');
  const stepContentEls = document.getElementsByClassName('fz-content-step');
  const stepTitleEls = document.getElementsByClassName('fz-step-title');

  const wrapper = document.getElementsByClassName('fz-steps-wrapper')[0];
  
  function toggleStepContent (evt) {
    // console.log(" " + evt.target.parentNode.dataset.stepsId + "-" + evt.target.dataset.stepNr);
    const selectedBlock = evt.target.parentNode.dataset.stepsId;
    const selectedStep = evt.target.dataset.stepNr;
    if (typeof selectedBlock !== 'undefined' && typeof selectedStep !== 'undefined') {
      // hide other blocks
      styliseSelectedStepTitle(selectedBlock, selectedStep);
      toggleSelectedStepContent(selectedBlock, selectedStep);
      setStepIndicatorValues(selectedBlock, selectedStep);
    }
  }

  function styliseSelectedStepTitle (currentBlock, selectedStep) {
    for (let i = 0; i < stepTitleEls.length; i++) {
      // default style is unselected
      if (stepTitleEls[i].parentNode.dataset.stepsId !== currentBlock) {
        break;
      }
      if (stepTitleEls[i].dataset.stepNr === selectedStep) {
        // show the selected step
        stepTitleEls[i].style.backgroundColor = "#ffff";
      } else {
        stepTitleEls[i].style.backgroundColor = "#fafafa";
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
  
  const stepTitlesEls = document.getElementsByClassName("fz-steps-select");
  let stepsBlock, selectedStep;
  
  if (typeof stepTitlesEls !== 'undefined') {
    for (let i = 0; i < stepTitlesEls.length; i++) {
      stepsBlock = stepTitlesEls[i].dataset.stepsId;
      selectedStep = stepTitlesEls[i].dataset.stepNr;
      stepTitlesEls[i].addEventListener('click', toggleStepContent);
      styliseSelectedStepTitle(stepsBlock, selectedStep);
      toggleSelectedStepContent(stepsBlock, selectedStep);
      setStepIndicatorValues(stepsBlock, selectedStep);
    }
  }
  
  return;
  
}
