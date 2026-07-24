/*==================================================
BELOCHKA
SCRIPT.JS
==================================================*/


document.addEventListener("DOMContentLoaded",()=>{


/*==================================================
REVEAL ANIMATION
==================================================*/


const revealElements = document.querySelectorAll(
`
section,
.hero-left,
.hero-right,
.about-image,
.about-content,
.split-content,
.split-image,
.category,
.advantage,
.review,
.gallery-track img
`
);



revealElements.forEach(el=>{

    el.classList.add("reveal");

});



const revealObserver = new IntersectionObserver((entries)=>{


    entries.forEach(entry=>{


        if(entry.isIntersecting){


            entry.target.classList.add("show");


            revealObserver.unobserve(entry.target);


        }


    });


},{


    threshold:.15,

    rootMargin:"0px 0px -80px 0px"


});



revealElements.forEach(el=>{

    revealObserver.observe(el);

});





/*==================================================
HEADER SCROLL
==================================================*/


const header = document.querySelector(".header");


function headerScroll(){


    if(window.scrollY > 50){


        header.classList.add("scrolled");


    }else{


        header.classList.remove("scrolled");


    }


}



headerScroll();


window.addEventListener(
"scroll",
headerScroll
);





/*==================================================
SMOOTH SCROLL
==================================================*/


document.querySelectorAll(
'a[href^="#"]'
)
.forEach(link=>{


    link.addEventListener(
    "click",
    e=>{


        const target =
        document.querySelector(
        link.getAttribute("href")
        );


        if(target){


            e.preventDefault();


            target.scrollIntoView({

                behavior:"smooth",

                block:"start"

            });


        }


    });


});





/*==================================================
MOBILE MENU
==================================================*/


const menuButton =
document.querySelector(".menu-toggle");


const nav =
document.querySelector("nav");



if(menuButton){


menuButton.addEventListener(
"click",
()=>{


    nav.classList.toggle("active");


    menuButton.classList.toggle("open");


});


}





/*==================================================
HERO PARALLAX
==================================================*/


const heroImage =
document.querySelector(".hero-right img");



let mouseX = 0;

let mouseY = 0;


if(heroImage && window.innerWidth > 768){



window.addEventListener(
"mousemove",
(e)=>{


mouseX =
(e.clientX / window.innerWidth - .5);


mouseY =
(e.clientY / window.innerHeight - .5);



heroImage.style.transform =

`
translate(
${mouseX * 18}px,
${mouseY * 18}px
)
scale(1.03)
`;



});



}





/*==================================================
BEFORE AFTER SLIDER
==================================================*/


const compare =
document.querySelector(".compare");


const afterImage =
document.querySelector(
".compare img:last-child"
);


const slider =
document.querySelector(".slider");



if(compare && afterImage && slider){



compare.addEventListener(
"mousemove",
(e)=>{


const rect =
compare.getBoundingClientRect();



let position =
((e.clientX - rect.left)
/
rect.width)
*100;



position =
Math.max(
0,
Math.min(
100,
position
)
);



afterImage.style.clipPath =

`
inset(
0 0 0 ${position}%
)
`;



slider.style.left =
position+"%";



});





compare.addEventListener(
"touchmove",
(e)=>{


const touch =
e.touches[0];


const rect =
compare.getBoundingClientRect();



let position =
((touch.clientX - rect.left)
/
rect.width)
*100;



position =
Math.max(
0,
Math.min(
100,
position
)
);



afterImage.style.clipPath =

`
inset(
0 0 0 ${position}%
)
`;



slider.style.left =
position+"%";



});



}






/*==================================================
IMAGE HOVER DEPTH
==================================================*/


document.querySelectorAll(
".category img,.gallery-track img"
)
.forEach(img=>{


img.addEventListener(
"mousemove",
e=>{


const rect =
img.getBoundingClientRect();


const x =
e.clientX - rect.left;


const y =
e.clientY - rect.top;



img.style.transform =

`
scale(1.05)
translate(
${(x-rect.width/2)/40}px,
${(y-rect.height/2)/40}px
)
`;



});



img.addEventListener(
"mouseleave",
()=>{


img.style.transform="";


});


});






/*==================================================
BUTTON RIPPLE
==================================================*/


document.querySelectorAll(
".btn,.primary,.secondary"
)
.forEach(button=>{


button.addEventListener(
"click",
function(e){


const circle =
document.createElement("span");



const rect =
this.getBoundingClientRect();



const size =
Math.max(
rect.width,
rect.height
);



circle.style.width =
size+"px";


circle.style.height =
size+"px";


circle.style.left =
e.clientX -
rect.left -
size/2
+"px";


circle.style.top =
e.clientY -
rect.top -
size/2
+"px";



circle.style.position="absolute";

circle.style.borderRadius="50%";

circle.style.background=
"rgba(255,255,255,.35)";

circle.style.transform=
"scale(0)";

circle.style.transition=
".7s";

circle.style.pointerEvents=
"none";



this.appendChild(circle);



requestAnimationFrame(()=>{

circle.style.transform=
"scale(3)";

circle.style.opacity="0";


});



setTimeout(()=>{

circle.remove();


},700);



});


});






/*==================================================
SCROLL TOP BUTTON
==================================================*/


const topButton =
document.createElement("button");


topButton.className =
"scroll-top";


topButton.innerHTML =
"↑";



document.body.appendChild(topButton);



window.addEventListener(
"scroll",
()=>{


if(window.scrollY > 700){


topButton.classList.add("show");


}else{


topButton.classList.remove("show");


}


});



topButton.onclick=()=>{


window.scrollTo({

top:0,

behavior:"smooth"

});


};





});
