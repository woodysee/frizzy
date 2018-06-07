// Add all components to be compiled here
// import addALogoOnTheRightComponent from './components/addALogoOnTheRight';
import basicCheckboxInput from './components/inputs/checkbox/basic';
import basicRadioInput from './components/inputs/radio/basic';
import binaryRadioInput from './components/inputs/radio/binary';
import multilineRadioInput from './components/inputs/radio/multiline';
import multiStepFormLayout from './components/layouts/forms/multistep';
import headerBackBtn from './components/buttons/header/back';
import noticeAlertBanner from './components/banners/alerts/notice';
import warningAlertBanner from './components/banners/alerts/warning';
import negativeButton from './components/buttons/negative';
import positiveButton from './components/buttons/positive';

// Initialise each imported component on page load (optional, only if there is JS)
// addALogoOnTheRightComponent();
basicCheckboxInput();
basicRadioInput();
binaryRadioInput();
multilineRadioInput();
multiStepFormLayout();
headerBackBtn();
noticeAlertBanner();
warningAlertBanner();
negativeButton();
positiveButton();
