
let loader = document.querySelector('.loader');

window.addEventListener('load', function(e){
    loader.style.display = 'none'
});

let menu = document.querySelector('.header .menu');
let closeBtn = document.querySelector('.header .close');
let nav = document.querySelector('.nav nav');


closeBtn.addEventListener("click", function(){
    nav.classList.toggle('remove');
    nav.classList.remove('open')
    closeBtn.style.display = 'none'
    menu.style.display = 'inline-block'
})
menu.addEventListener('click', function(e) {
    e.preventDefault()
    nav.classList.toggle('open');
    nav.classList.remove('remove')
    closeBtn.style.display = 'inline-block'
    menu.style.display = 'none'
    
})