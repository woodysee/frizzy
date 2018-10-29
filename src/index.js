// Add all components to be compiled here
import steppedNumberInput from './components/inputs/number/stepped';

import basicCheckboxInput from './components/inputs/checkbox/basic';
import bookmarkCheckboxInput from './components/inputs/checkbox/bookmark';

import defaultImagesFileInput from './components/inputs/file/images/squared/default';
import captionedImagesFileInput from './components/inputs/file/images/squared/captioned';
import commentBoxWithImageFileInput from './components/inputs/file/images/squared/comment';

import classicRadioInput from './components/inputs/radio/classic';
import tickedRadioInput from './components/inputs/radio/ticked';

import multiStepFormLayout from './components/layouts/forms/multistep';

// Initialise each imported component on page load (optional, only if there is JS)

steppedNumberInput();

basicCheckboxInput();
bookmarkCheckboxInput();

defaultImagesFileInput();
captionedImagesFileInput();
commentBoxWithImageFileInput();

classicRadioInput();
tickedRadioInput();

multiStepFormLayout();
