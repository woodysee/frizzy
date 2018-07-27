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
import negativeDefaultButton from './components/buttons/default/negative';
import neutralDefaultButton from './components/buttons/default/neutral';
import positiveDefaultButton from './components/buttons/default/positive';
import primaryDefaultButton from './components/buttons/default/primary';

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

negativeDefaultButton();
neutralDefaultButton();
positiveDefaultButton();
primaryDefaultButton();
