if (getCookie("r18q") == "yes") {
} else {
  window.location.href = "index.html";
}

if (getCookie("r18can") == "no") {
  window.location.href = "index.html";
} else {
  console.log("r18can_yes");
}

function r18can() {
  document.cookie = "r18can=no; expires=Thu, 18 Dec 2043 12:00:00 GMT";
  window.location.href = "index.html";
}

var a = ["1111", "22222", "3333", "44444"];
var f = 0;
function ok_1() {
  if (f == 0) {
    document.getElementsByClassName("img")[0].style.backgroundImage =
      "url(https://chocolate996.github.io/HeyFurry/Question/img/img2.jpg)";
    document.getElementsByClassName("ing")[0].style.width = "40%";
  }
  if (f == 1) {
    document.getElementsByClassName("img")[0].style.backgroundImage =
      "url(https://chocolate996.github.io/HeyFurry/Question/img/img3.jpg)";
      document.getElementsByClassName("ing")[0].style.width = "60%";
  }
  if (f == 2) {
    document.getElementsByClassName("img")[0].style.backgroundImage =
      "url(https://chocolate996.github.io/HeyFurry/Question/img/img4.jpg)";
      document.getElementsByClassName("ing")[0].style.width = "80%";
  }
  if (f == 3) {
    document.getElementsByClassName("img")[0].style.backgroundImage =
      "url(https://chocolate996.github.io/HeyFurry/Question/img/img5.jpg)";
      document.getElementsByClassName("ing")[0].style.width = "100%";
  }
  if (f == 4) {
    window.location.href = "go.html";
    f = 0;
  }
  f++;
}