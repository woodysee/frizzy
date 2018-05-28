// import _ from 'lodash';
import './index.css';
import FrizzyIcon from './icon.png';

export default function addALogoOnTheRight() {
  const logoWrapper = document.createElement('div');
  const targets = document.getElementsByClassName('add-a-logo-on-the-right');
  logoWrapper.classList.add("world");
  const frizzyLogo = new Image();
  frizzyLogo.src = FrizzyIcon;
  frizzyLogo.style.width = "30px";
  logoWrapper.appendChild(frizzyLogo);
  if (targets.length > 0) {
    // console.log("Attaching the Frizzy logo to each element...");
    for (let i = 0; i < targets.length; i++) {
      targets[i].appendChild(logoWrapper);
    }
  }
  return logoWrapper;
}