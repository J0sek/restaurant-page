import creator from "./elementCreator.js";

function banner() {
  const banner = creator("div", "banner");

  const homeBtn = creator("div", "banner-home");
  homeBtn.textContent = "HOME";

  const menuBtn = creator("div", "banner-menu");
  menuBtn.textContent = "MENU";

  const aboutBtn = creator("div", "banner-about");
  aboutBtn.textContent = "ABOUT";

  banner.append(homeBtn, menuBtn, aboutBtn);

  return banner;
}

export default banner;
