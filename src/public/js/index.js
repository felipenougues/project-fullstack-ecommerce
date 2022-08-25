window.addEventListener("load", function(){

    const userLogin = document.querySelector('.user')
    const userLoginOverlay = document.querySelector('.user__overlay')

    userLogin.addEventListener('click', () => userLoginOverlay.classList.toggle('hidden'))
})