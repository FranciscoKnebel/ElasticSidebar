'use strict';

document.querySelectorAll('.em-toggle')[0].addEventListener('click', function () {
	var element = document.querySelectorAll('.em-sidebar')[0];
	var className = 'active';

	if (element.classList.contains(className)) {
		element.classList.remove(className);
	} else {
		element.classList.add(className);
	}
});