let menuIcon=document.querySelector('.menu-icon');
let navbar=document.querySelector('.navbar');
menuIcon.Onclick=()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}   