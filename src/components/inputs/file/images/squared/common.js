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
  // console.log(previewImgGrpEl.querySelector("img").src.trim());
  
  const slotEl = previewImgGrpEl.parentNode;
  const uploaderEl = slotEl.parentNode.parentNode;
  
  const existingFilesInitialiser = uploaderEl.dataset.fzInitExistingFiles;
  let fzPreviousExistingImgSrc, fzPreviousExistingImgId = previewImgGrpEl.querySelector("img").dataset.fzExistingImageId;
  
  slotEl.dataset.fzIsEmptyFileSlot = true;
  
  if (typeof existingFilesInitialiser !== 'undefined' && typeof window[existingFilesInitialiser] === 'function' && typeof fzPreviousExistingImgId !== "undefined") {
    fzPreviousExistingImgSrc = previewImgGrpEl.querySelector("img").src.trim()
    // console.log(`Saving data-fz-previous-existing-img-src: ${fzPreviousExistingImgSrc}`);
    previewImgGrpEl.innerHTML = (
      '<div class="fz-upload-slot__preview-wrapper">'+
        `<img src="#" data-fz-previous-existing-img-id="${fzPreviousExistingImgId}" data-fz-previous-existing-img-src="${fzPreviousExistingImgSrc}" alt="Image Preview" />`+
      '</div>'+
      '<button class="fz-upload-slot__rm-img">'+
        '<div class="fz-upload-slot__rm-img__icon"></div>'+
      '</button>'
    );
  } else {
    previewImgGrpEl.innerHTML = (
      '<div class="fz-upload-slot__preview-wrapper">'+
        `<img src="#" alt="Image Preview" />`+
      '</div>'+
      '<button class="fz-upload-slot__rm-img">'+
        '<div class="fz-upload-slot__rm-img__icon"></div>'+
      '</button>'
    );
  }
  
  // console.log("If applicable, dynamically removing extra image slot...");
  const inputEl = slotEl.querySelector('input[type="file"]');
  
  // console.log("Clearing current input...");
  // console.log(inputEl.value);
  inputEl.value = "";
  
  if (typeof uploaderEl.dataset.fzMaxUploadSlots !== 'undefined') {
    // console.log(`Max upload slots defined by user is ${uploaderEl.dataset.fzMaxUploadSlots}`);
    removeImageUploadSlot(uploaderEl, slotEl);
    uploaderEl.addEventListener('change', detectChangesOfUploadedImages);
  }
}

