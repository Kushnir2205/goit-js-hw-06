

const inputValueElement = document.querySelector('#validation-input');

const valueInputLength = Number(inputValue.dataset.length);



const onInputCheck = () => {
    if (inputValueElement.value.length === valueInputLength) {
        inputValueElement.classList.add('valid');
        inputValueElement.classList.remove('invalid');
    } else {
        inputValueElement.classList.add('invalid');
        inputValueElement.classList.remove('valid');

    }   
}


inputValue.addEventListener('blur', onInputCheck)