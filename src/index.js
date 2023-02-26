import banner from "./banner.js";
import "./style.css";

const content = document.getElementById("content");

content.append(banner);

const main = document.createElement("div");

main.classList.add("main", "home");

content.append(main);
