const navigation = document.querySelector(".navigation");
const avatar = document.querySelector(".avatar");
const menu = document.querySelector(".menu");
const code = document.querySelector(".javascript");

let brInserted = false;

function codeChecker() {
  const codeAttributes = document.querySelector(".hljs-number");
  if (window.innerWidth < 600 && !brInserted) {
    const br = document.createElement("br");
    code.insertBefore(br, codeAttributes);
    brInserted = true;
  }
  if (window.innerWidth > 600) {
    const br = document.querySelector("br");
    if (br) {
      br.remove();
      brInserted = false;
    }
  }
}
const rand = () => {
  return Math.floor(Math.random() * 4);
};

const animations = [
  "./assets/cinema.gif",
  "./assets/glitch.gif",
  "./assets/glitch2.gif",
  "./assets/matrix.gif",
];

let imagesArray = [];

for (let i = 0; i < animations.length; i++) {
  let img = new Image();
  img.src = `${window.location.href}${animations[i]}`;
  img.onload = function () {
    imagesArray.push(img.src);
  };
}

function changeAvatar() {
  avatar.src = imagesArray[rand()];
}

function resetAnimation() {
  avatar.src = "./assets/avatar.jpg";
}

function checkWidth() {
  const screenWidth = window.innerWidth;
  if (screenWidth < 666) {
    navigation.classList.add("asyde");
  } else {
    navigation.classList.remove("asyde");
  }
  codeChecker();
}

function closeMenu() {
  const nav = document.querySelector("nav");
  nav.style = "";
  checkWidth();
  menu.removeAttribute("style");
  menu.addEventListener("click", openMenu);
  menu.removeEventListener("click", closeMenu);
}

function openMenu() {
  const nav = document.querySelector("nav");
  nav.style = "display: block";
  checkWidth();
  menu.setAttribute("style", 'background-image: url("./assets/close.svg")');
  menu.removeEventListener("click", openMenu);
  menu.addEventListener("click", closeMenu);
}

avatar.addEventListener("mouseover", changeAvatar);
avatar.addEventListener("mouseout", resetAnimation);
menu.addEventListener("click", openMenu);
window.addEventListener("resize", checkWidth);
window.addEventListener("DOMContentLoaded", codeChecker);
navigation.children[0].addEventListener("click", (e) => {
  const text = e.target.textContent.toLowerCase();
  const target = document.getElementById(text);
  target.setAttribute("style", "background-color: yellow");
  setTimeout(() => {
    target.removeAttribute("style");
  }, 3000);
});
