var btnClose = document.getElementById("btn-close");
var listItem = document.getElementsByClassName("item");
var myOverlay = document.getElementById("overlay");

function closeOldVideo(old) {
  return (old.style.display = "none");
}
// còn lỗi chỗ âm thanh

Array.from(listItem).forEach(function (item) {
  item.addEventListener("click", function (e) {
    myOverlay.style.display = "initial";
    if (Array.from(listItem).indexOf(item) === 0) {
      myOverlay.childNodes[3].childNodes[1].style.display = "initial";
    }
    if (Array.from(listItem).indexOf(item) === 1) {
      myOverlay.childNodes[3].childNodes[3].style.display = "initial";
    }
    if (Array.from(listItem).indexOf(item) === 2) {
      myOverlay.childNodes[3].childNodes[5].style.display = "initial";
    }
    if (Array.from(listItem).indexOf(item) === 3) {
      myOverlay.childNodes[3].childNodes[7].style.display = "initial";
    }
    if (Array.from(listItem).indexOf(item) === 4) {
      myOverlay.childNodes[3].childNodes[9].style.display = "initial";
    }
    if (Array.from(listItem).indexOf(item) === 5) {
      myOverlay.childNodes[3].childNodes[11].style.display = "initial";
    }
    if (Array.from(listItem).indexOf(item) === 6) {
      myOverlay.childNodes[3].childNodes[13].style.display = "initial";
    }
    if (Array.from(listItem).indexOf(item) === 7) {
      myOverlay.childNodes[3].childNodes[15].style.display = "initial";
    }
    if (Array.from(listItem).indexOf(item) === 8) {
      myOverlay.childNodes[3].childNodes[17].style.display = "initial";
    }
  });
});

// khi ấn nút close chuyện gì xảy ra
btnClose.addEventListener("click", function (e) {
  // cha nó đóng
  this.parentNode.style.display = "none";
  // tắt âm và ẩn video
  myOverlay.childNodes[3].childNodes[1].muted = "true";
  closeOldVideo(myOverlay.childNodes[3].childNodes[1]);

  myOverlay.childNodes[3].childNodes[3].muted = "true";
  closeOldVideo(myOverlay.childNodes[3].childNodes[3]);

  myOverlay.childNodes[3].childNodes[5].muted = "true";
  closeOldVideo(myOverlay.childNodes[3].childNodes[5]);

  myOverlay.childNodes[3].childNodes[7].muted = "true";
  closeOldVideo(myOverlay.childNodes[3].childNodes[7]);

  myOverlay.childNodes[3].childNodes[9].muted = "true";
  closeOldVideo(myOverlay.childNodes[3].childNodes[9]);

  myOverlay.childNodes[3].childNodes[11].muted = "true";
  closeOldVideo(myOverlay.childNodes[3].childNodes[11]);

  myOverlay.childNodes[3].childNodes[13].muted = "true";
  closeOldVideo(myOverlay.childNodes[3].childNodes[13]);

  myOverlay.childNodes[3].childNodes[15].muted = "true";
  closeOldVideo(myOverlay.childNodes[3].childNodes[15]);

  myOverlay.childNodes[3].childNodes[17].muted = "true";
  closeOldVideo(myOverlay.childNodes[3].childNodes[17]);
});

// suy nghĩ tư duy

// var btnClose = document.getElementsByClassName("btn-close");
// var listItem = document.getElementsByClassName("item");
// var myOverlay = document.getElementsByClassName("overlay");
// var listVideo = document.getElementById("list-videos");
// // ấn nút tắt
// btnClose.addEventListener("click", function(e) {
//   this.parentNode.style.display = "none";
// });
// // xem list  video ở vị trí mấy
// //console.log(listVideo.childNodes);
// // thấy ở vị trí 2n+1

// // lấy vị trí của item, và listvideo
// //console.log(Array.from(listItem).indexOf(item) + "clicked");

// function playVideo() {
//   Array.from(listItem).forEach(function(item) {
//     item.addEventListener("click", function(e) {
//       if (Array.from(listItem).indexOf(item) === 0) {
//         myOverlay.style.display = "initial";
//         listVideo.childNodes[1].style.display = "initial";
//       }
//       if (Array.from(listItem).indexOf(item) === 1) {
//         myOverlay.style.display = "initial";
//         listVideo.childNodes[3].style.display = "initial";
//       }
//     });
//   });
// }
// playVideo();
// closeVideo();

// //console.log(btnClose.nextElementSibling.childNodes[1]);
// // tăt âm thanh khi đóng
// function closeVideo() {
//   btnClose.addEventListener("click", function(e) {
//     btnClose.nextElementSibling.childNodes[1].muted = "true";
//     btnClose.nextElementSibling.childNodes[3].muted = "true";
//   });
// }

// // Array.from(listItem).forEach(function(item) {
// //   item.addEventListener("click", function(e) {

// //     // nếu ấn thì mở overlay lên
// //     myOverlay.style.display = "initial";

// //     console.log(listVideo.childNodes);
// //     // đồng thời hiển thị video đó to to ra
// //   });
// // });

// responsive
let device_height = window.screen.height;
let device_width = window.screen.width;

// let log = console.log;
// myOverlay.id = "overlay_responsive";
// log(myOverlay);

