// Get the button:
let mybutton = document.getElementById("scrollToTop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.classList.add('active')
  } else {
    mybutton.classList.remove('active')
  }
}


// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


window.addEventListener('resize', function() {
  if(window.innerHeight > window.innerWidth){
    document.querySelector('button[data-bs-toggle="modal"]').click()
  }
});