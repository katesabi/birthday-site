// Функция скролла 
function scrollToReasons() {
  const section = document.querySelector('.reasons-section');
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}
