function question() {
  document.cookie = "r18q=no; expires=Thu, 18 Dec 2043 12:00:00 GMT";
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

var r18q = getCookie("r18q");

if (r18q == "no") {
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
