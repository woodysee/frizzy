// import _ from 'lodash';
import './index.css';
import FrizzyIcon from './icon.png';

export default function addALogoOnTheRight() {
  const logoSchema = document.createElement('div');
  const targets = document.getElementsByClassName('add-a-logo-on-the-right');
  logoSchema.classList.add("world");
  const frizzyLogo = new Image();
  frizzyLogo.src = FrizzyIcon;
  frizzyLogo.style.width = "30px";
  logoSchema.appendChild(frizzyLogo);
  let logoClone;
  if (targets.length > 0) {
    for (let i = 0; i < targets.length; i++) {
      // console.log("Attaching the Frizzy logo to each element...");
      logoClone = logoSchema.cloneNode(true);
      targets[i].appendChild(logoClone);
    }
  }
  return logoSchema;
}
