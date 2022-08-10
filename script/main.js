let indexVal=1;

showImg(indexVal);

function btn_slide(e){
    showImg(indexVal=e)
}

function side_slide(e){
    showImg(indexVal+=e)
}


function showImg(e){
    let i;
    let img=document.querySelectorAll(".poster");
    let sliders=document.querySelectorAll(".circle-btn span");
    if(e>img.length) { indexVal=1}
    if(e<1) { indexVal=img.length}
    for(i=0;i<img.length;i++){
        img[i].style.display="none";
    }
    for(i=0;i<sliders.length;i++){
        sliders[i].style.background="transparent";
    }
    img[indexVal-1].style.display="flex";
    sliders[indexVal-1].style.background="#c4c1c1";
    sliders[indexVal-1].style.borderColor="#c4c1c1";
}
let j=1;

setInterval( ()=>{
    btn_slide(j)
    j++;
    if(j>4) j=0;
},4000)


/////////////////////////////////////////
let menu_icon=document.querySelector(".list");
let menu=document.querySelector(".nav-app");

menu_icon.addEventListener("click",()=>{
    menu.classList.toggle("show")
})

var swiper = new Swiper(".boxes", {
    spaceBetween: 20,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 9000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        450: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 4,
        },
    },
});
AOS.init();

