const images = [
  "https://images.unsplash.com/photo-1501117716987-c8e1ecb210b5",
  "https://images.unsplash.com/photo-1566073771259-6a8506099945",
  "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa"
];

let i = 0;

setInterval(() => {
  i = (i + 1) % images.length;
  document.getElementById("slide").src = images[i];
}, 3000);
