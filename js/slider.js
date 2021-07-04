var slides = document.getElementsByClassName("slides");

var nextBtn = document.getElementById("next-btn");
var prevBtn = document.getElementById("prev-btn");

var slidesIndex = 0;

function hienThiSlide() {
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slidesIndex].style.display = "block";
}
hienThiSlide();
// Add sự kiện click cho nút ấn qua phải
nextBtn.addEventListener("click", function(e) {
  if (slidesIndex >= slides.length - 1) {
    slidesIndex = 0;
  } else {
    slidesIndex++;
  }
  hienThiSlide();
});
// tương tự nút ấn qua trái
prevBtn.addEventListener("click", function(e) {
  if (slidesIndex <= 0) {
    slidesIndex = slides.length - 1;
  } else {
    slidesIndex--;
  }
  hienThiSlide();
});
function hienThiSlideSau() {
  if (slidesIndex >= slides.length - 1) {
    slidesIndex = 0;
  } else {
    slidesIndex++;
  }
  hienThiSlide();
}
setInterval(hienThiSlideSau, 5000);

// nav animation
var nav = document.getElementsByTagName("nav")[0];

var scrollTemp = 0;
window.addEventListener("scroll", function(e) {
  var scrollValue = document.documentElement.scrollTop;
  // if ((scrollValue > 1200) & (scrollValue < 2500)) {
  //   nav.style.height = "0px";
  // }
  // console.log(scrollValue);
  if (scrollValue === 0) {
    //  nav.style.transform = "scale(1)";
    nav.style.boxShadow = "unset";
    nav.style.display = "block";
  }
  if (scrollValue > scrollTemp) {
    //    nav.style.transform = "scale(0.9)";
    nav.style.boxShadow = "black 2px 4px 2px";
    nav.style.display = "block";
  } else {
    //   console.log("di len");
  }
  scrollTemp = scrollValue;
});

// btn to top animation
var btnTop = document.getElementsByClassName("btn-top")[0];
// get width and heigth device
var width = Math.max(
  document.documentElement.clientWidth,
  window.innerWidth || 0
);
var height = Math.max(
  document.documentElement.clientHeight,
  window.innerHeight || 0
);
function showBtnTop() {
  btnTop.style.top = "100%";
  var scrollTemp = 0;
  window.addEventListener("scroll", function(e) {
    var scrolValue = document.documentElement.scrollTop;

    if (scrolValue > 1200) {
      btnTop.style.top = "80%";
      btnTop.style.display = "flex";
    }
    if (scrolValue < 1200) {
      btnTop.style.top = "100%";
    }
    // mobile
    if (scrolValue > 400 && width < 576) {
      btnTop.style.top = "70%";
      btnTop.style.display = "flex";
    }
    if (scrolValue < 400 && width < 576) {
      btnTop.style.top = "100%";
    }
  });
}
showBtnTop();

// moblie check

// var scrollTemp = 0;
// var nav = document.getElementsByTagName("nav")[0];

// window.addEventListener("scroll", function(event) {
//   var scrollValue = document.documentElement.scrollTop;
//   if (scrollValue > scrollTemp) {
//     console.log("Di xuong");
//     nav.style.background = "black";
//     nav.style.transform = "scale(10%)";
//   } else {
//     console.log("Di len");
//     nav.style.background = "lightgreen";
//     nav.style.transform = "scale(100%)";
//   }
//   scrollTemp = scrollValue;
// });
