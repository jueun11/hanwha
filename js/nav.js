const PcMenu = document.getElementById("pc_menu");
const Main = document.getElementById("main");
const Header = document.getElementById("header");
const PcMenuLine = document.getElementById("pc_menu_line");
const PcMenuMore = Array.from(document.querySelectorAll(".pc_menu_more"));
const Container = document.getElementById("container");
const btnFound = document.getElementsByClassName("btnFound")[0];
const pcNavFound = Array.from(document.getElementsByClassName("pc_nav_found"));
let mouseEvent = true;
let BGheightValue = 0;

function fadeInBG(event) {
  Header.classList.add("navTransition");
  mouseEvent = true;
  for (let i = 0; i < PcMenuMore.length; i++) {
    PcMenuMore[i].style.display = "flex";
    PcMenuLine.style.opacity = "1";
    let fadeInBG = setInterval(function () {
      Header.style.height = BGheightValue + "px";
      if (BGheightValue < 360) {
        BGheightValue = BGheightValue + 2;
        if (mouseEvent == false) {
          clearInterval(fadeInBG);
        }
      } else {
        BGheightValue = 360;
        clearInterval(fadeInBG);
      }
    }, 0.1);
  }
}

function fadeOutBG(event) {
  mouseEvent = false;
  for (let i = 0; i < PcMenuMore.length; i++) {
    let fadeOutBG = setInterval(function () {
      Header.style.height = BGheightValue + "px";
      if (BGheightValue > 64) {
        BGheightValue = BGheightValue - 2;
        if (mouseEvent == true) {
          clearInterval(fadeOutBG);
        }
      } else {
        BGheightValue = 64;
        clearInterval(fadeOutBG);
        PcMenuMore[i].style.display = "none";
        PcMenuLine.style.opacity = "0";

        for (let i = 0; i < pcNavFound.length; i++) {
          pcNavFound[i].style.display = "none";
        }
      }
    }, 0.1);
  }
}

if (matchMedia("screen and (min-width: 1024px)").matches) {
  // 1024px 이상에서 사용할 스크립트

  PcMenu.addEventListener("mouseenter", fadeInBG);
  Header.addEventListener("mouseleave", fadeOutBG);
  Header.addEventListener("mouseenter", function () {
    console.log("이벤추가");
    Header.classList.add("navTransition");
  });
  Header.addEventListener("mouseleave", function () {
    console.log("이벤제거");
    setTimeout(function () {
      Header.classList.remove("navTransition");
    }, 300);
  });
} else {
  // 1024px 미만에서 사용할 스크립트
}

//todo 타블렛 햄버거 메뉴 액션
const HamburgerMenu = document.getElementsByClassName("hamburger_menu")[0];
const TabletMenuOn = document.getElementById("tablet_mobile_menu_on");
const TabletMenuList = document.getElementById("tablet_mobile_menu_list");
const TabletMenuBg = document.getElementById("tablet_mobile_menu_bg");
const MenuClose = Array.from(document.querySelectorAll(".menuClose"));
console.log(MenuClose);
console.log(TabletMenuOn);

//*팝업시 뒤부분 스크롤 제거
const body = document.querySelector("body");
let scrollPosition = 0;

//*메뉴 열기

function tabletHamburgerMenu(event) {
  TabletMenuList.style.opacity = "1";
  TabletMenuOn.style.left = "0vw";
  TabletMenuBg.style.opacity = "0.2";
  TabletMenuList.style.left = "35vw";
  scrollPosition = window.pageYOffset;
  body.style.overflow = "hidden";
  body.style.position = "fixed";
  body.style.top = `-${scrollPosition}px`;
  body.style.width = "100%";
}

function mobileHamburgerMenu(event) {
  TabletMenuOn.style.left = "0vw";
  TabletMenuBg.style.opacity = "0.2";
  TabletMenuList.style.left = "0vw";
  scrollPosition = window.pageYOffset;
  body.style.overflow = "hidden";
  body.style.position = "fixed";
  body.style.top = `-${scrollPosition}px`;
  body.style.width = "100%";
}

//*메뉴 닫기
for (let i = 0; i < MenuClose.length; i++) {
  MenuClose[i].addEventListener("click", function () {
    TabletMenuOn.style.left = "100vw";
    TabletMenuBg.style.opacity = "0";
    TabletMenuList.style.left = "100vw";
    body.style.removeProperty("overflow");
    body.style.removeProperty("position");
    body.style.removeProperty("top");
    body.style.removeProperty("width");
    window.scrollTo(0, scrollPosition);
  });
}

//*타블렛, 모바일 메뉴 더보기

const tabletMenuArrowBtn = Array.from(
  document.getElementsByClassName("tablet_mobile_menu_arrow_btn")
);
const tabletMenuMore = Array.from(
  document.getElementsByClassName("tablet_mobile_menu_more")
);
const tabletMenuFirstLi = Array.from(
  document.querySelectorAll("#tablet_mobile_menu_list > ul > li")
);
console.log(tabletMenuFirstLi);
let menuClickArray = [0, 0, 0, 0, 0, 0];

for (let i = 0; i < tabletMenuArrowBtn.length; i++) {
  tabletMenuArrowBtn[i].addEventListener("click", function () {
    tabletMenuMore[i].style.display = "block";
  });
  tabletMenuArrowBtn[i].addEventListener("click", function () {
    if (menuClickArray[i] === 0) {
      tabletMenuMore[i].style.display = "block";
      tabletMenuFirstLi[i].style.backgroundColor = "#f89b6c";
      menuClickArray[i]++;
      tabletMenuArrowBtn[i].style.transform = "scaleY(-1)";
    } else {
      menuClickArray[i] = 0;
      tabletMenuMore[i].style.display = "none";
      tabletMenuArrowBtn[i].style.transform = "scaleY(1)";
      tabletMenuFirstLi[i].style.backgroundColor = "#fbb584";
    }
  });
}

if (matchMedia("screen and (min-width: 768px)").matches) {
  // 768px 이상에서 사용할 스크립트
  HamburgerMenu.addEventListener("click", tabletHamburgerMenu);
} else {
  // 768px 미만에서 사용할 스크립트
  HamburgerMenu.addEventListener("click", mobileHamburgerMenu);
}

const pcSiteBtn = document.getElementById("pc_move_site");
const pcSiteList = document.getElementById("pc_site_list");
const pcSiteIcon = document.getElementById("pc_site_btn");
let siteVaule = false;

pcSiteBtn.addEventListener("click", () => {
  siteVaule = !siteVaule;
  siteVaule
    ? ((pcSiteList.style.display = "block"),
      (pcSiteIcon.style.rotate = "180deg"),
      (pcSiteIcon.style.marginTop = "-4px"))
    : ((pcSiteList.style.display = "none"),
      (pcSiteIcon.style.rotate = "0deg"),
      (pcSiteIcon.style.marginTop = "0px"));
});
