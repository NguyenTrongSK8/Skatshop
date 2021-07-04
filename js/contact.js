// tạo nút trở về trang trước
var btnGoBack = document.getElementById("btn-goBack");

btnGoBack.addEventListener("click", goBack);

function goBack() {
  window.history.back();
}

// validate form
var myNotice = document.getElementById("notice");
var tk = document.getElementById("tk");
var mk = document.getElementById("mk");
var email = document.getElementById("email");
var submit = document.getElementById("submitt");
console.log(submit);
console.log(tk.value);
submit.addEventListener("click", function(e) {
  if (validateTaiKhoan(tk.value) === false) {
    myNotice.innerHTML = "Tài khoản phải lớn hơn 6 ký tự";
  } else {
    myNotice.innerHTML = "";
  }
  if (validateMatKhau(mk.value) === false) {
    myNotice.innerHTML = "Mật khẩu phải lớn hơn 6 ký tự";
  } else {
    myNotice.innerHTML = "";
  }
  //   if (validateEmail(email.value) === false) {
  //     myNotice.innerHTML = "Email không hợp lệ";
  //   } else {
  //     myNotice.innerHTML = "";
  //   }
});

function validateTaiKhoan(tk) {
  if (tk.length > 6) {
    return true;
  } else return false;
}

function validateMatKhau(mk) {
  if (mk.length > 6) {
    return true;
  } else return false;
}

function validateEmail(email) {
  // có 1 @
  // trước @ có text sau @ có text
  // phải có dấu .
  // sau . phải có text
  //
  var count = 0;
  var pos = 0;
  var flag = 0;
  var c1 = 0;
  var c2 = 0;
  for (i = 0; i < email.length; i++) {
    if (email[i] === "@") {
      count++;
      pos = i;
    }
  }

  for (i = 0; i < pos; i++) {
    c1++;
  }

  for (i = pos; i < email.length; i++) {
    c2++;
    if (email[i] === ".") {
      flag = 1;
    }
  }
  return (
    count === 1 &&
    pos !== 0 &&
    pos !== email.length - 1 &&
    flag === 1 &&
    c1 >= 6 &&
    c2 >= 6
  );
}

// nhấp nháy
var flickerContent = "Welcome to mystery world";
var realFlicker = "|";
var flickerDom = document.getElementById("flickerDom");

console.log(flickerDom);
function putTextIn(char) {
  flickerDom.textContent += char;
}

var flickerIndex = 0;
function autoPut() {
  if (flickerIndex >= flickerContent.length) {
    flickerIndex = 0;
    flickerDom.textContent = "";
  } else {
    putTextIn(flickerContent[flickerIndex]);

    flickerIndex++;
  }
}
setInterval(autoPut, 100);
