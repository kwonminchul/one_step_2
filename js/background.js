const images = ["bgi1.jpg", "bgi2.jpeg", "bgi3.jpg", "bgi4.jpg", "bgi5.png"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;
document.body.appendChild(bgImage);
