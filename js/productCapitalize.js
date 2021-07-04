// viết hoa chữ cái đầu tất cả sản phẩm
var listItem = document.querySelectorAll("#right .box-content strong");
var myHamberger = document.getElementsByClassName("hamberger")[0];
var myLeft = document.getElementById("left");
Array.from(listItem).forEach(function(item) {
  item.style.textTransform = "capitalize";
});

// nav animation ôn lại
var nav = document.getElementsByTagName("nav")[0];
var scrollTemp = 0;
window.addEventListener("scroll", function(e) {
  var scrollVal = document.documentElement.scrollTop;

  if (scrollVal === 0) {
    // nav.style.transform = "scale(1)";
    nav.style.boxShadow = "unset";
    nav.style.display = "block";
  }
  if (scrollVal > scrollTemp) {
    // nav.style.transform = "scale(0.9)";
    nav.style.boxShadow = "black 2px 4px 2px";
    nav.style.display = "block";
  } else {
  }
  scrollTemp = scrollVal;
});

// btn - top animation on lai
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
      btnTop.style.top = "80%";
      btnTop.style.display = "flex";
    }
    if (scrolValue < 400 && width < 576) {
      btnTop.style.top = "100%";
    }
  });
}
showBtnTop();

// không được dùng JQueryy

// $(window).resize(function() {
//   // lấy thông số
//   var width = $(window).width();
//   var height = $(window).height();

//   if (width <= 576) {
//     Array.from(listItem).forEach(function(item) {
//       item.style.fontSize = "10px";
//     });
//     myHamberger.style.display = "block";
//     myHamberger.addEventListener("click", function(e) {
//       myLeft.style.display = "flex";
//       myLeft.style.zIndex = "10";
//     });
//   }
// });

// chưa nghĩ ra

// responsive
// $(window).resize(function() {
//   // lấy thông số
//   var width = $(window).width();
//   var height = $(window).height();

//   if (width <= 576) {
//     Array.from(listItem).forEach(function(item) {
//       item.style.fontSize = "10px";
//     });
//   }

//   // tạo hamberger thanh lọc

//   var myHamberger = document.createElement("span");

//   var positionToStickTheHamberger = document.getElementsByTagName("main")[0];

//   var myItag = document.createElement("i");
//   myItag.classList.add("material-icons");
//   myItag.textContent = "view_headline";

//   myHamberger.appendChild(myItag);
//   positionToStickTheHamberger.appendChild(myHamberger);
//   console.log(positionToStickTheHamberger);
//   console.log(myItag);
//   console.log(myHamberger);
// });
