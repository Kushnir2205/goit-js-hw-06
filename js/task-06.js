

const inputValueElement = document.querySelector('#validation-input');

const valueInputLength = Number(inputValueElement.dataset.length);



const onInputCheck = () => {
    if (inputValueElement.value.length === valueInputLength) {
        inputValueElement.classList.add('valid');
        inputValueElement.classList.remove('invalid');
    } else {
        inputValueElement.classList.add('invalid');
        inputValueElement.classList.remove('valid');

    }   
}


inputValueElement.addEventListener('blur', onInputCheck)