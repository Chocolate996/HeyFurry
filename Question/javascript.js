function question() {
  document.cookie = "r18q=no; expires=Thu, 18 Dec 2043 12:00:00 GMT";
}
function questionok() {
  document.cookie = "r18q=yes; expires=Thu, 18 Dec 2043 12:00:00 GMT";
  window.location.href = "test.html";
}

function getCookie(name) {
  if (document.cookie.length > 0) {
    start = document.cookie.indexOf(name + "=");
    if (start != -1) {
      start = start + name.length + 1;
      end = document.cookie.indexOf(";", start);
      if (end == -1) end = document.cookie.length;
      return decodeURIComponent(document.cookie.substring(start, end));
    }
  }
  return "";
}

if (getCookie("delC") == "yes") {
  document.getElementById("delC").style.opacity = "0";
} else {
  function delCookie() {
    document.cookie = "delC=yes; expires=Thu, 18 Dec 2043 12:00:00 GMT";
    document.cookie = "r18q=no; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    window.location.href = "index.html";
  }
}

if (getCookie("r18q") == "no") {
  document.getElementById("nor18").className = "url-box-no";
  document.getElementById("nor18").setAttribute("href", "#url");
  document.getElementById("nor18").innerText = "抱歉，你未满18岁";
} else {
  console.log("r18_yes");
  function r18() {
    document.getElementById("nav").className = "nav-screen";
    document.getElementsByClassName("nav-logo")[0].style.filter = "blur(10px)";
    document.getElementsByClassName("nav-logo")[0].style.opacity = "0";
    document.getElementsByClassName("r-18")[0].style.filter = "blur(0px)";
    document.getElementsByClassName("r-18")[0].style.opacity = "1";
  }
}

if (getCookie("r18can") == "no") {
  document.getElementById("nor18").className = "url-box-no";
  document.getElementById("nor18").setAttribute("href", "#url");
  document.getElementById("nor18").innerText = "抱歉，你不能接受";
} else {
  console.log("r18can_yes");
}

//mark样式
let observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate");
      observer.unobserve(entry.target);
    }
  });
});

document.querySelectorAll("mark").forEach((mark) => {
  observer.observe(mark);
});
