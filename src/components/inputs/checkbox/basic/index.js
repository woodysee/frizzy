export default function basicCheckboxInput () {
  const checkboxInputs = document.querySelectorAll(".fz-checkbox-wrapper");
  let size = "25px"; // Default
  
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
  
  for (let i = 0; i < checkboxInputs.length; i++) {
    if (typeof checkboxInputs[i].dataset.fzCheckboxSize !== "undefined") {
      const userDeclaredSize = checkboxInputs[i].dataset.fzCheckboxSize.split("px");
      size = parseFloat(userDeclaredSize[0]);
      if (userDeclaredSize.length === 2 && userDeclaredSize[1] === "" && typeof size === "number") {
        // console.log(`...valid user declared size. Declaring user styles by setting to ${userDeclaredSize[0]} px...`);
        const checkboxInputChildren = checkboxInputs[i].children;
        for (let j = 0; j < checkboxInputChildren.length; j++) {
          styliseCheckboxChildrenByUserDeclaration(checkboxInputChildren[j], size);
        }
      }
    }
  }
  return;
}
