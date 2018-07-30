import './index.css';
import {
  detectRemovalOfUploadedImage,
  detectChangesOfUploadedImages,
  getUploadSlotSnippet,
  initialiseImageUploadSlots,
  addImageUploadSlot,
  removeImageUploadSlot
} from '../common.js';

export default function captionedImagesFileInput () {
  const captionedImageUploadSlotsEls = document.querySelectorAll('.fz-uploader[data-fz-uploader-file-type="image"][data-fz-uploader-variant="squared__captioned"]');
  // Initialising image uploaders in markup
  for (let i = 0; i < captionedImageUploadSlotsEls.length; i++) {
    captionedImageUploadSlotsEls[i].addEventListener('change', detectChangesOfUploadedImages);
    if (typeof captionedImageUploadSlotsEls[i].dataset.fzMaxUploadSlots !== 'undefined') {
      initialiseImageUploadSlots(captionedImageUploadSlotsEls[i]);
    }
  }
}
