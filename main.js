const menuClick = document.querySelector('.button-nav')
menuClick.addEventListener('click', navOpen)

function navOpen() {
    document.querySelector('#nav').style.width = '100%' ;
}

const menuClose = document.querySelector('.button-close')
menuClose.addEventListener('click', navClose)

function navClose() {
    document.querySelector('#nav').style.width = '0%' ;
}

