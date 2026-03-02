const flowersContainer = document.getElementById('flowers');

const flowerEmojis = ['🌸', '🌺', '🌷', '💐', '🌼'];

function createFlower() {
  const flower = document.createElement('div');
  flower.className = 'flower';

  flower.innerText =
    flowerEmojis[Math.floor(Math.random() * flowerEmojis.length)];

  flower.style.left = Math.random() * 100 + 'vw';
  flower.style.animationDuration =
    (3 + Math.random() * 4) + 's';

  flowersContainer.appendChild(flower);

  setTimeout(() => {
    flower.remove();
  }, 7000);
}

setInterval(createFlower, 300);