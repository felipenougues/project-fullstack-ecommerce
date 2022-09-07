const form = document.querySelector('form')
const inputName = document.getElementById('name')
const inputLastName = document.getElementById('lastName')
const inputEmail = document.getElementById('email')
const inputPassword = document.getElementById('password')
const inputCategory = document.getElementById('category')
const inputImage = document.getElementById('image')
const requiredFields = [inputName, inputLastName, inputEmail, inputPassword]
const submitButton = document.querySelector('.boton')
const errors = document.querySelectorAll('.error-msg')

inputName.focus();

// Chequeo errores del campo "Nombre"
inputName.addEventListener('blur', function(e){
    checkLength(e, 2);
})
// Chequeo errores del campo "Apellido"
inputLastName.addEventListener('blur', function(e){
    checkLength(e, 2);
})
// Chequeo errores del campo "Email"
inputEmail.addEventListener('blur', function(){
    let isEmail = validator.isEmail(inputEmail.value)
    if (inputEmail.value == ""){
        inputEmail.classList.add('alert-error');
        inputEmail.nextElementSibling.innerHTML = "El campo no puede estar vacío"
    }
    else if(!isEmail){
        inputEmail.classList.add('alert-error');
        inputEmail.nextElementSibling.innerHTML = "El email debe ser válido"
    }
    else{
        inputEmail.classList.remove('alert-error');
        inputEmail.nextElementSibling.innerHTML = ""
    }
})

// Chequeo errores del campo "Contraseña"
inputPassword.addEventListener('focus', () => {
    inputPassword.nextElementSibling.innerHTML = "La contraseña debe tener 8 caracteres y por lo menos una letra mayúscula, una minúscula y un número"
    inputPassword.nextElementSibling.style.color = "#000"
})

inputPassword.addEventListener('blur', function(){
    let regEx =  /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).*$/
    if(inputPassword.value == ""){
        inputPassword.classList.add('alert-error');
        inputPassword.nextElementSibling.innerHTML = "El campo no puede estar vacío"
        inputPassword.nextElementSibling.style.color = "red"
    }
    else if(inputPassword.value.length < 8 || !(regEx.test(inputPassword.value))){
        inputPassword.classList.add('alert-error');
        inputPassword.nextElementSibling.innerHTML = "La contraseña debe tener 8 caracteres y por lo menos una letra mayúscula, una minúscula y un número"
        inputPassword.nextElementSibling.style.color = "red"
    }
    else{
        inputPassword.classList.remove('alert-error');
        inputPassword.nextElementSibling.innerHTML = ""
    }
    console.log(regEx.test(inputPassword.value));
    console.log(inputPassword.value);
})

inputImage.addEventListener('change', function(){
    let fileExtension = inputImage.value.split('.').pop().toUpperCase()
    let acceptedExtensions = ["JPG", "JPEG", "PNG", "GIF"]
    if(!(acceptedExtensions.includes(fileExtension))){
        inputImage.classList.add('alert-error')
        inputImage.nextElementSibling.innerHTML = `Los formatos permitidos son: "JPG", "JPEG", "PNG", "GIF.`
    }
    else{
        inputImage.classList.remove('alert-error')
        inputImage.nextElementSibling.innerHTML = ""
    }
})

// Chequeo errores antes de enviar el formulario
submitButton.addEventListener('click', function(e){
    requiredFields.forEach(field => {
        if(field.value == ""){
            e.preventDefault();
        }
    })
    errors.forEach(error => {
        if(error.innerHTML !== ""){
            e.preventDefault();
        }
    })
})

// Utility Functions 
function checkLength (e, length){
    if(e.target.value == ""){
        e.target.classList.add('alert-error')
        e.target.nextElementSibling.innerHTML = "El campo no puede estar vacío"
    }
    else if(e.target.value.length < 2){
        e.target.classList.add('alert-error');
        e.target.nextElementSibling.innerHTML = `El campo debe contener almenos ${length} caracteres`
    }
    else{
        e.target.classList.remove('alert-error')
        e.target.nextElementSibling.innerHTML = ""
    }
}





