import creator from "./elementCreator.js";
import home from "./mainHome.js";

let currentTab = "menu";

function loadTabContent(tab, tabContent) {
  tab.addEventListener("click", () => {
    if (tab.classList[1] === currentTab) return;

    currentTab = tab.classList[1];

    let main = document.querySelector(".main");

    let content = document.getElementById("content");

    content.removeChild(main);

    content.append(tabContent);
  });
}

function bannerMaker() {
  const banner = creator("div", "banner");

  const homeBtn = creator("div", "banner-btn", "home");
  homeBtn.textContent = "HOME";
  loadTabContent(homeBtn, home);

  const menuBtn = creator("div", "banner-btn", "menu");
  menuBtn.textContent = "MENU";

  const aboutBtn = creator("div", "banner-btn", "about");
  aboutBtn.textContent = "ABOUT";

  banner.append(homeBtn, menuBtn, aboutBtn);

  return banner;
}

let banner = bannerMaker();

let testList = document.querySelectorAll(".banner-btn");

testList.forEach((x) => x.addEventListener("click", () => console.log(1)));

export default banner;
