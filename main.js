const nav=document.querySelector(".navr");
const btn=document.querySelector(".fa-bars");
const html=document.querySelector("html");
const nav2=document.querySelector("nav");
btn.addEventListener('click',()=>{
nav.classList.add("active-bar")

html.classList.add("stop-scrolling");

})
const btn2=document.querySelector(".navr i");
btn2.addEventListener('click',()=>{
    nav.classList.remove("active-bar")
    html.classList.remove("stop-scrolling");


})
document.addEventListener('click', function(event) {
   
    if (!(nav2).contains(event.target)) {
      // Do something when clicked outside the target element
      nav.classList.remove("active-bar")
      html.classList.remove("stop-scrolling");
    }
  });

