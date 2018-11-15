import {
  getUploadSlotSnippet,
  initialiseImageUploadSlots,
  addImageUploadSlot,
  fileSizeIsWithinLimit,
  totalSizeOfFilesIsWithinLimit,
  removeImageUploadSlot
} from '../common.js';

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
  const ppreviewGroupEl = uploadSlotEl.getElementsByClassName('fz-upload-slot__preview-grp')[0];
  const previewWrapperEl = uploadSlotEl.querySelector('.fz-upload-slot__preview-wrapper');
  const previewImageEl = uploadSlotEl.querySelector('.fz-upload-slot__preview-wrapper img');
  const reader = new FileReader();
  reader.onload = (whenLoaded) => {
    const loadedReader = whenLoaded.target;
    ppreviewGroupEl.style.display = "block";
    previewImageEl.src = loadedReader.result;
    // console.log("In order to set a unidirectional scroll, we scale down the smaller side to fit the appropriate wrapper dimension, which is...");
    
    if (!fileSizeIsWithinLimit(uploaderEl, evt.target.files[0])) {
      // console.warn("...this file exceeded declared file size limit.");
      ppreviewGroupEl.style.display = "none";
      // console.log("Removing backing colour to the wrapper used to block placeholder icon and copy if image is rejected...")
      ppreviewGroupEl.style.removeProperty("backgroundColor");
      removeImageUploadSlot(uploaderEl, uploadSlotEl);
      return;
    }
    
    if (!totalSizeOfFilesIsWithinLimit(uploaderEl)) {
      // console.warn("...total size of files exceeded declared total size limit.");
      ppreviewGroupEl.style.display = "none";
      // console.log("Removing backing colour to the wrapper used to block placeholder icon and copy if image is rejected...")
      ppreviewGroupEl.style.removeProperty("backgroundColor");
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
      previewWrapperEl.style.backgroundColor = "rgba(255,255,255,1)";
      
    }
    
    let previewImageSize = 200;
    if (uploaderEl.dataset.fzPreviewImgSize && typeof parseFloat(uploaderEl.dataset.fzPreviewImgSize) === 'number' && parseFloat(uploaderEl.dataset.fzPreviewImgSize) > 0) {
      previewImageSize = parseFloat(uploaderEl.dataset.fzPreviewImgSize);
    }
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
  
  const removeUploadedImageBtns = ppreviewGroupEl.getElementsByClassName('fz-upload-slot__rm-img');
  
  for (let i = 0; i < removeUploadedImageBtns.length; i++) {
    removeUploadedImageBtns[i].addEventListener('click', detectRemovalOfUploadedImage);
  }
  // console.log("If applicable, dynamically adding new image slot...");
  if (typeof uploaderEl.dataset.fzMaxUploadSlots !== 'undefined') {
    addImageUploadSlot(uploaderEl);
    uploaderEl.addEventListener('change', detectChangesOfUploadedImages);
  }
  
}

export default class CommentBoxWithSquaredImageInput {
  constructor() {
    this.getUploadSlotSnippet = getUploadSlotSnippet;
    this.initialiseImageUploadSlots = initialiseImageUploadSlots;
    this.addImageUploadSlot = addImageUploadSlot;
    this.fileSizeIsWithinLimit = fileSizeIsWithinLimit;
    this.totalSizeOfFilesIsWithinLimit = totalSizeOfFilesIsWithinLimit;
    this.removeImageUploadSlot = removeImageUploadSlot;
    // console.log('Constructing custom functions...');
    this.detectRemovalOfUploadedImage = detectRemovalOfUploadedImage;
    this.detectChangesOfUploadedImages = detectChangesOfUploadedImages;
  }
  init(props) {
    let selectors = [];
    if (props && props.els && props.els.length > 0) {
      selectors = props.els;
    } else {
      selectors = ['.fz-uploader[data-fz-uploader-file-type="image"][data-fz-uploader-variant="squared__comment"]'];
    }
    let commentBoxWithSquaredImageInputEls;
    selectors.forEach((selector) => {
      commentBoxWithSquaredImageInputEls = document.querySelectorAll(selectors);
      if (commentBoxWithSquaredImageInputEls.length > 0) {
        commentBoxWithSquaredImageInputEls.forEach((slotsEl) => {
          slotsEl.addEventListener('change', this.detectChangesOfUploadedImages);
          if (slotsEl.dataset.fzMaxUploadSlots) {
            this.initialiseImageUploadSlots(slotsEl);
          }
        });
      }
    });
  }
  
}
