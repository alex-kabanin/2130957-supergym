const detailsDetails = document.querySelectorAll('[data-accordion="element"]');
const answers = document.querySelectorAll('[data-anwers]');
const faqBlock = document.querySelector('[data-faq-block]');
const faqBtn = document.querySelectorAll('[data-faq-btn]');


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
