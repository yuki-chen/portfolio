const slideLeft = document.getElementById('left');
const slideRight = document.getElementById('right');
const project = document.getElementById('clickPro');
const height = window.innerHeight;
const width = window.innerWidth;
const main = document.getElementById('mainImage')

function delay() {
    setTimeout(() => {
        location.replace("./projects.html");
    }, 500);
} 

project.addEventListener('click', (ev) => {
    slideLeft.style.transform = `translateY(${ev.clientY - height*2.5}px)`;
    slideLeft.style.transform += `translateX(${ev.clientX - width*3}px)`;
    slideRight.style.transform = `translateY(${ev.clientY + height*1.5}px)`;
    slideRight.style.transform += `translateX(${ev.clientX + width*1.5}px)`;
    delay();
}, {passive:true});

main.addEventListener('click', (ev) => {
    slideLeft.style.transform = `translateY(${ev.clientY - height*2.5}px)`;
    slideLeft.style.transform += `translateX(${ev.clientX - width*2.5}px)`;
    slideRight.style.transform = `translateY(${ev.clientY + height*1.5}px)`;
    slideRight.style.transform += `translateX(${ev.clientX + width*1.5}px)`;
    delay();
}, {passive:true});

window.addEventListener('resize', function() {
    if(window.innerHeight > window.innerWidth){
      document.querySelector('button[data-bs-toggle="modal"]').click()
    }
});

window.addEventListener('load', function() {
    if(window.innerHeight > window.innerWidth){
      document.querySelector('button[data-bs-toggle="modal"]').click()
    }
});