const detailsDetails = document.querySelectorAll('.answers__details');
const answers = document.querySelectorAll('.answers');
const faqBlock = document.querySelector('.faq__block');
const faqBtn = document.querySelectorAll('.faq__btn');

detailsDetails.forEach((detailsItem) => {
  const answersSummary = detailsItem.querySelector('.answers__summary');

  answersSummary.addEventListener('click', () => {
    const answersReply = detailsItem.querySelector('.answers__reply');
    answersReply.classList.add('animated');

    setTimeout(() => {
      answersReply.classList.remove('animated');
    }, 100);
  });
});

answers.forEach((tabList, index) => {
  const dataAttr = `faq-${index + 1}`;
  tabList.setAttribute('data-faq', dataAttr);
});

const clearFaqBtn = (button) => {
  faqBtn.forEach((element) =>
    element.classList.remove('is-active')
  );
  button.classList.add('is-active');
};

const onControlFaqClick = (evt) => {
  const target = evt.target.closest('.faq__btn');
  if (!target) {
    return;
  }
  clearFaqBtn(target);
  const targetId = evt.target.id;
  answers.forEach((tabItem) => {
    const dataFaqValue = tabItem.getAttribute('data-faq');
    if (targetId === dataFaqValue) {
      tabItem.classList.add('is-active');
    } else {
      tabItem.classList.remove('is-active');
    }
  });
};

faqBlock.addEventListener('click', onControlFaqClick);

export {detailsDetails};
