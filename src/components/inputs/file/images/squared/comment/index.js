import './index.css';
import {
  getUploadSlotSnippet,
  initialiseImageUploadSlots,
  addImageUploadSlot,
  fileSizeIsWithinLimit,
  totalSizeOfFilesIsWithinLimit,
  removeImageUploadSlot
} from '../common.js';

export default function commentBoxWithSquaredImageInput () {
  const commentBoxWithSquaredImageInputEls = document.querySelectorAll('.fz-uploader[data-fz-uploader-file-type="image"][data-fz-uploader-variant="squared__comment"]');
  
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
    const slotEl = previewImgGrpEl.parentNode;
    const uploaderEl = slotEl.parentNode.parentNode;
    const inputEl = slotEl.querySelector('input[type="file"]');
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
    
    // console.log("Clearing input...");
    inputEl.value = "";
    
    // console.log("Resetting styles of the comment submit button...");
    const commentElGroup = slotEl.parentNode.parentNode.parentNode;
    const commentSubmitBtnEls = commentElGroup.querySelectorAll(".fz-comment__submit");
    let commentSubmitBtnEl;
    if (commentSubmitBtnEls.length > 0) {
      commentSubmitBtnEl = commentSubmitBtnEls[0];
      if (commentSubmitBtnEl.style.marginTop !== "") {
        // console.log("Removing inline margin-top during preview...");
        // commentSubmitBtnEl.style.marginTop = "";
      }
      if (typeof commentSubmitBtnEl.dataset.fzCommentImgInnerHtml !== "undefined") {
        commentSubmitBtnEl.innerHTML = commentSubmitBtnEl.dataset.fzCommentTxtInnerHtml;
      }
    }
    
    // console.log("Resetting styles to image icon to last set values...");
    if (slotEl.style.height !== "") slotEl.style.removeProperty('height');
    if (slotEl.style.width !== "") slotEl.style.removeProperty('width');
    if (slotEl.style.marginLeft !== "") slotEl.style.removeProperty('marginLeft');
    if (slotEl.style.marginRight !== "") slotEl.style.removeProperty('marginRight');
    
    // console.log("If applicable, dynamically removing extra image slot...");
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
      
      // console.log("Expanding styles of preview image size...");
      let previewImageSize = 200;
      uploadSlotEl.style.height = uploadSlotEl.style.width = `${previewImageSize}px`;
      uploadSlotEl.style.marginRight = uploadSlotEl.style.marginLeft = `${previewImageSize * 0.05}px`;
      
      // console.log("Setting styles of the comment submit button...");
      const commentElGroup = uploadSlotEl.parentNode.parentNode.parentNode;
      let commentSubmitBtnEl;
      const commentSubmitBtnEls = commentElGroup.querySelectorAll(".fz-comment__submit");
      if (commentSubmitBtnEls.length > 0) {
        commentSubmitBtnEl = commentSubmitBtnEls[0];
        // commentSubmitBtnEl.style.marginTop = `${previewImageSize * 0.05 + 6}px`;
        if (typeof commentSubmitBtnEl.dataset.fzCommentImgInnerHtml !== "undefined") {
          commentSubmitBtnEl.innerHTML = commentSubmitBtnEl.dataset.fzCommentImgInnerHtml;
        }
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
  
  // Initialising image uploaders in markup
  for (let i = 0; i < commentBoxWithSquaredImageInputEls.length; i++) {
    commentBoxWithSquaredImageInputEls[i].addEventListener('change', detectChangesOfUploadedImages);
    if (typeof commentBoxWithSquaredImageInputEls[i].dataset.fzMaxUploadSlots !== 'undefined') {
      initialiseImageUploadSlots(commentBoxWithSquaredImageInputEls[i]);
    }
  }
}
