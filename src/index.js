import banner from "./banner.js";
import home from "./mainHome.js";
import footer from "./footer.js";
import "./style.css";

const content = document.getElementById("content");

content.append(banner);

content.append(home);

content.append(footer);
