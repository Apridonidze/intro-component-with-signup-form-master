let NameInput = document.querySelector("#NameInput");
let LastNameInput = document.querySelector("#LastNameInput");
let EmailInput = document.querySelector("#EmailInput");
let PasswordInput = document.querySelector("#PasswordInput");
let NameImgError = document.querySelector("#NameErrorImage");
let LastNameImgError = document.querySelector("#LastNameErrorImage");
let EmailImgError = document.querySelector("#EmailErrorImage");
let PasswrodImgError = document.querySelector("#PasswordErrorImage");
let NameErrorText = document.querySelector("#NameError");
let LastNameErrorText = document.querySelector("#LastNameError");
let EmailErrorText = document.querySelector("#EmailError");
let PasswordErrorText = document.querySelector("#PasswrodError");
let EmailPattern = `/^[a-zA-Z0-9. _-]+@[a-zA-Z0-9. -]+\. [a-zA-Z]{2,4}$/`;
let images = document.querySelectorAll('img');
for(image of images){
    image.style.visibility = 'hidden';
}
let submitBtn = document.querySelector("#SubmitBtn");
submitBtn.addEventListener('click',() => {
    if (NameInput.value == null ||NameInput.value == ""){
        NameImgError.style.visibility = 'visible';
        NameErrorText.textContent = 'First Name cannot be empty';
    }else {
        NameImgError.style.visibility = 'hidden';
        NameErrorText.textContent = '';
    };
    if (LastNameInput.value == null||LastNameInput.value == ""){
        LastNameImgError.style.visibility = 'visible';
        LastNameErrorText.textContent = 'Last Name cannot be empty';
    }else {
        LastNameImgError.style.visibility = 'hidden';
        LastNameErrorText.textContent = '';
    };
    if (EmailInput.value == null|| EmailInput.value == ""|| EmailInput.value.match(!EmailPattern)){
        EmailImgError.style.visibility = 'visible';
        EmailErrorText.textContent = `Looks like this is not an email`;
    }else if (EmailInput.value.match(EmailPattern)){
        EmailImgError.style.visibility = 'hidden';
        EmailErrorText.textContent = '';   
    }
    else {
        EmailImgError.style.visibility = 'hidden';
        EmailErrorText.textContent = '';   
    };
    if (PasswordInput.value == null|| PasswordInput.value == ''){
        PasswrodImgError.style.visibility = 'visible';
        PasswordErrorText.textContent = 'Password cannot be empty';
    }else {
        PasswrodImgError.style.visibility = 'hidden';
        PasswordErrorText.textContent = '';
    };
});