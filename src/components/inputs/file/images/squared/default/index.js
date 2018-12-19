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
  init(props) {
    let selectors = [];
    if (props && props.els && props.els.length > 0) {
      selectors = props.els;
    } else {
      selectors = ['.fz-uploader[data-fz-uploader-file-type="image"][data-fz-uploader-variant="squared__default"]'];
    }
    let defaultImageUploadSlotsEls;
    selectors.forEach((selector) => {
      defaultImageUploadSlotsEls = document.querySelectorAll(selectors);
      if (defaultImageUploadSlotsEls.length > 0) {
        defaultImageUploadSlotsEls.forEach((slotsEl) => {
          slotsEl.addEventListener('change', this.detectChangesOfUploadedImages);
          if (slotsEl.dataset.fzMaxUploadSlots) {
            this.initialiseImageUploadSlots(slotsEl);
          }
        });
      }
    });
  }
}
