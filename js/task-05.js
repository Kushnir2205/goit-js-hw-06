const refs = {
    inputName: document.querySelector('#name-input'),
    outputName: document.querySelector('#name-output'),
}

const onInputText = (event) => {
    if(refs.inputName.value !== ""){
        refs.outputName.textContent = event.currentTarget.value
        console.log(refs.inputName.value);
    }else{
        refs.outputName.textContent = "Anonymous"
        console.log(1);
    }
}


refs.inputName.addEventListener('input', onInputText);



