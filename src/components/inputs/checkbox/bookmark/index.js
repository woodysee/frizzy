export default function inputCheckboxBookmark() {
  const checkboxInputs = document.querySelectorAll(".fz-checkbox-wrapper[data-fz-checkbox-type='bookmark']");
  
  function styliseCheckboxByUserDeclaration (el, size) {
    el.style.height = el.style.width = size + "px";
    size + "px";
  }
  
  for (let i = 0; i < checkboxInputs.length; i++) {
    let size = "18px";
    if (typeof checkboxInputs[i].dataset.fzCheckboxSize !== "undefined") {
      const userDeclaredSize = checkboxInputs[i].dataset.fzCheckboxSize.split("px");
      size = parseFloat(userDeclaredSize[0]);
      if (userDeclaredSize.length === 2 && userDeclaredSize[1] === "" && typeof size === "number") {
        // console.log(`...valid user declared size. Declaring user styles by setting to ${userDeclaredSize[0]} px...`);
        styliseCheckboxByUserDeclaration(checkboxInputs[i], size);
      }
    }
  }
  return;
  
}
