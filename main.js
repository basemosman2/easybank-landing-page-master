const menuIcon = document.querySelector('.menuBarIcon img');
const nav = document.querySelector('.nav');

menuIcon.addEventListener('click',()=>{
    nav.classList.toggle('active');
    let activeNav = nav.classList.contains('active');
    if (activeNav) {
        menuIcon.src = 'images/icon-close.svg';
    } else {
        menuIcon.src = 'images/icon-hamburger.svg';
    }
});