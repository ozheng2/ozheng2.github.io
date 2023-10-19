window.onscroll = function() {myFunction()};

const navbar = document.getElementById("topnav");
const abme = document.getElementById("AboutMeHead");
const sticky = abme.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
  //position of the welcome button when pressed: 866
}