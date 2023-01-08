if (getCookie("r18q") == "no") {
  window.location.href = "index.html";
} else {
  console.log("r18_yes");
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
      "url(/img/img2.jpg)";
  }
  if (f == 1) {
    document.getElementsByClassName("img")[0].style.backgroundImage =
      "url(/img/img3.jpg)";
  }
  if (f == 2) {
    document.getElementsByClassName("img")[0].style.backgroundImage =
      "url(/img/img4.jpg)";
  }
  if (f == 3) {
    document.getElementsByClassName("img")[0].style.backgroundImage =
      "url(/img/img5.jpg)";
  }
  if (f == 4) {
    window.location.href = "go.html";
    f = 0;
  }
  f++;
}

function goD() {
  document.cookie = "go1=ok; expires=Thu, 18 Dec 2043 12:00:00 GMT";
}
function goO() {
  document.cookie = "go2=ok; expires=Thu, 18 Dec 2043 12:00:00 GMT";
}
function goC() {
  document.cookie = "go3=ok; expires=Thu, 18 Dec 2043 12:00:00 GMT";
}
function goG() {
  document.cookie = "gog=no; expires=Thu, 18 Dec 2043 12:00:00 GMT";
}
