window.onload = () => {
    
    let menu = document.querySelector('#header__menu__mobile');
    let links = document.querySelector('#header__links');
    let close = document.querySelector('#header__links__close');

    menu.addEventListener('click', ()=> {
        links.classList.add('header__links--active');
    });

    close.addEventListener('click', ()=> {
        if(links.classList.contains('header__links--active')){
            links.classList.remove('header__links--active');
        } else {
            links.classList.add('header__links--active');
        }
    });

}