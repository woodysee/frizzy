import {
  detectRemovalOfUploadedImage,
  detectRemovalOfExistingImage,
  detectChangesOfUploadedImages,
  getUploadSlotSnippet,
  initialiseExistingImage,
  initialiseImageUploadSlots,
  addImageUploadSlot,
  removeImageUploadSlot
} from '../common.js';

export default class DefaultImagesFileInput {
  constructor() {
    this.detectRemovalOfUploadedImage = detectRemovalOfUploadedImage;
    this.detectRemovalOfExistingImage = detectRemovalOfExistingImage;
    this.detectChangesOfUploadedImages = detectChangesOfUploadedImages;
    this.getUploadSlotSnippet = getUploadSlotSnippet;
    this.initialiseExistingImage = initialiseExistingImage;
    this.initialiseImageUploadSlots = initialiseImageUploadSlots;
    this.addImageUploadSlot = addImageUploadSlot;
    this.removeImageUploadSlot = removeImageUploadSlot;
  }
  init() {
    const defaultImageUploadSlotsEls = document.querySelectorAll('.fz-uploader[data-fz-uploader-file-type="image"][data-fz-uploader-variant="squared__default"]');
    defaultImageUploadSlotsEls.forEach((slotsEl) => {
      slotsEl.addEventListener('change', this.detectChangesOfUploadedImages);
      if (slotsEl.dataset.fzMaxUploadSlots) {
        this.initialiseImageUploadSlots(slotsEl);
      }
    });
  }
  
}
