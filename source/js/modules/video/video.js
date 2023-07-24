const playButton = document.querySelector('#play-button');
const gymVideo = document.querySelector('[data-gym__video]');

playButton.addEventListener('click', () => {
  playButton.remove();
  gymVideo.src += '?autoplay=1';
});

export {playButton, gymVideo};
