// Получаем все элементы с классом "answers__item"
const answersItems = document.querySelectorAll('.answers__item');

answersItems.forEach((item) => {
  item.addEventListener('toggle', () => {
    const parentWrapper = item.closest('.answers__wrapper');

    if (item.open) {
      parentWrapper.classList.add('answers__wrapper--open');
    } else {
      parentWrapper.classList.remove('answers__wrapper--open');
    }
  });
});

export {answersItems};
