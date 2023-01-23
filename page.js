var r18q = getCookie("r18q");

if (r18q == "no") {
  window.location.href = "index.html";
} else {
  console.log("r18_yes");
}
var screen =
  parseFloat(getComputedStyle(document.querySelector(".screen")).height) + "25";
console.log(screen);

let arr1 = document.getElementsByClassName("page-picture");
let arr2 = document.getElementsByClassName("page-picture-w");
let arr3 = document.getElementsByClassName("page-picture-q");

if (/Android | webOS | iPhone /i.test(navigator.userAgent)) {
  for (let i = 0, len = arr1.length; i < len; i++) {
    document.getElementsByClassName("page-picture")[i].style.gridColumn =
      "span 6";
  }
  for (let i = 0, len = arr2.length; i < len; i++) {
    document.getElementsByClassName("page-picture-w")[i].style.gridColumn =
      "span 6";
  }
  for (let i = 0, len = arr3.length; i < len; i++) {
    document.getElementsByClassName("page-picture-q")[i].style.gridColumn =
      "span 6";
  }
} else {
  var get_body_width = parseFloat(
    getComputedStyle(document.querySelector("body")).width
  );
}

if (get_body_width > "500") {
  if (get_body_width > "1020") {
    for (let i = 0, len = arr1.length; i < len; i++) {
      document.getElementsByClassName("page-picture")[i].style.gridColumn =
        "span 2";
    }
  } else {
    for (let i = 0, len = arr1.length; i < len; i++) {
      document.getElementsByClassName("page-picture")[i].style.gridColumn =
        "span 3";
    }
    for (let i = 0, len = arr2.length; i < len; i++) {
      document.getElementsByClassName("page-picture-w")[i].style.gridColumn =
        "span 6";
    }
    for (let i = 0, len = arr3.length; i < len; i++) {
      document.getElementsByClassName("page-picture-q")[i].style.gridColumn =
        "span 6";
    }
  }
} else {
  for (let i = 0, len = arr2.length; i < len; i++) {
    document.getElementsByClassName("page-picture-w")[i].style.gridColumn =
      "span 6";
  }
  for (let i = 0, len = arr3.length; i < len; i++) {
    document.getElementsByClassName("page-picture-q")[i].style.gridColumn =
      "span 6";
  }
}

var turly_height =
  parseFloat(
    getComputedStyle(document.querySelectorAll(".page-grid")[0]).height
  ) -
  screen +
  "px";

var turly_height_1 =
  parseFloat(
    getComputedStyle(document.querySelectorAll(".page-grid")[1]).height
  ) -
  screen +
  "px";

var turly_height_2 =
  parseFloat(
    getComputedStyle(document.querySelectorAll(".page-grid")[2]).height
  ) -
  screen +
  "px";

console.log(turly_height);
console.log(turly_height_1);
console.log(turly_height_2);

document.documentElement.style.setProperty("--turly-height", turly_height);
document.documentElement.style.setProperty("--turly-height-1", turly_height_1);
document.documentElement.style.setProperty("--turly-height-2", turly_height_2);

document.documentElement.style.setProperty("--before-height", "20vh");

function page_back() {
  document.getElementsByClassName("page-grid:focus").className = "page-grid";
}
