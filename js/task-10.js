// Напиши скрипт створення і очищення колекції елементів.
// Користувач вводить кількість елементів в input і натискає кнопку Створити,
//  після чого рендериться колекція. Натисненням на кнопку Очистити, колекція елементів очищається.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>

// Створи функцію createBoxes(amount), яка приймає один параметр - число.
// Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX.
// Використовуй готову функцію getRandomHexColor для отримання кольору.
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes,
//  у такий спосіб видаляючи всі створені елементи.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  inputDrawSize: document.querySelector('[type="number"]'),
  createBtn: document.querySelector("[data-create]"),
  destroyBtn: document.querySelector("[data-destroy]"),
  divBox: document.querySelector("#boxes"),
};

// console.log(inputDrawSize);
// console.log(createBtn);
// console.log(destroyBtn);

let divSize = 30;

const createBoxes = () => {
  const inputValue = refs.inputDrawSize.value;

  if (inputValue < 0 || inputValue > 100) {
    alert("Введіть число від 1 до 101");
    return;
  }

  for (let i = 1; i <= inputValue; i++) {
    const createdDiv = document.createElement("div");
    createdDiv.style.width = divSize + "px";
    createdDiv.style.height = divSize + "px";
    createdDiv.style.backgroundColor = getRandomHexColor();
    refs.divBox.appendChild(createdDiv);

    divSize += 10;
  }
};

const clearBoxes = () =>{
  refs.divBox.innerHTML = '';
  refs.inputDrawSize.value = ''
  divSize = 30;
}

refs.createBtn.addEventListener("click", createBoxes);
refs.destroyBtn.addEventListener("click", clearBoxes);

