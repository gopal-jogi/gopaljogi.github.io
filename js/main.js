// active menu
let menuIcon = document.querySelector(".menu-icon");
let navlist = document.querySelector(".navlist");
menuIcon.addEventListener("click",()=>{
    menuIcon.classList.toggle("active");
    navlist.classList.toggle("active");
    document.body.classList.toggle("open");
});

// remove navlist
navlist.addEventListener("click",()=>{
    navlist.classList.remove("active");
    menuIcon.classList.remove("active"); 
    document.body.classList.remove("open");   
});

// active menu
let menuLi = document.querySelectorAll("header ul li a");
let section = document.querySelectorAll("section");

function activeMenu(){
    let len = section.length;
    while(--len && window.scrollY + 97 <section[len].offsetTop){}
    menuLi.forEach(sec => sec.classList.remove("active"));
    menuLi[len].classList.add("active");
}
activeMenu()
window.addEventListener("scroll",activeMenu);

// text animation
let text1 = document.querySelector(".second-text");

let textloade = () => {
    setTimeout(() =>{
        text1.textContent= "Python Developer";
    },0);
    setTimeout(() =>{
        text1.textContent= "Web Developer";
    },3750);
    setTimeout(() =>{
        text1.textContent= "DevOps Engineer";
    },7500);
}
    textloade();
    setInterval(textloade,11250);

// rotate text js code 
let text = document.querySelector(".text p");

text.innerHTML = text.innerHTML.split("").map((char,i)=>
    `<b style="transform:rotate(${i * 6.3}deg")>${char}</b>`
).join("");

// about switch botton

const buttons = document.querySelectorAll(".about-btn button");
const contents = document.querySelectorAll(".content");

buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        contents.forEach(content => content.style.display ='none');
        contents[index].style.display = 'block';
        buttons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
    });
});

// srcoll triger
let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".project",
      start: "50% 50%",
      end: "100% 50%", // end after scrolling 500px beyond the start
    //   markers:true,
      pin: true, // pin the trigger element while active
      scrub: 3, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
    },
  });
  tl.to("#scroll-1",
  {
    bottom:"70vh",
  })
  .to("#scroll-1",
  {
    opacity:0,
  })
  .to("#scroll-2",
  {
    opacity:1,
  })
  .to("#scroll-2",
  {
    bottom:"70vh",
  })
  .to("#scroll-2",
  {
    opacity:0,
  })
  .to("#scroll-3",
  {
    opacity:1,
  });
  