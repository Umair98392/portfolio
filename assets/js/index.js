window.onscroll = function() {scrollFunction()};

const heroHeight = document.getElementsByClassName("hero")[0].clientHeight;


function scrollFunction() {
  if (document.documentElement.scrollTop > heroHeight/2 ) {
    document.getElementsByClassName("header")[0].style.backgroundColor = "rgba(234, 236, 239, .81)";
    document.getElementsByClassName("header")[0].style.transition= "background-color 1s";
    // document.getElementsByClassName("header")[0].style.border = "1px solid rgb(255,255,255)";

  } else {
    document.getElementsByClassName("header")[0].style.backgroundColor = "#ffffff00";
    // document.getElementsByClassName("header")[0].style.border = "none";
  }
}


