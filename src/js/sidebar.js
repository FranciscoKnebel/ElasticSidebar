document.querySelectorAll('.em-toggle')[0].addEventListener('click', () => {
	const element = document.querySelectorAll('.em-sidebar')[0];
	const className = 'active';

	if (element.classList.contains(className)) {
		element.classList.remove(className);
	} else {
		element.classList.add(className);
	}
});