if (device_width <= 576) {
  myOverlay.id = "overlay_responsive";

  Array.from(listItem).forEach(function (item) {
    item.addEventListener("click", function (e) {
      myOverlay.style.display = "initial";
      if (Array.from(listItem).indexOf(item) === 0) {
        myOverlay.childNodes[3].childNodes[1].style.display = "initial";
      }
      if (Array.from(listItem).indexOf(item) === 1) {
        myOverlay.childNodes[3].childNodes[3].style.display = "initial";
      }
      if (Array.from(listItem).indexOf(item) === 2) {
        myOverlay.childNodes[3].childNodes[5].style.display = "initial";
      }
      if (Array.from(listItem).indexOf(item) === 3) {
        myOverlay.childNodes[3].childNodes[7].style.display = "initial";
      }
      if (Array.from(listItem).indexOf(item) === 4) {
        myOverlay.childNodes[3].childNodes[9].style.display = "initial";
      }
      if (Array.from(listItem).indexOf(item) === 5) {
        myOverlay.childNodes[3].childNodes[11].style.display = "initial";
      }
      if (Array.from(listItem).indexOf(item) === 6) {
        myOverlay.childNodes[3].childNodes[13].style.display = "initial";
      }
      if (Array.from(listItem).indexOf(item) === 7) {
        myOverlay.childNodes[3].childNodes[15].style.display = "initial";
      }
      if (Array.from(listItem).indexOf(item) === 8) {
        myOverlay.childNodes[3].childNodes[17].style.display = "initial";
      }
    });
  });

  // khi ấn nút close chuyện gì xảy ra
  btnClose.addEventListener("click", function (e) {
    // cha nó đóng
    this.parentNode.style.display = "none";
    // tắt âm và ẩn video
    myOverlay.childNodes[3].childNodes[1].muted = "true";
    closeOldVideo(myOverlay.childNodes[3].childNodes[1]);

    myOverlay.childNodes[3].childNodes[3].muted = "true";
    closeOldVideo(myOverlay.childNodes[3].childNodes[3]);

    myOverlay.childNodes[3].childNodes[5].muted = "true";
    closeOldVideo(myOverlay.childNodes[3].childNodes[5]);

    myOverlay.childNodes[3].childNodes[7].muted = "true";
    closeOldVideo(myOverlay.childNodes[3].childNodes[7]);

    myOverlay.childNodes[3].childNodes[9].muted = "true";
    closeOldVideo(myOverlay.childNodes[3].childNodes[9]);

    myOverlay.childNodes[3].childNodes[11].muted = "true";
    closeOldVideo(myOverlay.childNodes[3].childNodes[11]);

    myOverlay.childNodes[3].childNodes[13].muted = "true";
    closeOldVideo(myOverlay.childNodes[3].childNodes[13]);

    myOverlay.childNodes[3].childNodes[15].muted = "true";
    closeOldVideo(myOverlay.childNodes[3].childNodes[15]);

    myOverlay.childNodes[3].childNodes[17].muted = "true";
    closeOldVideo(myOverlay.childNodes[3].childNodes[17]);
  });
}

if (device_width <= 576 && device_width <= 768) {
  myOverlay.id = "overlay_responsive";

  Array.from(listItem).forEach(function (item) {
    item.addEventListener("click", function (e) {
      myOverlay.style.display = "initial";
      if (Array.from(listItem).indexOf(item) === 0) {
        myOverlay.childNodes[3].childNodes[1].style.display = "initial";
      }
      if (Array.from(listItem).indexOf(item) === 1) {
        myOverlay.childNodes[3].childNodes[3].style.display = "initial";
      }
      if (Array.from(listItem).indexOf(item) === 2) {
        myOverlay.childNodes[3].childNodes[5].style.display = "initial";
      }
      if (Array.from(listItem).indexOf(item) === 3) {
        myOverlay.childNodes[3].childNodes[7].style.display = "initial";
      }
      if (Array.from(listItem).indexOf(item) === 4) {
        myOverlay.childNodes[3].childNodes[9].style.display = "initial";
      }
      if (Array.from(listItem).indexOf(item) === 5) {
        myOverlay.childNodes[3].childNodes[11].style.display = "initial";
      }
      if (Array.from(listItem).indexOf(item) === 6) {
        myOverlay.childNodes[3].childNodes[13].style.display = "initial";
      }
      if (Array.from(listItem).indexOf(item) === 7) {
        myOverlay.childNodes[3].childNodes[15].style.display = "initial";
      }
      if (Array.from(listItem).indexOf(item) === 8) {
        myOverlay.childNodes[3].childNodes[17].style.display = "initial";
      }
    });
  });

  // khi ấn nút close chuyện gì xảy ra
  btnClose.addEventListener("click", function (e) {
    // cha nó đóng
    this.parentNode.style.display = "none";
    // tắt âm và ẩn video
    myOverlay.childNodes[3].childNodes[1].muted = "true";
    closeOldVideo(myOverlay.childNodes[3].childNodes[1]);

    myOverlay.childNodes[3].childNodes[3].muted = "true";
    closeOldVideo(myOverlay.childNodes[3].childNodes[3]);

    myOverlay.childNodes[3].childNodes[5].muted = "true";
    closeOldVideo(myOverlay.childNodes[3].childNodes[5]);

    myOverlay.childNodes[3].childNodes[7].muted = "true";
    closeOldVideo(myOverlay.childNodes[3].childNodes[7]);

    myOverlay.childNodes[3].childNodes[9].muted = "true";
    closeOldVideo(myOverlay.childNodes[3].childNodes[9]);

    myOverlay.childNodes[3].childNodes[11].muted = "true";
    closeOldVideo(myOverlay.childNodes[3].childNodes[11]);

    myOverlay.childNodes[3].childNodes[13].muted = "true";
    closeOldVideo(myOverlay.childNodes[3].childNodes[13]);

    myOverlay.childNodes[3].childNodes[15].muted = "true";
    closeOldVideo(myOverlay.childNodes[3].childNodes[15]);

    myOverlay.childNodes[3].childNodes[17].muted = "true";
    closeOldVideo(myOverlay.childNodes[3].childNodes[17]);
  });
}
