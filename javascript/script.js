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

// Scroll to top button appears half way through the page
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > window.innerHeight / 2 || document.documentElement.scrollTop > window.innerHeight / 2) {
    document.getElementById("scroll-top-btn").style.display = "block";
  } else {
    document.getElementById("scroll-top-btn").style.display = "none";
  }
}

document.getElementById("scroll-top-btn").addEventListener("click", function() {
  window.scrollTo({
      top: 0,
      behavior: "smooth"
  });
});