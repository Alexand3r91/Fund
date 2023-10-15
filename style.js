const menu = document.querySelector('.header__menu')
const menuBtn = document.querySelector('.menu__icon')

const body = document.body;

if (menu && menuBtn) {
    menuBtn.addEventListener('click' , () => {
        menu.classList.toggle('header__active')
        menuBtn.classList.toggle('menu__active')
        body.classList.toggle('lock')
    });

    menu.querySelectorAll('.button__navigator').forEach(navigator => {
        navigator.addEventListener('click', () => {
            menu.classList.remove('header__active')
            menuBtn.classList.remove('menu__active')
            body.classList.remove('lock')
        });
    });
};


/*-----------------------------*/

const anchors = document.querySelectorAll('a[href*="#"]');

anchors.forEach(anchors => {
    anchors.addEventListener('click', event => {
        event.preventDefault();

        const blockID = anchors.getAttribute('href').substring(1);

        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
})
