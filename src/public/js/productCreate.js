const inputNombre = document.getElementById('name')
const inputPrecio = document.getElementById('price')
const inputCategoria = document.getElementById('category')
const inputTalle = document.getElementById('size')
const inputDescripcion = document.getElementById('description')
const inputImagen = document.getElementById('productImage')

inputNombre.focus();

inputNombre.addEventListener('blur', e => {
    checkNotNull(e)
    checkLength(e, 5)
})

inputPrecio.addEventListener('blur', e => checkNotNull(e))
inputCategoria.addEventListener('blur', e => checkNotNull(e))
inputTalle.addEventListener('blur', e => checkNotNull(e))
inputDescripcion.addEventListener('blur', e => {
    checkNotNull(e)
    checkLength(e, 20)
})
inputImagen.addEventListener('change', function(){
    if(!(["JPEG","JPG","PNG","GIF"].includes(inputImagen.value.split('.').pop().toUpperCase()))){
        inputImagen.classList.add('alert-error');
        inputImagen.nextElementSibling.innerHTML = `Los formatos permitidos son: "JPG", "JPEG", "PNG", "GIF".`
    }
    else{
        inputImagen.classList.remove('alert-error');
        inputImagen.nextElementSibling.innerHTML = ""
    }
})



// Utility Functions

function checkNotNull(e){
    if (e.target.value == "") {
        e.target.classList.add('alert-error');
        e.target.nextElementSibling.innerHTML = "El campo no puede estar vacío."
    }
    else{
        e.target.classList.remove('alert-error');
        e.target.nextElementSibling.innerHTML = ""
    }
}

function checkLength(e, length){
    if(e.target.value.length < length){
        e.target.classList.add('alert-error');
        e.target.nextElementSibling.innerHTML += `<p>El campo debe contener almenos ${length} caracteres</p>`
    }
    else{
        e.target.classList.remove('alert-error');
        e.target.nextElementSibling.innerHTML = ""
    }
}