import './reset.css';
import './style.sass';
import CTSvg from './assets/CT.png';

const imageContainers = document.getElementsByClassName('player-image');
console.log(imageContainers);
for (const image of imageContainers) {
  image.src = CTSvg;
  console.log(image);
}
