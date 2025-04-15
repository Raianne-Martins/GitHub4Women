const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');


let rocketY = canvas.height - 100;
const rocketWidth = 30;
const rocketHeight = 60;
const noseHeight = 30;

const flowers = [];
const flowerCount = 20;

function createFlowers() {
  for (let i = 0; i < flowerCount; i++) {
    flowers.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 5 + 5,
      speed: Math.random() * 2 + 1,
    });
  }
}

function drawFlower(flower) {
  ctx.fillStyle = 'pink';
  ctx.beginPath();
  ctx.arc(flower.x, flower.y, flower.size, 0, Math.PI * 2);
  ctx.fill();
}

function updateFlowers() {
  flowers.forEach((flower) => {
    flower.y += flower.speed;
    if (flower.y > canvas.height) {
      flower.y = -flower.size; 
      flower.x = Math.random() * canvas.width; 
    }
  });
}

function drawRocket() {
  // Limpa o canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = 'white';
  ctx.beginPath();
  ctx.moveTo(canvas.width / 2, rocketY);
  ctx.lineTo(canvas.width / 2 - rocketWidth / 2, rocketY + noseHeight);
  ctx.lineTo(canvas.width / 2 + rocketWidth / 2, rocketY + noseHeight);
  ctx.closePath();
  ctx.fill();


  ctx.fillStyle = 'pink';
  ctx.fillRect(canvas.width / 2 - rocketWidth / 2, rocketY + noseHeight, rocketWidth, rocketHeight);

  rocketY -= 2;

  if (rocketY + noseHeight > 0) {
    requestAnimationFrame(animate);
  }
}

function animate() {
  drawRocket();
  updateFlowers();
  flowers.forEach(drawFlower);
}

createFlowers();
animate();

