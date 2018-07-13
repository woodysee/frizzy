export default function inArray (needle, haystack) {
  
  function arrayCompare (a1, a2) {
  	if (a1.length != a2.length) return false;
  	const length = a2.length;
  	for (let i = 0; i < length; i++) {
  		if (a1[i] !== a2[i]) return false;
  	}
  	return true;
  }
  
  const length = haystack.length;
	for (let i = 0; i < length; i++) {
		if (typeof haystack[i] == 'object') {
			if (arrayCompare(haystack[i], needle)) return true;
		} else {
			if (haystack[i] == needle) return true;
		}
	}
  
	return false;

}
