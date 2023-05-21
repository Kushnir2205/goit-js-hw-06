

const formUser = document.querySelector('.login-form');

const onSubmit = (event) => {
    event.preventDefault();
    const {email, password} = event.target.elements;
    if(email.value === "" || password.value === ""){
    return alert('всі поля повинні бути заповнені')
     };
  
console.log({
        email: email.value,
        password: password.value});
event.target.reset();
}
formUser.addEventListener('submit', onSubmit)
