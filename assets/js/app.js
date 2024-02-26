
swiper3d();
popupro();

portfolio();
inputfooter();
// swiper pro
function swiper3d(){
  var TrandingSlider = new Swiper('.tranding-slider', {
    centeredSlides: 1,
    loop: true,
    slidesPerView: 'auto',
    
    
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });
  //swiper about us
  var swiper2 = new Swiper(".mySwiper2", {
    loop: true,
    
    slidesPerView: 'auto',
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  
  });
}
  

// popup-pro
function popupro(){
  const images = [...document.querySelectorAll('.image')];
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
}

// end-popup
//swiper 3d
  

//============

function inputfooter(){
  const inputs = document.querySelectorAll(".input");
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

}

var $galleryContainer = $('.gallery').isotope({
  filter: '.item',
  animationOptions:{
    queue: true
  }
})

$('.button-group .button').on('click', function(){
  $('.button-group .button').removeClass('active');
  $(this).addClass('active');

  var value = $(this).attr('data-filter');
  $galleryContainer.isotope({
    filter: value ,
    animationOptions:{
      queue: true
    }
  })
  return false
})
