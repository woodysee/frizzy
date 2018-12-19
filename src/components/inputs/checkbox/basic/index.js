function styliseCheckboxChildrenByUserDeclaration (el, length) {
  const checkboxInnerLength = Math.round(length * 0.9);
  const borderWidth = Math.round(length  / 10);
  const checkboxMarginTop = Math.round(length / 2);
  const checkboxInnerMargin = Math.round(length / 5);
  switch (true) {
    case el.classList.contains("fz-checkbox-label"):
      el.style.fontSize = length + "px";
      el.style.marginLeft = el.style.marginRight = checkboxInnerMargin + "px";
      break;
    case el.classList.contains("fz-checkbox-tick"):
      el.style.height = el.style.width = length + "px";
      el.style.margin = checkboxMarginTop + "px" + " 0";
      el.style.marginLeft = el.style.marginRight = checkboxInnerMargin + "px";
      el.style.borderWidth = borderWidth + "px";
      break;
    default:
      return;
  }
}

export default class BasicCheckboxInput {
  constructor() {
    this.size = '25px';
  }
  
  init(props) {
    let checkboxInputSelectors = [];
    if (props && props.els && typeof props.els === 'object' && props.els.length > 0) {
      checkboxInputSelectors = props.els;
    } else {
      if (props && typeof props.els !== 'object') {
        console.warn('Frizzy: "els" property must be an array of appropriate checkbox input selectors. Defaulting to all input selectors: .fz-checkbox-wrapper');
      }
      checkboxInputSelectors = ['.fz-checkbox-wrapper'];
    }
    
    let checkboxInputs, checkboxInputChildren;
    
    checkboxInputSelectors.forEach((selector) => {
      checkboxInputs = document.querySelectorAll(selector);
      checkboxInputs.forEach((checkboxInput) => {
        if (typeof checkboxInput.dataset.fzCheckboxSize !== 'undefined') {
          const userDeclaredSize = checkboxInput.dataset.fzCheckboxSize.split('px');
          const sizeInPixels = parseFloat(userDeclaredSize[0]);
          if (userDeclaredSize.length === 2 && userDeclaredSize[1] === "" && typeof sizeInPixels === 'number') {
            // console.log(`...valid user declared size. Declaring user styles by setting to ${userDeclaredSize[0]} px...`);
            checkboxInputChildren = checkboxInput.children;
            if (checkboxInputChildren.length > 0) {
              for (let i = 0; i < checkboxInputChildren.length; i++) {
                styliseCheckboxChildrenByUserDeclaration(checkboxInputChildren[i], sizeInPixels);
              }
            }
          }
        }
      });
    });
  }
  
}
