const playButton = document.querySelector('#play-button');
const gymVideoLink = document.querySelector('[data-gym__video]');
const videoHTML = '<iframe src="https://www.youtube.com/embed/9TZXsZItgdw" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';

gymVideoLink.addEventListener('click', (event) => {
  event.preventDefault();
  playButton.remove();
  gymVideoLink.innerHTML = videoHTML;
  const gymVideo = document.querySelector('[data-gym__video] iframe');
  gymVideo.src += '?autoplay=1';
});

export {playButton, gymVideoLink};
