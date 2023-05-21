

const bodyColor = document.body;
const spanColor = document.querySelector('.color');
const buttonColor = document.querySelector('.change-color')


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColor = () =>{
  bodyColor.style.backgroundColor = getRandomHexColor()
  console.log(bodyColor.style.backgroundColor);
  spanColor.textContent = `${bodyColor.style.backgroundColor}`
 console.log(spanColor.textContent);
  
}

buttonColor.addEventListener('click', changeColor)
