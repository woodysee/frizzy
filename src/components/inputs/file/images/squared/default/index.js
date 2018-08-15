import {
  detectRemovalOfUploadedImage,
  detectChangesOfUploadedImages,
  getUploadSlotSnippet,
  initialiseImageUploadSlots,
  addImageUploadSlot,
  removeImageUploadSlot
} from '../common.js';

export default function defaultImagesFileInput () {
  
  const defaultImageUploadSlotsEls = document.querySelectorAll('.fz-uploader[data-fz-uploader-file-type="image"][data-fz-uploader-variant="squared__default"]');
  
  // Initialising image uploaders in markup
  for (let i = 0; i < defaultImageUploadSlotsEls.length; i++) {
    defaultImageUploadSlotsEls[i].addEventListener('change', detectChangesOfUploadedImages);
    if (typeof defaultImageUploadSlotsEls[i].dataset.fzMaxUploadSlots !== 'undefined') {
      initialiseImageUploadSlots(defaultImageUploadSlotsEls[i]);
    }
  }
  
}
