const detailsItems = document.querySelectorAll('.answers__item');

detailsItems.forEach((detailsItem) => {
  const answersSummary = detailsItem.querySelector('.answers__summary');

  answersSummary.addEventListener('click', () => {
    const answersReply = detailsItem.querySelector('.answers__reply');
    answersReply.classList.add('animated');

    setTimeout(() => {
      answersReply.classList.remove('animated');
    }, 100);
  });
});

export {detailsItems};
