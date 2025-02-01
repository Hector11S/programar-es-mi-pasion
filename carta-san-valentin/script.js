// read custom message from query strings
// Tutorial -> https://youtu.be/6ojp1iWUKw8

const urlSearchParams = new URLSearchParams(window.location.search)

const messageCustom = urlSearchParams.get('message')

if (messageCustom) {

  const mainMessageElement = document.querySelector('#mainMessage')
  mainMessageElement.textContent = decodeURI(messageCustom)
}

// the tutorial starts here

const btnOpenElement = document.querySelector('#open')
const btnCloseElement = document.querySelector('#close')

btnCloseElement.disabled = true



btnOpenElement.addEventListener('click', ()=> {
  btnOpenElement.disabled = true
  btnCloseElement.disabled = false
  const coverElement = document.querySelector('.cover')
  coverElement.classList.add('open-cover')

  setTimeout(()=>{
    //
    coverElement.style.zIndex = -1
    
    const paperElement = document.querySelector('.paper')
    paperElement.classList.remove('close-paper')
    paperElement.classList.add('open-paper')

    // animacion del corazón
    const heartElement = document.querySelector('.heart')
    heartElement.style.display = 'block'
  
  }, 500)

})
btnCloseElement.addEventListener('click', ()=> {
  btnOpenElement.disabled = false
  btnCloseElement.disabled = true

  const coverElement = document.querySelector('.cover')
  const paperElement = document.querySelector('.paper')
  paperElement.classList.remove('open-paper')
  paperElement.classList.add('close-paper')
  
  setTimeout(()=>{
    coverElement.style.zIndex = 0
    coverElement.classList.remove('open-cover')

    // animacion del corazón
    const heartElement = document.querySelector('.heart')
    heartElement.style.display = 'none'
  },500)
})


// script.js

// Función para generar un número aleatorio entre un mínimo y un máximo
function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}





// Función para generar círculos dinámicamente
// script.js

// script.js

// Función para generar un número aleatorio entre un mínimo y un máximo
function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

// Paleta de colores para el Día del Amor y la Amistad
const loveColors = [
  "#FF69B4", // Rosa fuerte
  "#FF1493", // Rosa profundo
  "#FF6B6B", // Rojo claro
  "#FF3B3B", // Rojo brillante
  "#FF7F50", // Coral
  "#FFA07A", // Salmón claro
  "#FFC0CB", // Rosa pastel
  "#DB7093", // Rosa pálido
  "#C71585", // Violeta medio
  "#FF0080", // Magenta
  "#FF80AB", // Rosa suave
  "#FF4D4D", // Rojo coral
  "#FF9999", // Rosa claro
  "#FF6666", // Rojo suave
  "#FFB6C1", // Rosa claro (Light Pink)
];

// Función para generar corazones dinámicamente
function createHearts() {
  const background = document.querySelector('.background');
  const numberOfHearts = 70; // Puedes ajustar este número para más o menos corazones

  for (let i = 0; i < numberOfHearts; i++) {
    const heart = document.createElement('span');
    heart.innerHTML = "♥"; // Símbolo de corazón
    const randomColor = loveColors[Math.floor(Math.random() * loveColors.length)]; // Selecciona un color aleatorio de la paleta
    heart.style.color = randomColor;
    heart.style.top = `${getRandomNumber(0, 100)}%`;
    heart.style.left = `${getRandomNumber(0, 100)}%`;
    heart.style.animationDuration = `${getRandomNumber(15, 25)}s`; // Duración aleatoria
    heart.style.fontSize = `${getRandomNumber(1, 6)}rem`; // Tamaño aleatorio
    background.appendChild(heart);
  }
}

// Llamar a la función para crear los corazones al cargar la página
window.onload = createHearts;