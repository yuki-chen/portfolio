// Input password and open link if correct
function checkPassword() {
    var password = document.getElementById("password").value;
    if (password === "55609") {
        document.getElementById("protected").style.display = "none";
        document.getElementById("content").style.display = "block";
  
        // Open the link in a new tab
        var link = "https://medium.com/@yukic/revamping-post-order-ratings-experience-for-ubereats-new-verticals-orders-008550c3af44";
        window.open(link, "_blank");
    } 
    // Alert if password is wrong
    else {
        alert("Incorrect password. Please try again.");
    }
}