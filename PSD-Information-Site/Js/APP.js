const menu=document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar_menu');

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');

});

let image = document.getElementById('image');
let images =['Media/IMG_2941','Media/IMG_2942','IMG_2944'];
setInterval(function(){
    let random = Math.floor(Math.random() * 4);
    image.src = images[random];
}, 1000);