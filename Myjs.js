// // javascript codes

var mediaXxl = window.matchMedia("(min-width: 1320.1px)");
var mediaXl = window.matchMedia("(max-width: 1320px) and (min-width: 960.1px)");
var mediaLg = window.matchMedia("(max-width: 960px) and (min-width: 720.1px)");
var mediaMd = window.matchMedia("(max-width: 720px) and (min-width: 540.1px)");
var mediaSm = window.matchMedia("(max-width: 540px)");

// slideshow header background

var imagesXxl = [
  "Images/bg-xxl/1.jpg",
  "Images/bg-xxl/2.jpg",
  "Images/bg-xxl/3.jpg",
  "Images/bg-xxl/4.jpg",
];
var imagesXL = [
  "Images/bg-xl/1.jpg",
  "Images/bg-xl/2.jpg",
  "Images/bg-xl/3.jpg",
  "Images/bg-xl/4.jpg",
];
var imagesLg = [
  "Images/bg-lg/5.jpg",
  "Images/bg-lg/6.jpg",
  "Images/bg-lg/7.jpg",
  "Images/bg-lg/8.jpg",
];
var imagesMd = [
  "Images/bg-md/9.jpg",
  "Images/bg-md/10.jpg",
  "Images/bg-md/11.jpg",
  "Images/bg-md/12.jpg",
];
var imagesSm = [
  "Images/bg-sm/13.jpg",
  "Images/bg-sm/14.jpg",
  "Images/bg-sm/15.jpg",
  "Images/bg-sm/16.jpg",
];

var Numbers = [1, 2, 3, 4];

var slides = document.getElementById("slide-show");
var Counter = document.getElementById("counter");



function ChangeBg(Imagepack, time_Second) {
  var ImgCounter = 0;
  setInterval(function () {
    slides.style.backgroundImage = "url(" + Imagepack[ImgCounter] + ")";
    Counter.innerText = "0" + Numbers[ImgCounter];

    if (Imagepack == imagesXL || imagesXxl) {
      if (ImgCounter == 3) {
        slides.style.backgroundPosition = "left center";
      } else if (ImgCounter == 2) {
        slides.style.backgroundPosition = "center top";
      } else {
        slides.style.backgroundPosition = "left top";
      }
    } else {
      slides.style.backgroundPositionX = "left";
      slides.style.backgroundPositionY = "center";
    }
    ImgCounter = ImgCounter + 1;
    if (ImgCounter == Imagepack.length) {
      ImgCounter = 0;
    }
  }, Number(time_Second) * 1000);
}

if (mediaXxl.matches) {
  ChangeBg(imagesXxl, 5);
} else if (mediaXl.matches) {
  ChangeBg(imagesXL, 5);
} else if (mediaLg.matches) {
  ChangeBg(imagesLg, 5);
} else if (mediaMd.matches) {
  ChangeBg(imagesMd, 5);
} else if (mediaSm.matches) {
  ChangeBg(imagesSm, 5);
} else {
  console.log("Not found");
}

//when you learn jquery fix this (change bg slide with btn)
// cmt: btn slide

/*  function changeslide(n){
  i+= n;
} */

// hide and show social boxes in left header and move right header to left

var SocialIcon = document.getElementsByClassName("social-icon")[0];
var HeaderContent = document.getElementsByClassName("header-content")[0];
var HeaderBrand = document.getElementsByClassName("Mybrand")[0];
var ThreeLines = document.getElementsByClassName("three-lines")[0];

var SocialCounter = 0;

function ExcuteSocial() {
  if (SocialCounter == 0) {
    HideSocial();
    SocialCounter++;
  } else if (SocialCounter == 1) {
    ShowSocial();
    SocialCounter = 0;
  }
}

function HideSocial() {
  SocialIcon.style.display = "none";
  HeaderContent.style.left = "-6rem";
  HeaderBrand.style.margin = "-6rem";
  HeaderBrand.style.marginTop = "0rem";
  ThreeLines.style.left = "-5rem";
}
function ShowSocial() {
  SocialIcon.style.display = "flex";
  HeaderContent.style.left = "0rem";
  HeaderBrand.style.margin = "0rem";
  ThreeLines.style.left = "0rem";
}

// Main Show and hide function

var SOHCounter = 0;

function ShowOrHide(Showfunc, Hidefunc, ...Element) {
  if (SOHCounter == 0) {
    Showfunc(...Element);
    SOHCounter++;
  } else if (SOHCounter == 1) {
    Hidefunc(...Element);
    SOHCounter = 0;
  }
}

// search button visibility

var SearchInputMd = document.getElementsByClassName("search-input")[0];
var SearchInputSm = document.getElementsByClassName("search-input")[1];

function SearchHide(...Element) {
  Element[0].style.display = "none";
}

function SearchShow(...Element) {
  Element[0].style.display = "inline-block";
}

// Hamburger menu visibility

var NavbarSm = document.getElementsByClassName("navbar-sm")[0];

function NavbarHide(...Element) {
  Element[0].style.display = "none";
  Element[1].style.display = "block";
}

function NavbarShow(...Element) {
  Element[0].style.display = "flex";
  Element[1].style.display = "none";
}

// // scroll to

function ScrollTo(ClassName) {
  let DomForScroll = document.getElementsByClassName(ClassName)[0];

  DomForScroll.scrollIntoView({
    behavior: "smooth",
  });
}

// // go to top

var GOTOTopBtn = document.getElementsByClassName("go-to-top")[0];
var mydiv = document.getElementsByClassName("cat-available")[0];

document.body.onscroll(scrollFunction());

function scrollFunction() {
  if (
    document.body.scrollTop > mydiv.offsetTop ||
    document.documentElement.scrollTop > mydiv.offsetTop
  ) {
    GOTOTopBtn.style.display = "flex";
  } else {
    GOTOTopBtn.style.display = "none";
  }
}

function GoToTop(){
  document.body.scrollTo({
    top: 0,
    behavior: 'smooth'
  });

}