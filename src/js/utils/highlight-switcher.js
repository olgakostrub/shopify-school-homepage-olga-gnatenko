export default function addThumbClickHandlers(containerClass, thumbClass, selectedThumbClass) {
  const container = document.querySelector(`.${containerClass}`);
  const elements = container.querySelectorAll(`.${thumbClass}`);

  elements.forEach(el => {
    el.addEventListener('click', () => {
      elements.forEach(item => {
        item.classList.remove(selectedThumbClass);
      });

      el.classList.add(selectedThumbClass);
    });
  });
}

