import './index.css';
import inArray from '../../../../lib/in-array.js';

export default function inputRadioClassic() {
  const radioInputs = document.querySelectorAll(".fz-radio-wrapper[data-fz-radio-type='classic']");
  
  function styliseRadioChildrenByUserDeclaration (el, length) {
    const borderColour = "#5cb85c";
    const radioInnerLength = Math.round(length * 0.9);
    const borderWidth = Math.round(length  / 15);
    switch (true) {
      case inArray("fz-radio-label", el.classList):
        el.style.fontSize = Math.round(length / 1.3) + "px";
        el.style.marginLeft = Math.round(length / 5) + "px";
        el.style.marginRight = Math.round(length / 5) + "px";
        break;
      case inArray("fz-radio-inner", el.classList):
        el.style.height = radioInnerLength + "px";
        el.style.width = radioInnerLength + "px";
        el.style.margin = Math.round(length / 5) + "px";
        el.style.borderWidth = borderWidth;
        el.style.marginLeft = Math.round(length / 5) + "px";
        el.style.marginRight = Math.round(length / 5) + "px";
        break;
      default:
        return;
    }
  }
  
  for (let i = 0; i < radioInputs.length; i++) {
    let size = "18px";
    if (typeof radioInputs[i].dataset.fzRadioSize !== "undefined") {
      const userDeclaredSize = radioInputs[i].dataset.fzRadioSize.split("px");
      size = parseFloat(userDeclaredSize[0]);
      if (userDeclaredSize.length === 2 && userDeclaredSize[1] === "" && typeof size === "number") {
        // console.log(`...valid user declared size. Declaring user styles by setting to ${userDeclaredSize[0]} px...`);
        const radioInputChildren = radioInputs[i].children;
        for (let j = 0; j < radioInputChildren.length; j++) {
          styliseRadioChildrenByUserDeclaration(radioInputChildren[j], size);
        }
      }
    }
  }
  return;
}
