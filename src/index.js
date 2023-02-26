import banner from "./banner.js";
import "./style.css";

const content = document.getElementById("content");

let bannerDOM = banner();

content.append(bannerDOM);
