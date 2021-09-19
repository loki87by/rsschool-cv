const navigation = document.querySelector('.navigation')
const avatar = document.querySelector('.avatar')
const menu = document.querySelector('.menu')
const code = document.querySelector('.javascript')


if(window.innerWidth < 600){
  const codeAttributes = document.querySelector('.hljs-number')
  const br = document.createElement('br')
  code.insertBefore(br, codeAttributes)

}
const rand = () => {
  return Math.floor(Math.random() * 4)
}

const animations = [
  './assets/cinema.gif',
  './assets/glitch.gif',
  './assets/glitch2.gif',
  './assets/matrix.gif',
]

let imagesArray = []

for (let i = 0; i < animations.length; i++) {
  let img = new Image();
  img.src = `${window.location.href}${animations[i]}`;
  img.onload = function () {
    imagesArray.push(img.src);
  };
}

function changeAvatar() {
  avatar.src = imagesArray[rand()]
}

function resetAnimation() {
  avatar.src = './assets/avatar.jpg'
}

function closeMenu() {
  navigation.classList.remove('asyde')
  menu.removeAttribute('style')
  menu.addEventListener('click', openMenu)
  menu.removeEventListener('click', closeMenu)
}

function openMenu() {
  navigation.classList.add('asyde')
  menu.setAttribute('style', 'background-image: url("./assets/close.svg")')
  menu.removeEventListener('click', openMenu)
  menu.addEventListener('click', closeMenu)
}

avatar.addEventListener('mouseover', changeAvatar)
avatar.addEventListener('mouseout', resetAnimation)
navigation.children[0].addEventListener('click', (e) => {
  const text = e.target.textContent.toLowerCase()
  const target = document.getElementById(text)
  target.setAttribute('style', 'background-color: yellow')
  setTimeout(() => {
    target.removeAttribute('style')
  }, 3000);
})
menu.addEventListener('click', openMenu)