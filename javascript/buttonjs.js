document.addEventListener("DOMContentLoaded", function() {
    var firstButton = document.querySelector(".cosulting.hvr-vertical");
    var secondButton = document.getElementById("none");
  
    window.addEventListener("scroll", function() {
      var windowHeight = window.innerHeight;
      var scrollTop = window.pageYOffset;
      var firstButtonTop = firstButton.offsetTop;
  
      if (scrollTop > firstButtonTop + firstButton.offsetHeight - windowHeight) {
        // console.log("ifeeee");
        secondButton.classList.remove("none");
      } else {
        console.log("aea");
        secondButton.classList.add("none");
      }
    });
  });
