function smoothScrollToAnchor(anchorId) {
  const anchor = document.querySelector(anchorId);

  if (anchor) {
    window.scrollTo({
      top: anchor.offsetTop,
      behavior: 'smooth',
    });
  }
}

const anchorLink = document.querySelector('[data-hero-btn]');

const initAnchorLink = () => {
  if (anchorLink) {
    anchorLink.addEventListener('click', (event) => {
      event.preventDefault();
      const targetId = anchorLink.getAttribute('href');
      smoothScrollToAnchor(targetId);
    });
  }
};

export {initAnchorLink};
