import creator from "./elementCreator.js";
import home from "./mainHome.js";
import menu from "./mainMenu.js";
import about from "./mainAbout.js";

let currentTab = "home";

function loadTabContent(tab, tabContent) {
  tab.addEventListener("click", () => {
    if (tab.classList[1] === currentTab) return;

    currentTab = tab.classList[1];

    let main = document.querySelector(".main");

    let content = document.getElementById("content");

    content.removeChild(main);

    content.insertBefore(tabContent, document.querySelector(".footer"));
  });
}

function bannerMaker() {
  const banner = creator("div", "banner");

  const homeBtn = creator("div", "banner-btn", "home");
  homeBtn.textContent = "HOME";
  loadTabContent(homeBtn, home);

  const menuBtn = creator("div", "banner-btn", "menu");
  menuBtn.textContent = "MENU";
  loadTabContent(menuBtn, menu);

  const aboutBtn = creator("div", "banner-btn", "about");
  aboutBtn.textContent = "ABOUT";
  loadTabContent(aboutBtn, about);

  banner.append(homeBtn, menuBtn, aboutBtn);

  return banner;
}

let banner = bannerMaker();

let testList = document.querySelectorAll(".banner-btn");

testList.forEach((x) => x.addEventListener("click", () => console.log(1)));

export default banner;