function detectChangesOfUploadedImages (evt) {
  const uploadSlotEl = evt.target.parentNode;
  const uploaderEl = uploadSlotEl.parentNode.parentNode;
  const previewGroupEl = uploadSlotEl.getElementsByClassName('fz-upload-slot__preview-grp')[0];
  const previewWrapperEl = uploadSlotEl.querySelector('.fz-upload-slot__preview-wrapper');
  const previewImageEl = uploadSlotEl.querySelector('.fz-upload-slot__preview-wrapper img');
  const reader = new FileReader();
  reader.onload = (whenLoaded) => {
    const loadedReader = whenLoaded.target;
    previewGroupEl.style.display = "block";
    previewImageEl.src = loadedReader.result;
    // console.log("In order to set a unidirectional scroll, we scale down the smaller side to fit the appropriate wrapper dimension, which is...");
    
    if (!fileSizeIsWithinLimit(uploaderEl, evt.target.files[0])) {
      // console.warn("...this file exceeded declared file size limit.");
      previewGroupEl.style.display = "none";
      // console.log("Removing backing colour to the wrapper used to block placeholder icon and copy if image is rejected...")
      previewWrapperEl.style.removeProperty("backgroundColor");
      uploadSlotEl.dataset.fzFileSizeExceededFileSizeLimit = true;
      removeImageUploadSlot(uploaderEl, uploadSlotEl);
      return;
    }
    
    if (!totalSizeOfFilesIsWithinLimit(uploaderEl)) {
      // console.warn("...total size of files exceeded declared total size limit.");
      previewGroupEl.style.display = "none";
      // console.log("Removing backing colour to the wrapper used to block placeholder icon and copy if image is rejected...")
      previewWrapperEl.style.removeProperty("backgroundColor");
      uploadSlotEl.dataset.fzFileSizeExceedededTotalSizeLimit = true;
      removeImageUploadSlot(uploaderEl, uploadSlotEl);
      return;
    }
    
    const previewImage = new Image();
    previewImage.src = loadedReader.result;
    
    previewImage.onload = (whenLoaded) => {
      
      switch (true) {
        case previewImage.width > previewImage.height:
          // previewImageEl.style.width = "";
          previewImageEl.style.removeProperty("width");
          previewImageEl.style.height = "100%";
          break;
        case previewImage.width < previewImage.height:
          // previewImageEl.style.height = "";
          previewImageEl.style.removeProperty("height");
          previewImageEl.style.width = "100%";
          break;
        default:
          previewImageEl.style.removeProperty("width");
          previewImageEl.style.height = "100%";
      }
      
      // console.log("Adding backing colour to the wrapper to block placeholder icon and copy if the image has a transparent background...")
      previewWrapperEl.style.backgroundColor = "rgba(250,250,250,1)";
      uploadSlotEl.removeAttribute("data-fz-is-empty-file-slot");
    }
    
  }
  if (evt.target === null || evt.target.files === null) return;
  
  if (evt.target.files.length > 2 && evt.target.files[1] !== null) {
    // console.log("... preventing multiple uploads for this image slot. All images attempted to be uploaded are cleared from this image slot.");
    evt.target.value = "";
    return;
  }
  
  reader.readAsDataURL(evt.target.files[0]);
  
  const removeUploadedImageBtns = previewGroupEl.getElementsByClassName('fz-upload-slot__rm-img');
  
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
  const cb = uploaderEl.dataset.fzFileSizeLimitCb; // User-defined callback function
  if (typeof uploaderEl.dataset.fzFileSizeLimit !== "undefined" && parseFloat(uploaderEl.dataset.fzFileSizeLimit) > 0) {
    // console.log("...max file size was declared.");
    const maxFileSize = Math.ceil(parseFloat(uploaderEl.dataset.fzFileSizeLimit) * bytesInAMegabyte);
    if (typeof cb !== 'undefined' && typeof window[cb] === 'function') {
      // console.log("...Invoking user-defined cb function declared on the window scope if available.");
      window[cb]({
        el: uploaderEl,
        size: {
          file: file.size / bytesInAMegabyte,
          max: maxFileSize / bytesInAMegabyte,
          exceeded: file.size > maxFileSize
        }
      });
    } else {
      if (file.size > maxFileSize) {
        console.warn(`The size of this file (${file.size / bytesInAMegabyte} MB) exceeded declared size limit per file (${maxFileSize / bytesInAMegabyte} MB). As such, this file (${file.name}) was prevented from being selected for upload.`);
      }
    }
    return file.size < maxFileSize;
  }
  return true;
}

function totalSizeOfFilesIsWithinLimit (uploaderEl) {
  const bytesInAMegabyte = Math.pow(10,6); // 1 MB = 1000000 bytes
  const cb = uploaderEl.dataset.fzTotalSizeCb; // User-defined callback function for total file size
  if (typeof uploaderEl.dataset.fzTotalSizeLimit !== "undefined" && parseFloat(uploaderEl.dataset.fzTotalSizeLimit) > 0) {
    // console.log("...max total size of files allowed to be uploaded was declared.");
    const maxTotalSize = Math.ceil(parseFloat(uploaderEl.dataset.fzTotalSizeLimit) * bytesInAMegabyte);
    const totalSize = calculateTotalSizeOfFiles(uploaderEl);
    if (typeof cb !== 'undefined' && typeof window[cb] === 'function') {
      // console.log("...Invoking user-defined cb function if available.");
      window[cb]({
        el: uploaderEl,
        size: {
          total: totalSize / bytesInAMegabyte,
          max: maxTotalSize / bytesInAMegabyte,
          exceeded: totalSize > maxTotalSize
        }
      });
    } else {
      if (totalSize > maxTotalSize) {
        console.warn(`The total size of all files (${totalSize / bytesInAMegabyte} MB) exceeded declared total size limit of all files (${maxTotalSize / bytesInAMegabyte} MB). As such, the latest file was prevented from being selected for upload.`);
      }
    }
    return totalSize < maxTotalSize;
  }
  return true;
}

function detectRemovalOfExistingImage (evt) {
  let removeImgBtnEl, previewImgGrpEl;
  if (evt.target.classList.contains('fz-upload-slot__rm-img__icon')) {
    // console.log("The actual icon is clicked for Safari and Chrome...");
    removeImgBtnEl = evt.target.parentNode;
    previewImgGrpEl = evt.target.parentNode.parentNode;
  } else {
    // console.log("The parent btn element is clicked for Firefox.");
    removeImgBtnEl = evt.target;
    previewImgGrpEl = evt.target.parentNode;
  }
  const slotEl = previewImgGrpEl.parentNode;
  const uploaderEl = slotEl.parentNode.parentNode;
  
  const removeExistingFileCb = uploaderEl.dataset.fzRmExistingFileCb;
  if (typeof removeExistingFileCb !== 'undefined' && typeof window[removeExistingFileCb] === 'function') {
    window[removeExistingFileCb]({
      el: uploaderEl,
      slotEl: slotEl,
    });
  }
  detectRemovalOfUploadedImage(evt);
}

