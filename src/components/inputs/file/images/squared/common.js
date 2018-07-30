function detectRemovalOfUploadedImage (evt) {
  let previewImgGrpEl, removeImgBtnEl;
  if (evt.target.classList.contains('fz-upload-slot__rm-img__icon')) {
    // console.log("The actual icon is clicked for Safari and Chrome...");
    removeImgBtnEl = evt.target.parentNode;
    previewImgGrpEl = evt.target.parentNode.parentNode;
  } else {
    // console.log("... while the parent btn element is clicked for Firefox.");
    removeImgBtnEl = evt.target;
    previewImgGrpEl = evt.target.parentNode;
  }
  previewImgGrpEl.style.display = "none";
  removeImgBtnEl.removeEventListener('click', detectRemovalOfUploadedImage);
  previewImgGrpEl.innerHTML = (
    '<div class="fz-upload-slot__preview-wrapper">'+
      '<img src="#" alt="Image Preview" />'+
    '</div>'+
    '<button class="fz-upload-slot__rm-img">'+
      '<div class="fz-upload-slot__rm-img__icon"></div>'+
    '</button>'
  );
  const slotEl = previewImgGrpEl.parentNode;
  const slotsEl = slotEl.parentNode.parentNode;
  if (typeof slotsEl.dataset.fzMaxUploadSlots !== 'undefined') {
    removeImageUploadSlot(slotsEl, slotEl);
    slotsEl.addEventListener('change', detectChangesOfUploadedImages);
  }
}

function detectChangesOfUploadedImages (evt) {
  const previewWrapperEl = evt.target.parentNode.getElementsByClassName('fz-upload-slot__preview-grp')[0];
  const previewImageEl = evt.target.parentNode.querySelector('.fz-upload-slot__preview-wrapper img');
  const reader = new FileReader();
  reader.onload = (evt) => {
    previewWrapperEl.style.display = "block";
    previewImageEl.src = evt.target.result;
    // console.log("In order to set a unidirectional scroll, we scale down the smaller side to fit the appropriate wrapper dimension, which is...");
    if (previewImageEl.style.width >= previewImageEl.style.height) {
      // console.log("...the height.");
      previewImageEl.style.height = "100%";
    } else {
      // console.log("...the width.");
      previewImageEl.style.width = "100%";
    }
  }
  if (evt.target === null || evt.target.files === null) return;
  
  if (evt.target.files.length > 2 && evt.target.files[1] !== null) {
    // console.log("... preventing multiple uploads for this image slot. All images attempted to be uploaded are cleared from this image slot.");
    evt.target.value = "";
    return;
  }
  
  reader.readAsDataURL(evt.target.files[0]);
  
  const removeUploadedImageBtns = previewWrapperEl.getElementsByClassName('fz-upload-slot__rm-img');
  
  for (let i = 0; i < removeUploadedImageBtns.length; i++) {
    removeUploadedImageBtns[i].addEventListener('click', detectRemovalOfUploadedImage);
  }
  
  const slotsEl = evt.target.parentNode.parentNode.parentNode;
  if (typeof slotsEl.dataset.fzMaxUploadSlots !== 'undefined') {
    addImageUploadSlot(slotsEl);
    slotsEl.addEventListener('change', detectChangesOfUploadedImages);
  }
  
}

function getUploadSlotSnippet (slotsEl) {
  const targetEl = slotsEl.getElementsByClassName('fz-upload-slots')[0];
  // console.log("We are using the last .fz-upload-slot child (because it will always be empty) in the parent .fz-upload-slots element as a reference element to create upload snippets.");
  const existingImageUploadSlotEls = targetEl.getElementsByClassName('fz-upload-slot');
  if (existingImageUploadSlotEls.length === 0) return '';
  let uploadSlotSnippet = existingImageUploadSlotEls[existingImageUploadSlotEls.length-1].cloneNode(true);
  const uploadSlotSnippetInputs = uploadSlotSnippet.getElementsByTagName("input");
  for (let i = 0; i < uploadSlotSnippetInputs.length; i++) {
    uploadSlotSnippetInputs[i].value = ""; // clearing out all inputs within image slot (image + captions (if any))
  }
  return uploadSlotSnippet;
}

function initialiseImageUploadSlots (slotsEl) {
  const targetEl = slotsEl.getElementsByClassName('fz-upload-slots')[0];
  const uploadSlotSnippet = getUploadSlotSnippet(slotsEl);
  if (uploadSlotSnippet === '') return;
  targetEl.innerHTML = "";
  targetEl.appendChild(uploadSlotSnippet);
}

function addImageUploadSlot (slotsEl) {
  const targetEl = slotsEl.getElementsByClassName('fz-upload-slots')[0];
  const existingImageUploadSlotEls = targetEl.getElementsByClassName('fz-upload-slot');
  const uploadSlotSnippet = getUploadSlotSnippet(slotsEl);
  const maxUploadSlots = parseInt(slotsEl.dataset.fzMaxUploadSlots);
  if (isNaN(maxUploadSlots) || maxUploadSlots === 0) return;
  if (existingImageUploadSlotEls.length >= maxUploadSlots) return;
  if (uploadSlotSnippet === '') return;
  targetEl.appendChild(uploadSlotSnippet);
}

function removeImageUploadSlot (slotsEl, slotElMarkedForRemoval) {
  const targetEl = slotsEl.getElementsByClassName('fz-upload-slots')[0];  
  const existingImageUploadSlotEls = targetEl.getElementsByClassName('fz-upload-slot');
  let previewImageGroup, visibilityOfPreviewImage, numberOfExistingImages = 0;
  for (let i = 0; i < existingImageUploadSlotEls.length; i++) {
    previewImageGroup = existingImageUploadSlotEls[i].getElementsByClassName('fz-upload-slot__preview-grp')[0];
    visibilityOfPreviewImage = previewImageGroup.style.display;
    if (visibilityOfPreviewImage !== 'none') numberOfExistingImages++;
  }
  const maxUploadSlots = parseInt(slotsEl.dataset.fzMaxUploadSlots);
  if (isNaN(maxUploadSlots) || maxUploadSlots === 0) return;
  if (numberOfExistingImages === maxUploadSlots - 1) {
    // console.log("...adding a new empty slot since not already maxed out.");
    const emptySlotEl = slotElMarkedForRemoval.cloneNode(true); // assuming preview image of source slotElMarkedForRemoval has aleady been cleared
    const emptySlotElInputs = emptySlotEl.getElementsByTagName("input");
    for (let i = 0; i < emptySlotElInputs.length; i++) {
      emptySlotElInputs[i].value = ""; // clearing out all inputs within image slot (image + captions (if any))
    }
    targetEl.appendChild(emptySlotEl);
  }
  slotElMarkedForRemoval.remove();
}

export {
  detectRemovalOfUploadedImage,
  detectChangesOfUploadedImages,
  getUploadSlotSnippet,
  initialiseImageUploadSlots,
  addImageUploadSlot,
  removeImageUploadSlot
}
