import './index.css';
import inArray from '../../../../lib/in-array.js';

export default function tickedRadioInput() {
  const radioInputs = document.querySelectorAll(".fz-radio-wrapper[data-fz-radio-type='ticked']");
  
  function styliseRadioChildrenByUserDeclaration (el, length) {
    const radioInnerLength = Math.round(length * 0.9);
    const borderWidth = Math.round(length  / 10);
    switch (true) {
      case inArray("fz-radio-label", el.classList):
        console.log(el.style.fontSize);
        el.style.fontSize = Math.round(length / 2) + "px";
        el.style.marginLeft = Math.round(length / 5) + "px";
        el.style.marginRight = Math.round(length / 5) + "px";
        break;
      case inArray("fz-radio-inner", el.classList):
        el.style.height = radioInnerLength + "px";
        el.style.width = radioInnerLength + "px";
        el.style.borderWidth = borderWidth + "px";
        el.style.margin = Math.round(length / 5) + "px";
        break;
      default:
        return;
    }
  }
  
  for (let i = 0; i < radioInputs.length; i++) {
    let size = "18px";
    console.log(radioInputs[i]);
    if (typeof radioInputs[i].dataset.fzRadioSize !== "undefined") {
      const userDeclaredSize = radioInputs[i].dataset.fzRadioSize.split("px");
      size = parseFloat(userDeclaredSize[0]);
      // console.log(userDeclaredSize);
      // console.log(userDeclaredSize.length === 2);
      // console.log(userDeclaredSize[1] === "");
      // console.log(typeof parseFloat(userDeclaredSize[0]) === "number");
      if (userDeclaredSize.length === 2 && userDeclaredSize[1] === "" && typeof size === "number") {
        console.log(`...valid user declared size. Declaring user styles by setting to ${userDeclaredSize[0]} px...`);
        const radioInputChildren = radioInputs[i].children;
        for (let j = 0; j < radioInputChildren.length; j++) {
          styliseRadioChildrenByUserDeclaration(radioInputChildren[j], size);
        }
        console.log(radioInputChildren);
      }
    }
  }
  return;
}