function initialiseExistingImage (uploadSlotEl, datum) {
  const uploaderEl = uploadSlotEl.parentNode.parentNode;
  const previewGroupEl = uploadSlotEl.getElementsByClassName('fz-upload-slot__preview-grp')[0];
  const previewWrapperEl = uploadSlotEl.querySelector('.fz-upload-slot__preview-wrapper');
  const previewImageEl = uploadSlotEl.querySelector('.fz-upload-slot__preview-wrapper img');
  previewGroupEl.style.display = "block";
  previewImageEl.src = datum.attributes.src;
  if (typeof datum.id !== 'undefined') {
    previewImageEl.dataset.fzExistingImageId = datum.id;
  }
  if (typeof datum.attributes.caption !== 'undefined') {
    previewImageEl.alt = datum.attributes.caption;
  }
  // console.log("In order to set a unidirectional scroll, we scale down the smaller side to fit the appropriate wrapper dimension, which is...");
  
  const previewImage = new Image();
  previewImage.src = datum.attributes.src;
  
  previewImage.onload = (whenLoaded) => {
    switch (true) {
      case previewImage.width > previewImage.height:
        // previewImageEl.style.width = "";
        previewImageEl.style.removeProperty("width");
        previewImageEl.style.height = "100%";
        break;
      case previewImage.width < previewImage.height:
        // previewImageEl.style.height = "";
        previewImageEl.style.removeProperty("height");
        previewImageEl.style.width = "100%";
        break;
      default:
        // previewImageEl.style.height = previewImageEl.style.width = "";
        previewImageEl.style.removeProperty("width");
        previewImageEl.style.height = "100%";
    }
    // console.log("Adding backing colour to the wrapper to block placeholder icon and copy if the image has a transparent background...")
    previewWrapperEl.style.backgroundColor = "rgba(250,250,250,1)";
    uploadSlotEl.removeAttribute("data-fz-is-empty-file-slot");
  }
  
  const removeUploadedImageBtns = previewGroupEl.getElementsByClassName('fz-upload-slot__rm-img');
  
  for (let i = 0; i < removeUploadedImageBtns.length; i++) {
    removeUploadedImageBtns[i].addEventListener('click', detectRemovalOfExistingImage);
  }
  
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
  uploadSlotSnippet.dataset.fzIsEmptyFileSlot = true;
  return uploadSlotSnippet;
}

