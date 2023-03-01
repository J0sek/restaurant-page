import creator from "./elementCreator.js";

const menu = creator("div", "main", "menu");

const menuTitle = creator("div", "menuTitle");

const menuTitleCursive = creator("div", "menuTitleCursive");
menuTitleCursive.textContent = "Bienvenidos";

const menuTitleNormal = creator("div", "menuTitleNormal");
menuTitleNormal.textContent = "MENU";

menuTitle.append(menuTitleCursive, menuTitleNormal);

menu.append(menuTitle);

function MenuItem(name, desc, price) {
  return { name, desc, price };
}

function menuItemDOM(menuItem, num) {
  const item = creator("div", `item${num}`);

  const menuName = creator("div", `itemName${num}`);
  menuName.textContent = menuItem.name;

  const menuDesc = creator("div", `itemDesc${num}`);
  menuDesc.textContent = menuItem.desc;

  const menuPrice = creator("div", `itemPrice${num}`);
  menuPrice.textContent = menuItem.price;

  item.append(menuName, menuDesc, menuPrice);

  return item;
}

let menu1 = MenuItem(
  "Pan canilla",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet",
  "$20"
);

let menu2 = MenuItem(
  "Pan creas",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet",
  "$20"
);

let menu3 = MenuItem(
  "Pan Nini",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet",
  "$20"
);

menu.append(
  menuTitle,
  menuItemDOM(menu1, 1),
  menuItemDOM(menu2, 2),
  menuItemDOM(menu3, 3)
);

export default menu;
/*
const menu1 = creator('div', 'menu1');
const menuName1 = creator("div", "menuName1");
menuName1.textContent = "Pan canilla";

const menuDesc1 = creator("div", "menuDesc1");
menuName1.textContent =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet";

const menuPrice1 = creator("div", "menuPrice1");
menuPrice1.textContent = "20$";
menu1.append(menuName1, menuDesc1, menuPrice1);

const menu2 = creator("div", "menu2");
const menuName2 = creator("div", "menuName2");
menuName2.textContent = "Pan sobado";

const menuDesc2 = creator("div", "menuDesc2");
menuName2.textContent =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet";

const menuPrice2 = creator("div", "menuPrice2");
menuPrice2.textContent = "20$";
menu2.append(menuName2, menuDesc2, menuPrice2);

const menu3 = creator("div", "menu3");
const menuName3 = creator("div", "menuName3");
menuName3.textContent = "Pan Andino";

const menuDesc3 = creator("div", "menuDesc3");
menuName3.textContent =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet";

const menuPrice3 = creator("div", "menuPrice3");
menuPrice3.textContent = "20$";
menu3.append(menuName3, menuDesc3, menuPrice3);
*/
