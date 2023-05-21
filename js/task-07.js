const textEl = document.querySelector("#text");
const inputEl = document.querySelector("#font-size-control");
const changeFontSize = (event) => {
  textEl.style.fontSize = `${event.currentTarget.value}px`;
};

inputEl.addEventListener("input", changeFontSize);
