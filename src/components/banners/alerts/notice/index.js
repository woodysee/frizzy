import '../alerts.css';
import './index.css';

export default function noticeAlertBanner() {
	const paperIconColour = "#ffffff";
	const shellIconColour = "#f8ce8a";
	
	const reminderSVG = (
		'<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 29 29" style="enable-background:new 0 0 29 29;" xml:space="preserve">'+
			'<g>'+
				'<g>'+
					'<path fill="'+paperIconColour+'" d="M14.5,29C6.5,29,0,22.5,0,14.5S6.5,0,14.5,0S29,6.5,29,14.5S22.5,29,14.5,29z M19.5,8.2h-10c-0.4,0-0.7,0.1-0.9,0.4C8.3,8.8,8.2,9.1,8.2,9.5v10c0,0.4,0.1,0.7,0.4,0.9c0.3,0.3,0.6,0.4,0.9,0.4h10c0.4,0,0.7-0.1,0.9-0.4c0.3-0.3,0.4-0.6,0.4-0.9v-10c0-0.4-0.1-0.7-0.4-0.9C20.2,8.3,19.9,8.2,19.5,8.2z M16.3,17.7v-1.4h-5.4v1.4H16.3L16.3,17.7zM18.1,15v-1.4h-7.2V15H18.1z M18.1,12.2v-1.4h-7.2v1.4H18.1L18.1,12.2z"/>'+
				'</g>'+
				'<path fill="'+shellIconColour+'" d="M14.5,29C6.5,29,0,22.5,0,14.5S6.5,0,14.5,0S29,6.5,29,14.5S22.5,29,14.5,29z M19.5,8.2h-10c-0.4,0-0.7,0.1-0.9,0.4C8.3,8.8,8.2,9.1,8.2,9.5v10c0,0.4,0.1,0.7,0.4,0.9c0.3,0.3,0.6,0.4,0.9,0.4h10c0.4,0,0.7-0.1,0.9-0.4c0.3-0.3,0.4-0.6,0.4-0.9v-10c0-0.4-0.1-0.7-0.4-0.9C20.2,8.3,19.9,8.2,19.5,8.2z M16.3,17.7v-1.4h-5.4v1.4H16.3L16.3,17.7zM18.1,15v-1.4h-7.2V15H18.1z M18.1,12.2v-1.4h-7.2v1.4H18.1L18.1,12.2z"/>'+
			'</g>'+
		'</svg>'
	);
	
	const noticeAlertBannerEls = document.getElementsByClassName("fz-banner--notice");
	let iconWrappers, copyWrappers;
	if (noticeAlertBannerEls.length > 0) {
		for (let i = 0; i < noticeAlertBannerEls.length; i++) {
			iconWrappers = noticeAlertBannerEls[i].getElementsByClassName('fz-banner__icon');
			copyWrappers = noticeAlertBannerEls[i].getElementsByClassName('fz-banner__copy');
			if (iconWrappers.length > 0) {
				for (let j = 0; j < iconWrappers.length; j++) {
					iconWrappers[j].innerHTML = reminderSVG;
				}
			}
		}
	}
	return;
}
