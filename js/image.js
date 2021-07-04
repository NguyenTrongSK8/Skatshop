var triangle = document.getElementById("triangle");
var block = document.getElementsByClassName("block")[0];

block.classList.add("playing");

// kiểm tra có playing không, thì dừng
//console.log(block.classList.contains("playing"));
triangle.addEventListener("click", function(e) {
  if (block.classList.contains("playing")) {
    block.classList.replace("playing", "stop");
    block.style.animation = "spin 15s infinite linear";
    block.style.animationPlayState = "paused";

    // style btn
    triangle.style.borderTop = "15px solid transparent";
    triangle.style.borderLeft = "15px solid #eee";
    triangle.style.borderBottom = "15px solid transparent";
    triangle.style.borderRight = "15px solid transparent";
    triangle.style.backgroundColor = "transparent";
  } else {
    block.classList.replace("stop", "playing");
    block.style.animation = "spin 15s infinite linear";

    // style btn
    triangle.style.borderTop = "15px solid #eee";
    triangle.style.borderLeft = "15px solid #eee";
    triangle.style.borderBottom = "15px solid #eee";
    triangle.style.borderRight = "15px solid #eee";
    triangle.style.backgroundColor = "transparent";
  }
});

// var slider = document.getElementsByClassName("slides");
// var slideIndex = 0;

// // responsive
// var myImgList = document.getElementsByTagName("img");
// Array.from(myImgList).forEach(function(item) {
//   console.log(item);
// });

// // nếu ảnh nào cao hơn 300px thì giảm còn 200px
// Array.from(myImgList).forEach(function(item) {
//   if (item.style.height >= 300) {
//     item.style.height = 300;
//   }
// });

// function ShowSlide() {
//   for (i = 0; i < slider.length; i++) {
//     slider[i].style.display = "none";
//   }

//   slider[slideIndex].style.display = "flex";
// }
// ShowSlide();

// // hiển thị ảnh
// function AuToShowSlide() {
//   if (slideIndex >= slider.length - 1) {
//     slideIndex = 0;
//   } else {
//     slideIndex++;
//   }
//   ShowSlide();
// }

// // stop animation

// var itv = setInterval(AuToShowSlide, 3000);
// var playing = 1;

// function stopPlaying() {
//   playing = 0;
//   clearInterval(itv);
// }

// function playingSlide() {
//   playing = 1;
//   itv = setInterval(AuToShowSlide, 3000);
// }

// console.log(btnStop.childNodes[3]);

// // hiển thị nút stop hình vuông
// function showBtnStop() {
//   btnStop.childNodes[3].style.borderTop = "10px solid #eee";
//   btnStop.childNodes[3].style.borderLeft = "10px solid #eee";
//   btnStop.childNodes[3].style.borderBottom = "10px solid #eee";
//   btnStop.childNodes[3].style.borderRight = "10px solid #eee";
//   btnStop.childNodes[3].style.transform = "translate(-10%, 25%)";
// }
// showBtnStop();
// // khi ấn vào thi thay đổi hình dạng
// btnStop.addEventListener("click", function(e) {
//   if (playing) {
//     stopPlaying();
//     this.childNodes[3].style.borderTop = "20px solid transparent";
//     this.childNodes[3].style.borderLeft = "20px solid #eee";
//     this.childNodes[3].style.borderBottom = "20px solid transparent";
//     this.childNodes[3].style.transform = "translate(-10%, -15%)";
//     this.childNodes[3].style.borderRight = "unset";
//   } else {
//     playingSlide();
//     this.childNodes[3].style.borderTop = "10px solid #eee";
//     this.childNodes[3].style.borderLeft = "10px solid #eee";
//     this.childNodes[3].style.borderBottom = "10px solid #eee";
//     this.childNodes[3].style.borderRight = "10px solid #eee";
//     this.childNodes[3].style.transform = "translate(-10%, 25%)";
//   }
// });

// // button stop CSS changes

// // responsive
// var img = document.getElementsByTagName("img");
// $(window).resize(function() {
//   var width = $(window).width();
//   var height = $(window).height();
//   if (height <= 360) {
//     console.log("ok");
//     Array.from(img).forEach(function(item) {
//       item.style.height = "200px";
//       item.style.width = "200px";
//     });
//   }
// });
