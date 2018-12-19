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

export default class CaptionedImagesFileInput {
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
      selectors = ['.fz-uploader[data-fz-uploader-file-type="image"][data-fz-uploader-variant="squared__captioned"]'];
    }
    let captionedImageUploadSlotsEls;
    selectors.forEach((selector) => {
      captionedImageUploadSlotsEls = document.querySelectorAll(selectors);
      if (captionedImageUploadSlotsEls.length > 0) {
        captionedImageUploadSlotsEls.forEach((slotsEl) => {
          slotsEl.addEventListener('change', this.detectChangesOfUploadedImages);
          if (slotsEl.dataset.fzMaxUploadSlots) {
            this.initialiseImageUploadSlots(slotsEl);
          }
        });
      }
    });
  }
}
