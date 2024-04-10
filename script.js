// Modal

document.addEventListener("DOMContentLoaded", function () {
  var overlay = document.getElementById("overlay");
  var closeButton = document.querySelector(".close");
  var okButton = document.getElementById("okBtn");

  function hideModal() {
    document.getElementById("rotateModal").style.display = "none";
    overlay.style.display = "none";
  }

  closeButton.onclick = hideModal;
  okButton.onclick = hideModal;
});

// Slide Comic Height
function adjustComicHeight() {
  const slideImageHeight = document.querySelector('.slide-img').clientHeight;
  document.querySelector('.comic').style.height = slideImageHeight + 'px';
}

adjustComicHeight();
window.addEventListener('resize', adjustComicHeight);


//Slide Comic Scroll Animation

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

  if (opacity <= 0.2) {
  intro.style.display = 'block';
  intro.style.position = 'fixed';
  
  const leftPosition = (window.innerWidth - intro.offsetWidth) / 2;
  intro.style.left = `${leftPosition}px`;

  const topPosition = (window.innerHeight - intro.offsetHeight) / 2;
  intro.style.top = `${topPosition*0.85}px`;

  intro.style.animation = 'slideIn 0.5s ease forwards';
} 
  else {
    intro.style.animation = '';
    intro.style.display = 'none';
  }

  var work = document.getElementById('work');
  var workTop = work.offsetTop;
  const navHeight = document.querySelector('nav').clientHeight;

  if (opacity <= 0) {
    if (window.pageYOffset > workTop - intro.offsetHeight*3) {
      intro.style.position = 'absolute';
      intro.style.top = `${workTop - intro.offsetHeight - 2*navHeight}px`;
    } else {
      intro.style.display = 'block';
      slideImages.forEach(image => {
        image.style.display = 'none';
      });
    }
  } else {
    slideImages.forEach(image => {
      image.style.display = 'block';
    });
  }
});

//Resize Intro

window.addEventListener('resize', function() {
  const intro = document.getElementById('intro');
  
  // Calculate the left position dynamically to center the intro horizontally
  const leftPosition = (window.innerWidth - intro.offsetWidth) / 2;
  intro.style.left = `${leftPosition}px`;

  // Calculate the top position dynamically to center the intro vertically
  const topPosition = (window.innerHeight - intro.offsetHeight) / 2;
  intro.style.top = `${topPosition * 0.8}px`;
});

function scrollToOpacity() {
  const windowHeight = window.innerHeight;
  const scrollDistance = windowHeight / 2; // Adjust as needed

  window.scrollTo({
    top: scrollDistance,
    behavior: 'smooth'
  });
}

// Scroll to animation

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

document.getElementById('logo').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default anchor behavior

    const targetUrl = this.getAttribute('href'); // Get the target URL

    // Add a class to the body for transition effect
    document.body.classList.add('transition-out');

    // After a short delay, navigate to the target URL
    setTimeout(function() {
        window.location.href = targetUrl;
    }, 500); // Adjust the delay as needed
});

// Scroll out of intro

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

document.addEventListener('DOMContentLoaded', function() {
  const projectImages = document.querySelectorAll('.project-cover');

  projectImages.forEach(image => {
      const imageName = image.src.split('/').pop().split('.')[0]; // Extract image name without extension
      const imageColor = `img/${imageName}-color.png`; // Colored image source

      // Preload colored image
      const preloadImage = new Image();
      preloadImage.src = imageColor;

      // Add event listener for mouseover event
      image.addEventListener('mouseover', function() {
          this.src = imageColor; // Change source to colored image
      });

      // Add event listener for mouseout event
      image.addEventListener('mouseout', function() {
          this.src = `img/${imageName}.png`; // Restore original source
      });
  });
});

function checkPassword() {
  var password = document.getElementById("password").value;
  // Replace "your_password" with your desired password
  if (password === "55609") {
      document.getElementById("protected").style.display = "none";
      document.getElementById("content").style.display = "block";

      // Open the link in a new tab
      var link = "https://medium.com/@yukic/revamping-post-order-ratings-experience-for-ubereats-new-verticals-orders-008550c3af44";
      window.open(link, "_blank");
  } else {
      alert("Incorrect password. Please try again.");
  }
}
