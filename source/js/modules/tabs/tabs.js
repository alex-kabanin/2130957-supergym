const tabsContentItems = document.querySelectorAll('[data-tabs-content-item]');
const tabsContentBtns = document.querySelectorAll('[data-tabs-content-btn]');
const tabLists = document.querySelectorAll('[data-tabs-content-list]');
const controlButton = document.querySelectorAll('[data-tabs-control-btn]');
const tabsControl = document.querySelector('[data-tabs-control]');

tabsContentItems.forEach((tabsContentItem, index) => {
  const tabsContentBtn = tabsContentBtns[index];

  tabsContentItem.addEventListener('mouseover', () => {
    tabsContentBtn.classList.add('is-active');
  });

  tabsContentItem.addEventListener('mouseout', () => {
    tabsContentBtn.classList.remove('is-active');
  });
});

tabLists.forEach((tabList, index) => {
  const dataAttr = `tab-${index + 1}`;
  tabList.setAttribute('data-tab', dataAttr);
});

const clearFilter = (button) => {
  controlButton.forEach((element) =>
    element.classList.remove('is-active')
  );
  button.classList.add('is-active');
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
      tabItem.classList.add('is-active');
    } else {
      tabItem.classList.remove('is-active');
    }
  });
};

tabsControl.addEventListener('click', onControlTabClick);

export {tabsContentItems, tabsContentBtns};
