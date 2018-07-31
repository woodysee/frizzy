function detectRemovalOfUploadedImage (evt) {
  let previewImgGrpEl, removeImgBtnEl;
  if (evt.target.classList.contains('fz-upload-slot__rm-img__icon')) {
    // console.log("The actual icon is clicked for Safari and Chrome...");
    removeImgBtnEl = evt.target.parentNode;
    previewImgGrpEl = evt.target.parentNode.parentNode;
  } else {
    // console.log("The parent btn element is clicked for Firefox.");
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
  
  // console.log("If applicable, dynamically removing extra image slot...");
  const slotEl = previewImgGrpEl.parentNode;
  const uploaderEl = slotEl.parentNode.parentNode;
  if (typeof uploaderEl.dataset.fzMaxUploadSlots !== 'undefined') {
    removeImageUploadSlot(uploaderEl, slotEl);
    uploaderEl.addEventListener('change', detectChangesOfUploadedImages);
  }
}

function detectChangesOfUploadedImages (evt) {
  const uploadSlotEl = evt.target.parentNode;
  const uploaderEl = uploadSlotEl.parentNode.parentNode;
  const previewWrapperEl = uploadSlotEl.getElementsByClassName('fz-upload-slot__preview-grp')[0];
  const previewImageEl = uploadSlotEl.querySelector('.fz-upload-slot__preview-wrapper img');
  const reader = new FileReader();
  reader.onload = (whenLoaded) => {
    const loadedReader = whenLoaded.target;
    previewWrapperEl.style.display = "block";
    previewImageEl.src = loadedReader.result;
    // console.log("In order to set a unidirectional scroll, we scale down the smaller side to fit the appropriate wrapper dimension, which is...");
    if (previewImageEl.style.width >= previewImageEl.style.height) {
      // console.log("...the height.");
      previewImageEl.style.height = "100%";
    } else {
      // console.log("...the width.");
      previewImageEl.style.width = "100%";
    }
    
    if (!fileSizeIsWithinLimit(uploaderEl, evt.target.files[0])) {
      // console.warn("...this file exceeded declared file size limit.");
      previewWrapperEl.style.display = "none";
      removeImageUploadSlot(uploaderEl, uploadSlotEl);
      return;
    }
    
    if (!totalSizeOfFilesIsWithinLimit(uploaderEl)) {
      // console.warn("...total size of files exceeded declared total size limit.");
      previewWrapperEl.style.display = "none";
      removeImageUploadSlot(uploaderEl, uploadSlotEl);
      return;
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
  // console.log("If applicable, dynamically adding new image slot...");
  if (typeof uploaderEl.dataset.fzMaxUploadSlots !== 'undefined') {
    addImageUploadSlot(uploaderEl);
    uploaderEl.addEventListener('change', detectChangesOfUploadedImages);
  }
  
}

function calculateTotalSizeOfFiles (uploaderEl) {
  const imageFileInputEls = uploaderEl.querySelectorAll('.fz-upload-slot input[type="file"]');
  let totalSize = 0;
  for (let i = 0; i < imageFileInputEls.length; i++) {
    if (imageFileInputEls[i].files.length > 0) {
      totalSize += imageFileInputEls[i].files[0].size
    }
  }
  return totalSize; // in bytes
}

function fileSizeIsWithinLimit (uploaderEl, file) {
  const bytesInAMegabyte = Math.pow(10,6); // 1 MB = 1000000 bytes
  if (typeof uploaderEl.dataset.fzFileSizeLimit !== "undefined" && parseFloat(uploaderEl.dataset.fzFileSizeLimit) > 0) {
    // console.log("...max file size was declared.");
    const maxFileSize = Math.ceil(parseFloat(uploaderEl.dataset.fzFileSizeLimit) * bytesInAMegabyte);
    if (file.size >= maxFileSize) {
      console.warn(`The size of this file (${file.size / bytesInAMegabyte} MB) exceeded declared size limit per file (${maxFileSize / bytesInAMegabyte} MB). As such, this file (${file.name}) was prevented from being selected for upload.`);
    }
    return file.size < maxFileSize;
  }
  return true;
}

function totalSizeOfFilesIsWithinLimit (uploaderEl) {
  const bytesInAMegabyte = Math.pow(10,6); // 1 MB = 1000000 bytes
  if (typeof uploaderEl.dataset.fzTotalSizeLimit !== "undefined" && parseFloat(uploaderEl.dataset.fzTotalSizeLimit) > 0) {
    // console.log("...max total size of files allowed to be uploaded was declared.");
    const maxTotalSize = Math.ceil(parseFloat(uploaderEl.dataset.fzTotalSizeLimit) * bytesInAMegabyte);
    const totalSize = calculateTotalSizeOfFiles(uploaderEl);
    if (totalSize >= maxTotalSize) {
      console.warn(`The total size of all files (${totalSize / bytesInAMegabyte} MB) exceeded declared total size limit of all files (${maxTotalSize / bytesInAMegabyte} MB). As such, the latest file was prevented from being selected for upload.`);
    }
    return totalSize < maxTotalSize;
  }
  return true;
}

function getUploadSlotSnippet (uploaderEl) {
  const targetEl = uploaderEl.getElementsByClassName('fz-upload-slots')[0];
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

function initialiseImageUploadSlots (uploaderEl) {
  const targetEl = uploaderEl.getElementsByClassName('fz-upload-slots')[0];
  const uploadSlotSnippet = getUploadSlotSnippet(uploaderEl);
  if (uploadSlotSnippet === '') return;
  targetEl.innerHTML = "";
  targetEl.appendChild(uploadSlotSnippet);
}

function addImageUploadSlot (uploaderEl) {
  const targetEl = uploaderEl.getElementsByClassName('fz-upload-slots')[0];
  const existingImageUploadSlotEls = targetEl.getElementsByClassName('fz-upload-slot');
  const uploadSlotSnippet = getUploadSlotSnippet(uploaderEl);
  const maxUploadSlots = parseInt(uploaderEl.dataset.fzMaxUploadSlots);
  if (isNaN(maxUploadSlots) || maxUploadSlots === 0) return;
  if (existingImageUploadSlotEls.length >= maxUploadSlots) return;
  if (uploadSlotSnippet === '') return;
  targetEl.appendChild(uploadSlotSnippet);
}

function removeImageUploadSlot (uploaderEl, slotElMarkedForRemoval) {
  const targetEl = uploaderEl.getElementsByClassName('fz-upload-slots')[0];  
  const existingImageUploadSlotEls = targetEl.getElementsByClassName('fz-upload-slot');
  let previewImageGroup, visibilityOfPreviewImage, numberOfExistingImages = 0;
  for (let i = 0; i < existingImageUploadSlotEls.length; i++) {
    previewImageGroup = existingImageUploadSlotEls[i].getElementsByClassName('fz-upload-slot__preview-grp')[0];
    visibilityOfPreviewImage = previewImageGroup.style.display;
    if (visibilityOfPreviewImage !== 'none') numberOfExistingImages++;
  }
  const maxUploadSlots = parseInt(uploaderEl.dataset.fzMaxUploadSlots);
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
