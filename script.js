const bodyEl = document.querySelector('.body-container');
const imgEl = document.querySelector('.cart-image');
const lightBox = document.querySelector('.lightbox-display')

imgEl.addEventListener('click',function(){
    // bodyEl.classList.add('dull-background');
    // bodyEl.classList.add('lightbox-display');
    bodyEl.style.opacity = 0.3;
    lightBox.style.visibility = 'visible';
})


bodyEl.addEventListener('click',function(e){
    // bodyEl.classList.remove('dull-background');
})