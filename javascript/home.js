// Adjusting the height of the div to align to the size of the comic
function adjustComicHeight() {
    const slideImageHeight = document.querySelector('.slide-img').clientHeight;
    document.querySelector('.comic').style.height = slideImageHeight + 'px';
}
 
// Set height on load
adjustComicHeight();
// Change height of div when screen is resized
window.addEventListener('resize', adjustComicHeight);


// Animation: Slide comic to the side when scroll 
// Comic disappears after some scrolling and slides back it when you scroll back up
window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const slideImages = document.querySelectorAll('.slide-img');
    const intro = document.getElementById('intro');
  
    const opacity = 1 - scrollPosition * 2 / window.innerHeight;
  
    slideImages.forEach(image => {
      image.style.opacity = opacity;
    });
  
    slideImages[0].style.transform = `translateX(-${scrollPosition}px) translateY(${scrollPosition}px)`;
    slideImages[1].style.transform = `translateX(${scrollPosition}px) translateY(${scrollPosition}px)`;
    
    // Have my bio intro appear after scrolling
    if (opacity <= 0.2) {
        intro.style.display = 'block';
        intro.style.position = 'fixed';
        
        const leftPosition = (window.innerWidth - intro.offsetWidth) / 2;
        intro.style.left = `${leftPosition}px`;
    
        const topPosition = (window.innerHeight - intro.offsetHeight) / 2;
        intro.style.top = `${topPosition*0.85}px`;
    
        intro.classList.add("animate__fadeInUp");
    } 
    else {
      intro.style.animation = '';
      intro.style.display = 'none';
    }
    
    // Display my work after scrolling and make my intro disappear
    var work = document.getElementById('work');
    var workTop = work.offsetTop;
    const navHeight = document.querySelector('nav').clientHeight;
  
    if (opacity <= 0) {
      if (window.pageYOffset > workTop - intro.offsetHeight*3) {
        intro.style.position = 'absolute';
        intro.style.top = `${workTop - intro.offsetHeight - 2*navHeight}px`;
        } 
      else {
        intro.style.display = 'block';
        slideImages.forEach(image => {
          image.style.display = 'none';
        });
      }
    } 
    else {
      slideImages.forEach(image => {
        image.style.display = 'block';
      });
    }
});


// Resize Intro based on viewport
window.addEventListener('resize', function() {
    const intro = document.getElementById('intro');
    
    // Calculate the left position dynamically to center the intro horizontally
    const leftPosition = (window.innerWidth - intro.offsetWidth) / 2;
    intro.style.left = `${leftPosition}px`;
  
    // Calculate the top position dynamically to center the intro vertically
    const topPosition = (window.innerHeight - intro.offsetHeight) / 2;
    intro.style.top = `${topPosition * 0.8}px`;
});

// Added onclick() to html so it scrolls to bio when you click the image
function scrollToOpacity() {
    const windowHeight = window.innerHeight;
    const scrollDistance = windowHeight / 2; // Adjust as needed
  
    window.scrollTo({
      top: scrollDistance,
      behavior: 'smooth'
    });
}


// Make clicking into the logo fade in/smooth animation
document.getElementById('logo').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default anchor behavior
    const targetUrl = this.getAttribute('href'); // Get the target URL
  
    document.body.classList.add('transition-out');
    // After a short delay, navigate to the target URL
    setTimeout(function() {
        window.location.href = targetUrl;
    }, 500); // Adjust the delay as needed
});


// Make scrolling to work section smooth when clicking the arrow in my intro
function scrollToProject() {
    const scrollPosition = window.scrollY;
  
    var work = document.getElementById('work');
    var workTop = work.offsetTop;
    const navHeight = document.querySelector('nav').clientHeight;
  
    // Calculate the scroll distance by adding the workTop to the current scroll position
    const scrollDistance = workTop - navHeight*2;
  
    window.scrollTo({
      top: scrollDistance,
      behavior: 'smooth'
    });
}


// Hover work image to expand and give it color
document.addEventListener('DOMContentLoaded', function() {
  const projectImages = document.querySelectorAll('.project-cover');

  projectImages.forEach(image => {
      const imageName = image.src.split('/').pop().split('.')[0]; // Extract image name without extension
      const imageColor = `assets/img/${imageName}-color.png`; // Colored image source

      // Preload colored image
      const preloadImage = new Image();
      preloadImage.src = imageColor;

      // Add event listener for mouseover event
      image.addEventListener('mouseover', function() {
          this.src = imageColor; // Change source to colored image
      });

      // Add event listener for mouseout event
      image.addEventListener('mouseout', function() {
          this.src = `assets/img/${imageName}.png`; // Restore original source
      });
  });
});