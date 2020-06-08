const pads = document.querySelectorAll('.pads div');
const visual = document.querySelector('.visual');
const colors = [
  'lightblue',
  'lightcoral',
  'lightcyan',
  'lightgreen',
  'lightpink',
  '#ffffbb',
];
// Play function
function playSong(song) {
  song.currentTime = 0;
  song.play();
}
// bubble function

function createBubble(index) {
  const div = document.createElement('div');
  div.className = 'bubble';
  div.style.backgroundColor = colors[index];
  visual.appendChild(div);
  div.style.animation = 'jump 1s ease';
  div.addEventListener('animationend', () => {
    visual.removeChild(this);
  });
}
// click event
for (let i = 0; i < pads.length; i++) {
  pads[i].addEventListener('click', () => {
    let pad = pads[i].classList[0];
    const song = document.querySelector(`.${pad} audio`);
    playSong(song);
    createBubble(i);
  });
}
// keydown event
window.addEventListener('keydown', (e) => {
  console.log(e);
  const key = e.keyCode;
  const pad = document.querySelector(`div[data-key='${key}']`);
  const padClass = pad.classList[0];
  const index = pad.getAttribute('data-index');
  const song = document.querySelector(`.${padClass} audio`);
  playSong(song);
  createBubble(index);
});
