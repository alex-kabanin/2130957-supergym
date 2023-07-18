const tabsContentItems = document.querySelectorAll('.tabs-content__item');
const tabsContentBtns = document.querySelectorAll('.tabs-content__btn');
const tabLists = document.querySelectorAll('.tabs-content__list');
const controlButton = document.querySelectorAll('.tabs-control__button');
const tabsControl = document.querySelector('.tabs-control');

tabsContentItems.forEach((tabsContentItem, index) => {
  const tabsContentBtn = tabsContentBtns[index];

  tabsContentItem.addEventListener('mouseover', () => {
    tabsContentBtn.classList.add('btn--dark-hovered');
  });

  tabsContentItem.addEventListener('mouseout', () => {
    tabsContentBtn.classList.remove('btn--dark-hovered');
  });
});

tabLists.forEach((tabList, index) => {
  const dataAttr = `tab-${index + 1}`;
  tabList.setAttribute('data-tab', dataAttr);
});

const clearFilter = (button) => {
  controlButton.forEach((element) =>
    element.classList.remove('tabs-control__button--active')
  );
  button.classList.add('tabs-control__button--active');
};

const onControlTabClick = (evt) => {
  const target = evt.target.closest('.tabs-control__button');
  if (!target) {
    return;
  }
  clearFilter(target);
  const targetId = evt.target.id;
  tabLists.forEach((tabItem) => {
    const dataTabValue = tabItem.getAttribute('data-tab');
    if (targetId === dataTabValue) {
      tabItem.classList.add('tabs-content__list--active');
    } else {
      tabItem.classList.remove('tabs-content__list--active');
    }
  });
};

tabsControl.addEventListener('click', onControlTabClick);

function smoothScrollToAnchor(anchorId) {
  const anchor = document.querySelector(anchorId);

  if (anchor) {
    window.scrollTo({
      top: anchor.offsetTop,
      behavior: 'smooth',
    });
  }
}

const anchorLink = document.querySelector('.hero__btn');

anchorLink.addEventListener('click', (event) => {
  event.preventDefault();
  const targetId = anchorLink.getAttribute('href');
  smoothScrollToAnchor(targetId);
});

export {tabsContentItems, tabsContentBtns};
