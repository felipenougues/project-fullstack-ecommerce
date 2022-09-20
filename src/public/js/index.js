window.addEventListener("load", function(){
    // Overlay del Header
    const userLogin = document.querySelector('.user')
    const userLoginOverlay = document.querySelector('.user__overlay')
    if(userLogin){
        userLogin.addEventListener('click', () => userLoginOverlay.classList.toggle('hidden'))
    }

    const userLogged = document.querySelector('.userLogged')
    const userLoggedOverlay = this.document.querySelector('.userLogged__overlay')
    if(userLogged){
        userLogged.addEventListener('click', () => userLoggedOverlay.classList.toggle('hidden'))
    }



})