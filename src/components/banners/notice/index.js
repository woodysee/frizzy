import './index.css';

export default function noticeBanner() {
	const noticeBannerEls = document.getElementsByClassName("fz-banner--notice");
	const noticeBannerIcon =
	'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="29" height="29" viewBox="0 0 29 29">'+
		'<defs>'+
				'<path id="af-banner-notice-1" d="M14.5 29C6.492 29 0 22.508 0 14.5S6.492 0 14.5 0 29 6.492 29 14.5 22.508 29 14.5 29zm5.022-20.844H9.478c-.353 0-.66.132-.925.397a1.268 1.268 0 0 0-.397.925v10.044c0 .353.132.66.397.925.264.265.572.397.925.397h10.044c.353 0 .66-.132.925-.397.265-.264.397-.572.397-.925V9.478c0-.353-.132-.66-.397-.925a1.268 1.268 0 0 0-.925-.397zm-3.21 9.516v-1.36h-5.437v1.36h5.438zm1.813-2.719v-1.36h-7.25v1.36h7.25zm0-2.719v-1.359h-7.25v1.36h7.25z"/>'+
		'</defs>'+
		'<g fill="none" fill-rule="evenodd">'+
				'<mask id="af-banner-notice-2" fill="#fff">'+
						'<use xlink:href="#a"/>'+
				'</mask>'+
				'<use fill="#FFF" xlink:href="#a" />'+
				'<g fill="#F8CE8A" mask="url(#b)">'+
						'<path d="M0 0h29v29H0z"/>'+
				'</g>'+
		'</g>'+
	'</svg>';
	let iconWrappers;
	if (noticeBannerEls.length > 0) {
		for (let i = 0; i < noticeBannerEls.length; i++) {
			iconWrappers = noticeBannerEls[i].getElementsByClassName('fz-banner__icon');
			if (iconWrappers.length > 0) {
				for (let i = 0; i < iconWrappers.length; i++) {
					iconWrappers[i].innerHTML = noticeBannerIcon;
				}
			}
		}
	}
}
