import creator from "./elementCreator.js";
import main from "./mainHome.js";

function bannerMaker() {
  const banner = creator("div", "banner");

  const homeBtn = creator("div", "banner-btn", "home");
  homeBtn.textContent = "HOME";

  const menuBtn = creator("div", "banner-btn", "menu");
  menuBtn.textContent = "MENU";

  const aboutBtn = creator("div", "banner-btn", "about");
  aboutBtn.textContent = "ABOUT";

  banner.append(homeBtn, menuBtn, aboutBtn);

  return banner;
}

let banner = bannerMaker();

export default banner;
