const donateButton = document.querySelector(".cosulting.hvr-vertical");
const root = document.querySelector(".top-bar")
const floatingDonateButton=document.querySelector("#none")

let observer=new IntersectionObserver((enteries)=>{
  // console.log(enteries[0].isIntersecting);
  floatingDonateButton.classList.toggle("active")
})

observer.observe(donateButton)