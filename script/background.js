const backgroundImg = ["back01", "back02", "back04", "back03"];
const background = document.querySelector(".back video");

const chose = backgroundImg[Math.floor(Math.random() * backgroundImg.length)];

const source = document.createElement("source");
const sourceVideo = background.appendChild(source);
sourceVideo.setAttribute("src", `./imgs/background/${chose}.mp4`);
sourceVideo.setAttribute("type", "video/mp4");

const figure = document.querySelector(".randomImg figure");

const img = document.createElement("img");
img.src = `./imgs/background/${chose}.jpg`;

figure.appendChild(img);
