// Add all components to be compiled here
import SteppedNumberInput from './components/inputs/number/stepped';

import BasicCheckboxInput from './components/inputs/checkbox/basic';
import bookmarkCheckboxInput from './components/inputs/checkbox/bookmark';

import DefaultImagesFileInput from './components/inputs/file/images/squared/default';
import CaptionedImagesFileInput from './components/inputs/file/images/squared/captioned';
import CommentBoxWithImageFileInput from './components/inputs/file/images/squared/comment';

import classicRadioInput from './components/inputs/radio/classic';
import tickedRadioInput from './components/inputs/radio/ticked';

import multiStepFormLayout from './components/layouts/forms/multistep';

// Initialise each imported component on page load (optional, only if there is JS)

bookmarkCheckboxInput();

window.frizzy = {
  components: {
    inputs: {
      checkbox: {
        basic: BasicCheckboxInput
      },
      file: {
        image: {
          squared: {
            default: DefaultImagesFileInput,
            captioned: CaptionedImagesFileInput,
            comment: CommentBoxWithImageFileInput
          }
        }
      },
      number: {
        stepped: SteppedNumberInput
      }
    }
  }
};

classicRadioInput();
tickedRadioInput();
multiStepFormLayout();

(() => {
  const allSteppedNumberInputs = new SteppedNumberInput();
  allSteppedNumberInputs.init();
  const allBasicCheckboxInputs = new BasicCheckboxInput();
  allBasicCheckboxInputs.init();
  const allDefaultImagesFileInputs = new DefaultImagesFileInput();
  allDefaultImagesFileInputs.init();
  const allCaptionedImagesFileInputs = new CaptionedImagesFileInput();
  allCaptionedImagesFileInputs.init();
  const allCommentBoxWithImageFileInputs = new CommentBoxWithImageFileInput();
  allCommentBoxWithImageFileInputs.init();
})();
