const avatar = document.querySelector('.avatar')
const code = document.querySelector('h5')
console.log(code)

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

setInterval(() => {
  code.setAttribute('style', `text-shadow: ${rand()}px ${rand()}px ${rand()}px ${shadowColor()}`)
}, 2500);

avatar.addEventListener('mouseover', changeAvatar)
avatar.addEventListener('mouseout', resetAnimation)