const tabsContentItems = document.querySelectorAll('[data-tabs-content-item]');
const tabsContentBtns = document.querySelectorAll('[data-tabs-content-btn]');

const initTabItem = () => {
  if (tabsContentItems) {
    tabsContentItems.forEach((tabsContentItem, index) => {
      const tabsContentBtn = tabsContentBtns[index];

      tabsContentItem.addEventListener('mouseover', () => {
        tabsContentBtn.classList.add('is-active');
      });

      tabsContentItem.addEventListener('mouseout', () => {
        tabsContentBtn.classList.remove('is-active');
      });
    });
  }
};

export {initTabItem};
