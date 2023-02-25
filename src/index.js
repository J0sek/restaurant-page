import { creator } from "./elementCreator.js";
import "./style.css";

const banner = creator("div", "banner");

const homeBtn = creator("div", "banner-home");
homeBtn.textContent = "HOME";

const menuBtn = creator("div", "banner-menu");
menuBtn.textContent = "MENU";

const aboutBtn = creator("div", "banner-about");
aboutBtn.textContent = "ABOUT";

content.append(banner);

banner.append(homeBtn, menuBtn, aboutBtn);
