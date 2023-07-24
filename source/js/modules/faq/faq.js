const detailsDetails = document.querySelectorAll('[data-anwers-details]');
const answers = document.querySelectorAll('[data-anwers]');
const faqBlock = document.querySelector('[data-faq-block]');
const faqBtn = document.querySelectorAll('[data-faq-btn]');

detailsDetails.forEach((detailsItem) => {
  const answersSummary = detailsItem.querySelector('[data-answers-summary]');

  answersSummary.addEventListener('click', () => {
    const answersReply = detailsItem.querySelector('[data-answers-reply]');
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
