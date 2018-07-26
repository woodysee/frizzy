// Add all components to be compiled here
// import addALogoOnTheRightComponent from './components/addALogoOnTheRight';
import basicCheckboxInput from './components/inputs/checkbox/basic';
import basicRadioInput from './components/inputs/radio/basic';
import classicRadioInput from './components/inputs/radio/classic';
import tickedRadioInput from './components/inputs/radio/ticked';
import binaryRadioInput from './components/inputs/radio/binary';
import bigRadioInput from './components/inputs/radio/big';
// import defaultImagesFileInput from './components/inputs/file/images/squared/default';
// import captionedImagesFileInput from './components/inputs/file/images/squared/captioned';
import multiStepFormLayout from './components/layouts/forms/multistep';
import headerBackBtn from './components/buttons/header/back';
import noticeAlertBanner from './components/banners/alerts/notice';
import warningAlertBanner from './components/banners/alerts/warning';
import negativeButton from './components/buttons/negative';
import neutralButton from './components/buttons/neutral';
import positiveButton from './components/buttons/positive';
import primaryButton from './components/buttons/primary';

// Initialise each imported component on page load (optional, only if there is JS)
// addALogoOnTheRightComponent();
basicCheckboxInput();
basicRadioInput();
// defaultImagesFileInput();
// captionedImagesFileInput();
classicRadioInput();
tickedRadioInput();
binaryRadioInput();
bigRadioInput();
multiStepFormLayout();
headerBackBtn();
noticeAlertBanner();
warningAlertBanner();
negativeButton();
neutralButton();
positiveButton();
primaryButton();
