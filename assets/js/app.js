// counting project
const images = [...document.querySelectorAll('.image')];

let valueDisplays = document.querySelectorAll(".num");
let interval = 4000;
valueDisplays.forEach((valueDisplay) => {
let startValue = 0;
let endValue = parseInt(valueDisplay.getAttribute("data-val"));
let duration = Math.floor(interval / endValue);
let counter = setInterval(function () {
    startValue += 1;
    valueDisplay.textContent = startValue+"+";
    if (startValue == endValue) {
    clearInterval(counter);
    }
}, duration);
});
// swiper pro
var TrandingSlider = new Swiper('.tranding-slider', {
  centeredSlides: 1,
  loop: true,
  slidesPerView: 'auto',
  
  
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});

  

// popup-pro
const popup = document.querySelector('.popup');
const closeBtn = document.querySelector('.close-btn');
const imageName = document.querySelector('.image-name');
const largeImage = document.querySelector('.large-image');
const imageIndex = document.querySelector('.index');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

let index = 0; // will track our current image;

images.forEach((item, i) => {
  item.addEventListener('click', () => {
      updateImage(i);
      popup.classList.toggle('active');
    })
})

const updateImage = (i) => {
  let path = `assets/img/project/${i+1}.png`; 
  largeImage.src = path;

  imageIndex.innerHTML = `0${i+1}`;
  index = i;
}

closeBtn.addEventListener('click', () => {
  popup.classList.toggle('active');
})

leftArrow.addEventListener('click', () => {
  if(index > 0){
      updateImage(index - 1);
  }
})

rightArrow.addEventListener('click', () => {
  if(index < images.length - 1){
      updateImage(index + 1);
  }
})

// end-popup
//swiper 3d
// var swiper = new Swiper(".mySwiper", {
//   loop: true,
//   spaceBetween: 10,
//   slidesPerView: 7,
//   freeMode: true,
//   watchSlidesProgress: true,
//   navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
// });
// var swiper2 = new Swiper(".mySwiper2", {
//   loop: true,
//   spaceBetween: 10,
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   thumbs: {
//     swiper: swiper,
//   },
// });const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});
