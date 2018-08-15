(() => {
  const selectors = document.getElementsByName("binaryRadioInputs");
  const printTargetEl = document.getElementById("console--input-radio-binary");
  const wrapperEl = document.getElementById("demo-container--input-radio-binary");

  function printValueOfSelected () {
    for (let i = 0; i < selectors.length; i++) {
      if (selectors[i].checked) {
        printTargetEl.innerHTML = "&nbsp;&gt;&nbsp;" + selectors[i].value;
      }
    }
  }

  printValueOfSelected();
  
  wrapperEl.addEventListener("click", printValueOfSelected);
  
})();

(() => {
  const selectors = document.getElementsByName("multiRadioInputs");
  const printTargetEl = document.getElementById("console--input-radio-basic");
  const wrapperEl = document.getElementById("demo-container--input-radio-basic");

  function printValueOfSelected () {
    for (let i = 0; i < selectors.length; i++) {
      if (selectors[i].checked) {
        printTargetEl.innerHTML = "&nbsp;&gt;&nbsp;" + selectors[i].value;
      }
    }
  }

  printValueOfSelected();

  wrapperEl.addEventListener("click", printValueOfSelected);
})();

(() => {
  const selectors = document.getElementsByName("classicRadioInputs");
  const printTargetEl = document.getElementById("console--input-radio-classic");
  const wrapperEl = document.getElementById("demo-container--input-radio-classic");
  
  function printValueOfSelected () {
    for (let i = 0; i < selectors.length; i++) {
  		if (selectors[i].checked) {
  			printTargetEl.innerHTML = "&nbsp;&gt;&nbsp;" + selectors[i].value;
  		}
  	}
  }
  
  printValueOfSelected();
  
  wrapperEl.addEventListener("click", printValueOfSelected);
  
})();

(() => {
  const selectors = document.getElementsByName("tickedRadioInputs");
  const printTargetEl = document.getElementById("console--input-radio-ticked");
  const wrapperEl = document.getElementById("demo-container--input-radio-ticked");
  
  function printValueOfSelected () {
    for (let i = 0; i < selectors.length; i++) {
  		if (selectors[i].checked) {
  			printTargetEl.innerHTML = "&nbsp;&gt;&nbsp;" + selectors[i].value;
  		}
  	}
  }
  
  printValueOfSelected();
  
  wrapperEl.addEventListener("click", printValueOfSelected);
  
})();

function userDefinedCallbackAfterUploadForTotalSize (uploader) {
  // console.log(uploader);
}
function userDefinedCallbackAfterUploadForFileSize (uploader) {
  // console.log(uploader);
}

(() => {
  const tickboxEls = document.querySelectorAll(`.fz-checkbox-wrapper[data-fz-checkbox-type="bookmark"] .fz-checkbox`);
  const tickboxWrapperEls = document.querySelectorAll(`.fz-checkbox-wrapper[data-fz-checkbox-type="bookmark"]`);
  let childrenEls;
  function bookmarkClickHandler (evt) {
    const bookmarkTarget = document.getElementById("console--input-checkbox-bookmark");
    const tickboxEl = evt.target;
    if (tickboxEl.checked) {
      bookmarkTarget.innerHTML = "&nbsp;&gt; Favourited";
    } else {
      bookmarkTarget.innerHTML = "&nbsp;&gt; Not favourited";
    }
  }
  for (let i = 0; i < tickboxWrapperEls.length; i++) {
    childrenEls = tickboxWrapperEls[i].children;
    for (let j = 0; j < childrenEls.length; j++) {
      if (childrenEls[j].classList.contains("fz-checkbox")) {
          childrenEls[j].addEventListener("click", bookmarkClickHandler);
      }
    }
  }
})();
