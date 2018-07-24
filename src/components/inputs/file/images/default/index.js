import '../index.css';

export default function defaultImagesFileInput () {
  
  const demoImageUploadSlots = document.querySelectorAll('.fz-uploader[data-fz-uploader="image"]');
  
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
    previewImgGrpEl.style.display = "none"; removeImgBtnEl.removeEventListener('click', detectRemovalOfUploadedImage);
    previewImgGrpEl.innerHTML = (
      '<div class="fz-upload-slot__preview-wrapper">'+
        '<img src="#" alt="Image Preview" />'+
      '</div>'+
      '<button class="fz-upload-slot__rm-img">'+
        '<div class="fz-upload-slot__rm-img__icon"></div>'+
      '</button>'
    );
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
    };
    reader.readAsDataURL(evt.target.files[0]);
    
    const errorMessageEl = document.querySelector('.fz-uploader__errors');
    
    const removeUploadedImageBtns = previewWrapperEl.getElementsByClassName('fz-upload-slot__rm-img');
    
    for (let i = 0; i < removeUploadedImageBtns.length; i++) {
      removeUploadedImageBtns[i].addEventListener('click', detectRemovalOfUploadedImage);
    }
    
  }
  
  for (let i = 0; i < demoImageUploadSlots.length; i++) {
    demoImageUploadSlots[i].addEventListener('change', detectChangesOfUploadedImages);
  }
  
}
