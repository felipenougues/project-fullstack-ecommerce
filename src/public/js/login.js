const inputEmail = document.querySelector('.email')
const inputPassword = document.querySelector('.password')

inputEmail.addEventListener('blur', function(e){
    if(e.target.value == ""){
        e.target.classList.add('alert-error'),
        e.target.nextElementSibling.innerHTML = "El campo no puede estar vacío"
    }
    else if(!(validator.isEmail(e.target.value))){
        e.target.classList.add('alert-error'),
        e.target.nextElementSibling.innerHTML = "El email debe ser válido"
    }
    else{
        e.target.classList.remove('alert-error')
        e.target.nextElementSibling.innerHTML = ""
    }
})

inputPassword.addEventListener('blur', function(e){
    if(e.target.value == ""){
        e.target.classList.add('alert-error'),
        e.target.nextElementSibling.innerHTML = "El campo no puede estar vacío"
    }
    else{
        e.target.classList.remove('alert-error')
        e.target.nextElementSibling.innerHTML = ""
    }
})