function initialiseImageUploadSlots (uploaderEl) {
  const targetEl = uploaderEl.getElementsByClassName('fz-upload-slots')[0];
  const existingImageUploadSlotEls = targetEl.getElementsByClassName('fz-upload-slot');
  const uploadSlotSnippet = getUploadSlotSnippet(uploaderEl);
  let existingSlotSnippet = getUploadSlotSnippet(uploaderEl);
  targetEl.innerHTML = "";
  if (uploadSlotSnippet === '') return;
  const existingFilesInitialiser = uploaderEl.dataset.fzInitExistingFiles;
  if (typeof existingFilesInitialiser !== 'undefined' && typeof window[existingFilesInitialiser] === 'function') {
    const existingImages = window[existingFilesInitialiser]({
      el: uploaderEl
    });
    let uploadSlotEl;
    for (let i = 0; i < existingImages.length; i++) {
      existingSlotSnippet.removeAttribute("data-fz-is-empty-file-slot");
      targetEl.appendChild(existingSlotSnippet);
      uploadSlotEl = targetEl.children[targetEl.children.length-1];
      initialiseExistingImage(uploadSlotEl, existingImages[i]);
      existingSlotSnippet = getUploadSlotSnippet(uploaderEl);
    }
  }
  const maxUploadSlots = parseInt(uploaderEl.dataset.fzMaxUploadSlots);
  if (existingImageUploadSlotEls.length < maxUploadSlots) {
    targetEl.appendChild(uploadSlotSnippet);
  }
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
  let previewImageGroup, numberOfExistingImages = 0;
  let fileInputValue, fzPreviousExistingImgSrc, existingImgSrc, fzPreviousExistingImgId, existingImageIsBeingRemoved;
  const existingFilesInitialiser = uploaderEl.dataset.fzInitExistingFiles;
  for (let i = 0; i < existingImageUploadSlotEls.length; i++) {
    previewImageGroup = existingImageUploadSlotEls[i].getElementsByClassName('fz-upload-slot__preview-grp')[0];
    fileInputValue = previewImageGroup.parentNode.querySelector(`input[type="file"]`).value;
    if (typeof existingFilesInitialiser !== 'undefined' && typeof window[existingFilesInitialiser] === 'function') {
      fzPreviousExistingImgSrc = previewImageGroup.querySelector("img").dataset.fzPreviousExistingImgSrc;
      existingImgSrc = previewImageGroup.querySelector("img").src;
      fzPreviousExistingImgId = previewImageGroup.querySelector("img").dataset.fzPreviousExistingImgId;
      // if (typeof fzPreviousExistingImgSrc !== "undefined") console.log(`Current fzPreviousExistingImgSrc: ${fzPreviousExistingImgSrc}`);
      // if (typeof existingImgSrc !== "undefined") console.log(`Current existingImgSrc: ${existingImgSrc}`);
      // if (typeof fzPreviousExistingImgId !== "undefined") console.log(`Current fzPreviousExistingImgId: ${fzPreviousExistingImgId}`);
      existingImageIsBeingRemoved = (typeof fzPreviousExistingImgSrc !== "undefined" && typeof fzPreviousExistingImgId !== "undefined" && existingImgSrc !== fzPreviousExistingImgSrc);
      // console.log(`Not being removed?: ${existingImageIsBeingRemoved}`);
      if (fileInputValue !== "" || (fileInputValue === "" && !existingImageIsBeingRemoved)) {
        // console.log("Adding count to new image or server/API-obtained existing images that are not deleted...");
        previewImageGroup.querySelector("img").removeAttribute("data-fz-previous-existing-img-src");
        previewImageGroup.querySelector("img").removeAttribute("data-fz-previous-existing-img-id");
        numberOfExistingImages++;
      }
    } else {
      if (fileInputValue !== "") numberOfExistingImages++;
    }
  }
  const maxUploadSlots = parseInt(uploaderEl.dataset.fzMaxUploadSlots);
  if (isNaN(maxUploadSlots) || maxUploadSlots === 0) return;
  // console.info(`Existing images: ${numberOfExistingImages}. Max upload slots: ${maxUploadSlots}.`);
  
  let emptyFileSlotCount = -1; // -1 as it is assumed the removal already took place.
  // console.log("Auditing extra and ensuring there is only one upload slot...");
  for (let i = 0; i < existingImageUploadSlotEls.length; i++) {
    if (typeof existingImageUploadSlotEls[i].dataset.fzIsEmptyFileSlot !== "undefined") {
      // console.log(`Empty file slot: ${existingImageUploadSlotEls[i].dataset.fzIsEmptyFileSlot}`);
      emptyFileSlotCount++;
    }
  }
  // console.log(`Empty file slot count: ${emptyFileSlotCount}`);
  if (emptyFileSlotCount === 0) {
    // console.log("...Adding empty file slot.");
    if (numberOfExistingImages <= maxUploadSlots) {
      // console.info(`Existing images: ${numberOfExistingImages}. Adding a new empty slot since not already maxed out (${maxUploadSlots}).`);
      const emptySlotEl = slotElMarkedForRemoval.cloneNode(true); // assuming preview image of source slotElMarkedForRemoval has aleady been cleared
      emptySlotEl.removeAttribute("data-fz-is-empty-file-slot");
      emptySlotEl.dataset.fzIsEmptyFileSlot = true;
      const emptySlotElInputs = emptySlotEl.getElementsByTagName("input");
      for (let i = 0; i < emptySlotElInputs.length; i++) {
        emptySlotElInputs[i].value = ""; // clearing out all inputs within image slot (image + captions (if any))
      }
      targetEl.appendChild(emptySlotEl);
    }
  }
  
  // console.log(slotElMarkedForRemoval);
  slotElMarkedForRemoval.remove();
}

export {
  detectRemovalOfUploadedImage,
  detectRemovalOfExistingImage,
  detectChangesOfUploadedImages,
  getUploadSlotSnippet,
  initialiseExistingImage,
  initialiseImageUploadSlots,
  addImageUploadSlot,
  removeImageUploadSlot,
  totalSizeOfFilesIsWithinLimit,
  fileSizeIsWithinLimit
}
