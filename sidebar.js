document.querySelectorAll('#toggleSidebar')[0].addEventListener('click', () => {
  const el = document.querySelectorAll('#sidebar')[0];
  const className = 'active';

  if (el.classList.contains(className)) {
    el.classList.remove(className);
  } else {
    el.classList.add(className);
  }
});
