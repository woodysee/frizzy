// Add all components to be compiled here
import steppedNumberInput from './components/inputs/number/stepped';

import bookmarkCheckboxInput from './components/inputs/checkbox/bookmark';

import defaultImagesFileInput from './components/inputs/file/images/squared/default';
import captionedImagesFileInput from './components/inputs/file/images/squared/captioned';
import commentBoxWithImageFileInput from './components/inputs/file/images/squared/comment';

import classicRadioInput from './components/inputs/radio/classic';
import tickedRadioInput from './components/inputs/radio/ticked';

import multiStepFormLayout from './components/layouts/forms/multistep';

import noticeAlertBanner from './components/banners/alerts/notice';
import warningAlertBanner from './components/banners/alerts/warning';

// Initialise each imported component on page load (optional, only if there is JS)

steppedNumberInput();

bookmarkCheckboxInput();

defaultImagesFileInput();
captionedImagesFileInput();
commentBoxWithImageFileInput();

classicRadioInput();
tickedRadioInput();

multiStepFormLayout();

noticeAlertBanner();
warningAlertBanner();
