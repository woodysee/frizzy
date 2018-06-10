import './index.css';

export default function warningAlertBanner() {
  const battenburgPrimaryColour = "#ffffff";
	const battenburgInverseColour = "rgba(226,119,92,1)";
	
	const warningSVG = (
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 719 719">'+
      '<circle fill="'+battenburgInverseColour+'" cx="359.5" cy="359.5" r="359.5"/>'+
      '<path fill="'+battenburgPrimaryColour+'" d="M142.5,228.5l218-88,216,88s1,350-211,350C155.64,578.5,142.5,314.5,142.5,228.5Z"/>'+
      '<path fill="'+battenburgInverseColour+'" d="M359.25,180.5l-175.75,80s.75,64.25,17,102H359.25Z"/>'+
      '<path fill="'+battenburgInverseColour+'" d="M359.25,362.5H524.5s-35.25,184-165.25,184Z"/>'+
    '</svg>'
	);
	
	const warningAlertBannerEls = document.getElementsByClassName("fz-banner--warning");
	let iconWrappers, copyWrappers;
	if (warningAlertBannerEls.length > 0) {
		for (let i = 0; i < warningAlertBannerEls.length; i++) {
			iconWrappers = warningAlertBannerEls[i].getElementsByClassName('fz-banner__icon');
			copyWrappers = warningAlertBannerEls[i].getElementsByClassName('fz-banner__copy');
			if (iconWrappers.length > 0) {
				for (let j = 0; j < iconWrappers.length; j++) {
					iconWrappers[j].innerHTML = warningSVG;
				}
			}
		}
	}
	return;
}
