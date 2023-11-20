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
      end: "200% 50%", // end after scrolling 500px beyond the start
    //   markers:true,
      pin: true, // pin the trigger element while active
      scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
    },
  });
  tl.to("#scroll-1",
  {
    bottom:"50vh",
  })
  .to("#scroll-1",
  {
    opacity:0,
  })
  .to("#scroll-2",
  {
    opacity:1,
  },'pair1')
  .to(".phone-img",
  {
    x:"-556",
  },'pair1')
  .to("#scroll-2",
  {
    bottom:"50vh",
  })
  .to("#scroll-2",
  {
    opacity:0,
  })
  .to("#scroll-3",
  {
    opacity:1,
  },'pair2')
  .to(".phone-img",
  {
    x:"-1112",
  },'pair2');
  

const first_skill = document.querySelector(".skills:first-child");
const sk_counters = document.querySelectorAll(".counter span");
const progress_bars = document.querySelectorAll(".skillsProgres svg circle");

window.addEventListener("scroll",()=>{
    if(!skillsPlayed)
    skillsCounter();
})


function hasReached(el){
    let topPosition = el.getBoundingClientRect().top;
    if(window.innerHeight >= topPosition + el.offsetHeight)return true;
    return false;
}

function updateCount(num,maxNum){
    let currentNum = +num.innerText;
    
    if(currentNum < maxNum){
        num.innerText = currentNum + 1;
        setTimeout(()=>{
            updateCount(num,maxNum)
        },12)
    }
}


let skillsPlayed = false;

function skillsCounter(){
    if(!hasReached(first_skill))return;
    skillsPlayed = true;
    sk_counters.forEach((counter,i)=>{
        let target = +counter.dataset.target;
        let strokeValue = 465 - 465 * (target / 100);

        progress_bars[i].style.setProperty("--target",strokeValue);

        setTimeout(()=>{
            updateCount(counter,target);
        },400)
    });

    progress_bars.forEach(p => p.style.animation = "progress 2s ease-in-out forwards");
}


// side progress bar 

let calcScrollValue = ()=>{
    let scrollProgress = document.getElementById("progress");
    let pos = document.documentElement.scrollTop;

    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100)/calcHeight);
    
    if(pos > 100){
        scrollProgress.style.display = "grid";
    }else{
        scrollProgress.style.display = "none";
    }

    scrollProgress.addEventListener("click",()=>{
        document.documentElement.scrollTop = 0;
    });

    scrollProgress.style.background = `conic-gradient(#000 ${scrollValue}%,#e6006d ${scrollValue}%)`;
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;




// scroll reveal

ScrollReveal({ 
    distance:"90px",
    duration:2000,
    delay:200,
    // reset: true ,
});


ScrollReveal().reveal('.my-info,.main-text,.proposal,.heading', { origin: "top" });
ScrollReveal().reveal('.about-img,.fillter-buttons,.contact-info', { origin: "left" });
ScrollReveal().reveal('.about-content,.skillsProgres', { origin: "right" });
ScrollReveal().reveal('.allServices,.portfolio-gallery,footer,.img-my', { origin: "bottom" });

