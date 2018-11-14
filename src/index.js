// Add all components to be compiled here
import steppedNumberInput from './components/inputs/number/stepped';

import basicCheckboxInput from './components/inputs/checkbox/basic';
import bookmarkCheckboxInput from './components/inputs/checkbox/bookmark';

import DefaultImagesFileInput from './components/inputs/file/images/squared/default';
import CaptionedImagesFileInput from './components/inputs/file/images/squared/captioned';
import CommentBoxWithImageFileInput from './components/inputs/file/images/squared/comment';

import classicRadioInput from './components/inputs/radio/classic';
import tickedRadioInput from './components/inputs/radio/ticked';

import multiStepFormLayout from './components/layouts/forms/multistep';

// Initialise each imported component on page load (optional, only if there is JS)

steppedNumberInput();

basicCheckboxInput();
bookmarkCheckboxInput();

window.frizzy = {
  elements: {
    inputs: {
      file: {
        image: {
          squared: {
            default: DefaultImagesFileInput,
            captioned: CaptionedImagesFileInput,
            comment: CommentBoxWithImageFileInput
          }
        }
      }
    }
  }
}

classicRadioInput();
tickedRadioInput();

multiStepFormLayout();
