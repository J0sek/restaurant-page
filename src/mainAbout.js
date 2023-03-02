import creator from "./elementCreator.js";

let about = creator("div", "main", "about");

let title = creator("div", "aboutTitle");

let titleCursive = creator("div", "aboutTitleCursive");
titleCursive.textContent = "Bienvenidos";

let titleNormal = creator("div", "aboutTitleNormal");
titleNormal.textContent = "NOSOTROS";

let aboutText = creator("div", "aboutText");
aboutText.textContent =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet ultrices porttitor, ex ex aliquet purus, pellentesque rhoncus felis ipsum nec purus. Donec id enim in risus pellentesque blandit. Proin sed nibh nec arcu mollis rhoncus in sit amet augue. Suspendisse magna nisl, eleifend non tempor et, luctus id quam. Nulla bibendum vulputate ante, non malesuada eros lobortis euismod";

title.append(titleCursive, titleNormal);

about.append(title, aboutText);

export default about;
