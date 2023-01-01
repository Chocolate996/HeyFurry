var r18q = getCookie("r18q");

if (r18q == "no") {
  window.location.href = "index.html";
} else {
  console.log("r18_yes");
}

  let arr1 = document.getElementsByClassName("page-picture");

if (/Android | webOS | iPhone /i.test(navigator.userAgent)) {
  for (let i = 0, len = arr1.length; i < len; i++) {
    document.getElementsByClassName("page-picture")[i].style.gridColumn =
      "span 6";
  }
} else {
  var get_body_width = parseFloat(
    getComputedStyle(document.querySelector("body")).width
  );

  if (get_body_width > "520") {
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
    }
  } else {
  }
}

var turly_height =
  parseFloat(
    getComputedStyle(document.querySelectorAll(".page-grid")[0]).height
  ) + "px";

console.log(turly_height);

document.documentElement.style.setProperty("--turly-height", turly_height);
document.documentElement.style.setProperty("--before-height", "20vh");
