const navigation = document.querySelector('nav')
const avatar = document.querySelector('.avatar')
const code = document.querySelector('h5')
const menu = document.querySelector('.menu')
const nav = document.querySelector('nav')

const rand = () => {
  return Math.floor(Math.random() * 4)
}

const shadowColor = () => {return '#' + (Math.random().toString(16) + '000000').substring(2,8)}

const animations = [
  '/assets/cinema.gif',
  '/assets/glitch.gif',
  '/assets/glitch2.gif',
  '/assets/matrix.gif',
]

let imagesArray = []

for (let i = 0; i < animations.length; i++) {
  let img = new Image();
  img.src = animations[i];
  img.onload = function () {
    imagesArray.push(img.src);
  };
}

function changeAvatar() {
  avatar.src = imagesArray[rand()]
}

function resetAnimation() {
  avatar.src = '/assets/avatar.jpg'
}

function closeMenu() {
  nav.classList.remove('asyde')
  menu.removeAttribute('style')
  menu.addEventListener('click', openMenu)
  menu.removeEventListener('click', closeMenu)
}

function openMenu() {
  nav.classList.add('asyde')
  menu.setAttribute('style', 'background-image: url("./assets/close.svg")')
  menu.removeEventListener('click', openMenu)
  menu.addEventListener('click', closeMenu)
}

setInterval(() => {
  code.setAttribute('style', `text-shadow: ${rand()}px ${rand()}px ${rand()}px ${shadowColor()}`)
}, 2500);

avatar.addEventListener('mouseover', changeAvatar)
avatar.addEventListener('mouseout', resetAnimation)
navigation.children[0].addEventListener('click', (e) => {
  const text = e.target.textContent.toLowerCase()
  const target = document.getElementById(text)
  console.log(target.style)
  target.setAttribute('style', 'background-color: yellow')
  setTimeout(() => {
    target.removeAttribute('style')
  }, 3000);
})
menu.addEventListener('click', openMenu)